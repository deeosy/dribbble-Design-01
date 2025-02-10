import {configureStore} from '@reduxjs/toolkit'
import contactReducer from '../Slice/contactSlice'

export const store = configureStore({
    reducer:{
        contact: contactReducer
    },
})