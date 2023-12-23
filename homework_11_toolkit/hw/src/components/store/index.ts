import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tooliktSlice from './tooliktSlice';

const rootReducer = combineReducers({
    toolkit: tooliktSlice
})

export const store = configureStore({
    reducer: rootReducer
})