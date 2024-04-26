import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {TodoChanged} from '../features/todo.js';
import {EditInputChanged} from '../features/editInputHolder.js';
import {EditableDivChanged} from '../features/editableDiv.js';

const TextHolderOfTask = (props) =>{

    const dispatch = useDispatch();

    const done = useSelector((state)=>state.done);

    const editableDiv = useSelector((state)=>state.editableDiv);

    const todo = useSelector((state)=>state.todo);

    const HandleEdit = (index) =>{
        const isEdited = (editableDiv.indexOf(true)===-1) ? true : false;
        if(!done[index] && isEdited){
          dispatch(EditableDivChanged(editableDiv.map((element,idx)=>idx!==index ? element :true)));
          dispatch(EditInputChanged(todo[index]));
          dispatch(TodoChanged(todo.map((element,idx)=>index!==idx ? element : "")));
        }
    }

    return (
        <div className="Task"
            style={{textDecoration:done[props.index]?"line-through":"none"}}
            onClick={()=>HandleEdit(props.index)}
        >{todo[props.index]}</div>
    )
}

export default TextHolderOfTask;