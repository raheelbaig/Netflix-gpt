import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleInput: false,
  },
  reducers: {
    handleToggelInput: (state) => {
      state.toggleInput = !state.toggleInput;
    },
  },
});

export const { handleToggelInput } = gptSlice.actions;

export default gptSlice.reducer;
