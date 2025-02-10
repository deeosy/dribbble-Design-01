import { createSlice } from '@reduxjs/toolkit'

const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        users:[],
    },
    reducers:{
        addUser:(state, action) => {
          state.users.push(action.payload)
        }
    }
})

export const {addUser} =contactSlice.actions;
export default contactSlice.reducer;
