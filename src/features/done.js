import {createSlice} from '@reduxjs/toolkit'

export const doneSlice = createSlice({
    
    name : 'done',
    initialState : [],
    reducers : {
        DoneChanged : (state, action) =>{
              return  state = action.payload;
        },
    }
})

export const { DoneChanged } = doneSlice.actions;

export default doneSlice.reducer;