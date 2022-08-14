import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currentCountry: null,
  status: 'idle', // received | loading | rejected
  error: null,
  neighbors: [],
}

export const loadCurrentCountry = createAsyncThunk(
  '@@details/load-current-country',
  (name, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name));
  }
);

export const loadNeighbors = createAsyncThunk(
  '@@details/load-neighbors',
  (borders, { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders));
  }
);

const detailsSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    resetCurrentCountry: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCurrentCountry.pending, (store, action) => {
        store.status = 'loading';
        store.error = null
      })
      .addCase(loadCurrentCountry.rejected, (store, action) => {
        store.status = 'rejected';
        store.error = action.payload || action.meta.error;
      })
      .addCase(loadCurrentCountry.fulfilled, (store, { payload }) => {
        store.status = 'received';
        store.currentCountry = payload.data[0];
      })
      .addCase(loadNeighbors.fulfilled, (store, { payload }) => {
        store.neighbors = payload.data.map(n => n.name);
      })
  }
});

export const { resetCurrentCountry } = detailsSlice.actions;

export const detailsReducer = detailsSlice.reducer;

export const selectCurrentCountryInfo = (store) => store.details;

export const selectNeighbors = (store) => store.details.neighbors;
