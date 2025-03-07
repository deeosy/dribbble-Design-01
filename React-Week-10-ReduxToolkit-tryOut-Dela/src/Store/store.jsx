import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Slice/slice'
 
export const store = configureStore({
    reducer:{
        counterReducer,
    }
})