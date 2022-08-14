import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: '@@theme',
  initialState: 'dark',
  reducers: {
    addTheme: (_, { payload }) => payload
  }
});

export const { addTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
