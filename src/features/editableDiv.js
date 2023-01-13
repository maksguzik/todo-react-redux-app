import {createSlice} from '@reduxjs/toolkit'

export const editableDivSlice = createSlice({
    name : 'editAbleDiv',
    initialState : [],
    reducers : {
        EditableDivChanged : (state, action) =>{
              return  state = action.payload;
        },
    }
})

export const { EditableDivChanged } = editableDivSlice.actions;

export default editableDivSlice.reducer;