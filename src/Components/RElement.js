import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {TodoChanged} from '../features/todo.js';
import {EditInputChanged} from '../features/editInputHolder.js';
import {DoneChanged} from '../features/done.js';
import {EditAbleDivChanged} from '../features/editAbleDiv.js';
import InputWidth from '../functions/InputWidth.js';

let Line = (props) =>{

    const index = props.index;

    const dispatch = useDispatch();

    const done = useSelector((state)=>state.done);

    const editAbleDiv = useSelector((state)=>state.editAbleDiv);

    const todo = useSelector((state)=>state.todo);

    const editInputHolder = useSelector((state)=>state.editInputHolder);

    let TaskDone = (index) =>{
        if(done[index]){
            dispatch(DoneChanged(done.map((element,idx)=>idx!==index ? element :false)));
        }else{
            dispatch(DoneChanged(done.map((element,idx)=>idx!==index ? element :true)));
        }
    }

    let TaskRemove = (index) =>{
        dispatch(TodoChanged(todo.filter((element,idx)=>idx!==index)));
        dispatch(DoneChanged(done.filter((element,idx)=>idx!==index)));
        dispatch(EditAbleDivChanged(editAbleDiv.filter((element,idx)=>idx!==index)));
    }

    let HandleEdit = (index) =>{
        const isEdited = (editAbleDiv.indexOf(true)===-1) ? true : false;
        if(!done[index] && isEdited){
          dispatch(EditAbleDivChanged(editAbleDiv.map((element,idx)=>idx!==index ? element :true)));
          dispatch(EditInputChanged(todo[index]));
          dispatch(TodoChanged(todo.map((element,idx)=>index!==idx ? element : "")));
        }
    }

    let EditOnEnter = (element,index) =>{
        if(element.key==='Enter' && editInputHolder.length){
          dispatch(TodoChanged(todo.map((value,idx)=>idx!==index ? value :editInputHolder)));
          dispatch(EditInputChanged(""));
          dispatch(EditAbleDivChanged(editAbleDiv.map((value,idx)=>idx!==index ? value :false)));
        }
    }

    const HandleEditChange = (event) =>{
        event.preventDefault();
        if(InputWidth(event.target.value)<=710){
          dispatch(EditInputChanged(event.target.value));
        }
    }

    let TodosContext = (
        <>
        <button className="InteractButton" onClick={()=>TaskDone(index)}> ✓ </button>
        <div className="Line"
        style={{textDecoration:done[index]?"line-through":"none"}}
        onClick={()=>HandleEdit(index)}
        >{todo[index]}</div>
        <button className="InteractButton" onClick={()=>TaskRemove(index)}> ✖ </button>
        </>
    );

    if(editAbleDiv[index]){
        TodosContext = (
            <input className="EditDiv"
            value={editInputHolder}
            onChange={HandleEditChange}
            onKeyDown={(e)=>EditOnEnter(e,index)}
            placeholder={"You have to write something since you decided to edit"}
            autoFocus
            ></input>
        )
    }

    return(
        <>
        {TodosContext}
        </>
    )
}

export default Line;