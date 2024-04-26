import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {DoneChanged} from '../features/done.js';
import {EditableDivChanged} from '../features/editableDiv.js';
import {TodoChanged} from '../features/todo.js';

const DeleteTaskButton = (props) =>{

    const dispatch = useDispatch();

    const done = useSelector((state)=>state.done);

    const editableDiv = useSelector((state)=>state.editableDiv);

    const todo = useSelector((state)=>state.todo);

    const TaskRemove = (index) =>{
        dispatch(TodoChanged(todo.filter((element,idx)=>idx!==index)));
        dispatch(DoneChanged(done.filter((element,idx)=>idx!==index)));
        dispatch(EditableDivChanged(editableDiv.filter((element,idx)=>idx!==index)));
    }

    return (
        <button className="InteractButton" onClick={()=>TaskRemove(props.index)}> ✖ </button>
    )
}

export default DeleteTaskButton;