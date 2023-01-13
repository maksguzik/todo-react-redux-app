import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {TodoChanged} from '../features/todo.js';
import {DoneChanged} from '../features/done.js';
import {EditableDivChanged} from '../features/editableDiv.js';

const DeleteDoneButton = () =>{

    const dispatch = useDispatch();

    const todo = useSelector((state)=>state.todo);

    const done = useSelector((state)=>state.done);

    const editableDiv = useSelector((state)=>state.editableDiv);

    const DeleteDoneTasks = () =>{
        dispatch(TodoChanged(todo.filter((element,idx)=>done[idx]!==true)));
        dispatch(DoneChanged(done.filter((element)=>element!==true)));
        dispatch(EditableDivChanged(editableDiv.filter((element,idx)=>done[idx]!==true)))
      }    

    return (
        <button className="DeleteDone"
          onClick={DeleteDoneTasks}>Delete all done</button>
    )
}

export default DeleteDoneButton;