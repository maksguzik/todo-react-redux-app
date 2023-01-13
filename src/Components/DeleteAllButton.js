import React from 'react'
import {useDispatch} from 'react-redux'
import {TodoChanged} from '../features/todo.js';
import {DoneChanged} from '../features/done.js';
import {EditableDivChanged} from '../features/editableDiv.js';

const DeleteAllButton = () =>{

    const dispatch = useDispatch();

    const DeleteAllTasks = () =>{
        dispatch(TodoChanged([]));
        dispatch(DoneChanged([]));
        dispatch(EditableDivChanged([]));
    }   

    return (
        <button className="DeleteAll"
          onClick={DeleteAllTasks}>Delete all DODOS</button>
    )
}

export default DeleteAllButton;