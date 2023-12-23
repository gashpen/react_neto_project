import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";

export default configureStore({
    reducer: {
        movie: searchReducer, 
        inputValue: searchReducer,
        moviePage: searchReducer,
        addFavorite: searchReducer,
        removeFavorite: searchReducer
    }
})