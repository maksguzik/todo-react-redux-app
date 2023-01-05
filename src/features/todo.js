import {createSlice} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    
    name : 'todo',
    initialState : [],
    reducers : {
        TodoChanged : (state, action) =>{
              return  state = action.payload;
        },
    }
})

export const { TodoChanged } = todoSlice.actions;

export default todoSlice.reducer;