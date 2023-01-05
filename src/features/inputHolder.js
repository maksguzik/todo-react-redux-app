import {createSlice} from '@reduxjs/toolkit'

export const inputSlice = createSlice({
    name : 'inputHolder',
    initialState : "",
    reducers : {
        InputChanged : (state, action) =>{
              return  state = action.payload;
        },
    }
})

export const { InputChanged } = inputSlice.actions;

export default inputSlice.reducer;