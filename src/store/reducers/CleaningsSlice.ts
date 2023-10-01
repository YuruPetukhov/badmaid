import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCleanings } from "./ActionCreators";
import { ICleanings, ICleaningsState } from "../../Interfaces";

const initialState: ICleaningsState = {
  cleanings: { upcoming: [], previous: [] },
  isLoading: false,
  error: "",
};

export const cleaningsSlice = createSlice({
  name: "cleanings",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCleanings.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCleanings.fulfilled.type]: (
      state,
      { payload }: PayloadAction<ICleanings>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.cleanings = payload;
    },
    [fetchCleanings.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default cleaningsSlice.reducer;
