import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import InputWidth from '../functions/InputWidth.js';
import {EditInputChanged} from '../features/editInputHolder.js';
import {TodoChanged} from '../features/todo.js';
import {EditableDivChanged} from '../features/editableDiv.js';

const EditInput = (props) =>{

    const dispatch = useDispatch();

    const editInputHolder = useSelector((state)=>state.editInputHolder);

    const editableDiv = useSelector((state)=>state.editableDiv);

    const todo = useSelector((state)=>state.todo);

    const HandleEditChange = (event) =>{
        event.preventDefault();
        if(InputWidth(event.target.value)<=710){
          dispatch(EditInputChanged(event.target.value));
        }
    }

    const EditOnEnter = (element,index) =>{
        if(element.key==='Enter' && editInputHolder.length){
          dispatch(TodoChanged(todo.map((value,idx)=>idx!==index ? value :editInputHolder)));
          dispatch(EditInputChanged(""));
          dispatch(EditableDivChanged(editableDiv.map((value,idx)=>idx!==index ? value :false)));
        }
    }

    return (
        <input className="EditDiv"
            value={editInputHolder}
            onChange={HandleEditChange}
            onKeyDown={(e)=>EditOnEnter(e,props.index)}
            placeholder={"You have to write something since you decided to edit"}
            autoFocus
        ></input>
    )
}

export default EditInput;