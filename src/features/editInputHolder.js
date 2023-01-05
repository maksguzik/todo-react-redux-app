import {createSlice} from '@reduxjs/toolkit'

export const editInputSlice = createSlice({
    name : 'editInputHolder',
    initialState : "",
    reducers : {
        EditInputChanged : (state, action) =>{
              return  state = action.payload;
        },
    }
})

export const { EditInputChanged } = editInputSlice.actions;

export default editInputSlice.reducer;