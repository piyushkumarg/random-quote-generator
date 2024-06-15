import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quotes: JSON.parse(localStorage.getItem("bookmarks")) || [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    toggleBookmark(state,action){
      const res = state.quotes.find(q => q._id === action.payload._id)
      if(res){
        state.quotes = state.quotes.filter((q) => q._id !== action.payload._id);
      }
      else{
        state.quotes.push(action.payload);
      }
      localStorage.setItem("bookmarks", JSON.stringify(state.quotes));
    },
  },
});

export default bookmarkSlice.reducer;
export const { toggleBookmark } = bookmarkSlice.actions;
