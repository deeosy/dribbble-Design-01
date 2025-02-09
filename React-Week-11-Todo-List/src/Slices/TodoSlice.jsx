import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask:(state, action) => {
         state.tasks.push(action.payload) 
        },

        deleteTask:(state, action)=>{
            console.log(state.tasks);
            
            state.tasks = state.tasks.filter((task) => task.id !== action.payload )
        }
        
    }
})

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;