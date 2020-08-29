import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    query: "",
  },
  reducers: {
    search: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;
export const { search } = rootSlice.actions;
