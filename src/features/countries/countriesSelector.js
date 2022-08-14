import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  status: 'idle', // received | loading | rejected
  list: [],
  error: null, 
}

export const loadCountries = createAsyncThunk(
  '@@countries/load-countries',
  (_, {extra: {client, api}}) => {
    return client.get(api.ALL_COUNTRIES)
  }
);

const countriesSlice = createSlice({
  name: '@@countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (store, action) => {
        store.status = 'loading';
        store.error = null;
      })
      .addCase(loadCountries.rejected, (store, action) => {
        store.action = 'rejected';
        store.error = action.payload || action.meta.error;
      })
      .addCase(loadCountries.fulfilled, (store, { payload }) => {
        store.list = payload.data;
        store.status = 'received';
      })
  }
});

export const countriesReducer = countriesSlice.reducer;

export const selectCountriesInfo = (store) => ({
  status: store.countries.status,
  error: store.countries.error,
  lng: store.countries.list.length
})

export const selectAllCountries = (store) => store.countries.list;

export const selectFilteredCountries = (store, { filter = '', region = ''}) => {
  return store.countries.list.filter(country => {
    return  country.name.toLowerCase().includes(filter.toLocaleLowerCase()) 
            && country.region.toLowerCase().includes(region.toLowerCase())
  });
}