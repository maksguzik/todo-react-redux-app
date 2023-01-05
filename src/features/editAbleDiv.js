import {createSlice} from '@reduxjs/toolkit'

export const editAbleDivSlice = createSlice({
    name : 'editAbleDiv',
    initialState : [],
    reducers : {
        EditAbleDivChanged : (state, action) =>{
              return  state = action.payload;
        },
    }
})

export const { EditAbleDivChanged } = editAbleDivSlice.actions;

export default editAbleDivSlice.reducer;