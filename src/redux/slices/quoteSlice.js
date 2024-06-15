import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quote: null,
    tag:null
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setQuote(state, action) {
      state.quote = action.payload;
      state.tag = action.payload.tags[0]
    },
  },
});

export default quoteSlice.reducer;
export const { setQuote } = quoteSlice.actions;
