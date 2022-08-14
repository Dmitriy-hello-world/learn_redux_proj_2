import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: '',
  region: ''
}

const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    addSearch: (state, { payload }) => {
      state.search = payload;
    },
    addRegion: (state, { payload }) => {
      state.region = payload;
    },
    resetControls: () => initialState,
  }
});

export const { addSearch, addRegion, resetControls } = controlsSlice.actions;

export const controlsReducer = controlsSlice.reducer;

export const selectFilter = (store) => store.controls.search;
export const selectRegion = (store) => store.controls.region;
