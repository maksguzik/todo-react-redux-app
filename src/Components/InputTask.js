import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {TodoChanged} from '../features/todo.js';
import {DoneChanged} from '../features/done.js';
import {EditableDivChanged} from '../features/editableDiv.js';
import {InputChanged} from '../features/inputHolder.js';
import InputWidth from '../functions/InputWidth.js';

const InputTask = () =>{

    const dispatch = useDispatch();

    const inputHolder = useSelector((state)=>state.inputHolder);

    const todo = useSelector((state)=>state.todo);

    const done = useSelector((state)=>state.done);

    const editableDiv = useSelector((state)=>state.editableDiv)

    const ToDoDiv = (element) =>{
        if(element.key==='Enter' && inputHolder.length){
          element.preventDefault();
          dispatch(TodoChanged(todo.concat([inputHolder])))
          dispatch(InputChanged(""));
          dispatch(DoneChanged(done.concat([false])));
          dispatch(EditableDivChanged(editableDiv.concat([false])));
        }else if(element.key==='Enter' && !inputHolder.length){
          element.preventDefault();
        }
    }

    const HandleChange = (event) =>{
        event.preventDefault();
        if(InputWidth(event.target.value)<=710){
          dispatch(InputChanged(event.target.value));
        }
    }

    return (
         <div> 
            <form>
                <input className="Input" 
                value={inputHolder}
                placeholder={"Start making your own todo list"}
                onKeyDown={ToDoDiv}
                onChange={HandleChange}
                ></input>
            </form>
        </div>
    )
}

export default InputTask;