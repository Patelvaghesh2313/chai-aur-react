
import { createSlice, nanoid } from "@reduxjs/toolkit"; 


const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
}

// In Slice -> Reducer when you define any function you will always have access to two parameters state and action
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

// Always need to export internal functions and properties of slices
export const { addTodo, removeTodo } = todoSlice.actions

// Always need to export reducers as default
export default todoSlice.reducer