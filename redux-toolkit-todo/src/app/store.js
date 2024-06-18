// Step 1: Configure store from core redux
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer: todoReducer
})