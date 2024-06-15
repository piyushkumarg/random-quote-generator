import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from './slices/bookmarkSlice'
import quoteReducer from './slices/quoteSlice'
import tagsReducer from './slices/tagsSlice'

const store = configureStore({
    reducer:{
        bookmark:bookmarkReducer,
        quote:quoteReducer,
        tags:tagsReducer
    }
})

export default store;