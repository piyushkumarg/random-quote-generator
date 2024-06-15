import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: []
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    setTags(state, action) {
      state.tags = action.payload;
    },
  },
});

export default tagsSlice.reducer;
export const { setTags } = tagsSlice.actions;
