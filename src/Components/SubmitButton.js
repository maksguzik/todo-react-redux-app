import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {TodoChanged} from '../features/todo.js';
import {InputChanged} from '../features/inputHolder.js';
import {DoneChanged} from '../features/done.js';
import {EditableDivChanged} from '../features/editableDiv.js';

const SubmitButton = () =>{

    const dispatch = useDispatch();

    const done = useSelector((state)=>state.done);

    const editableDiv = useSelector((state)=>state.editableDiv);

    const todo = useSelector((state)=>state.todo);

    const inputHolder = useSelector((state)=>state.inputHolder)

    const HandleSubmit = (element) =>{
        if(inputHolder.length){
          dispatch(TodoChanged(todo.concat([inputHolder])));
          dispatch(InputChanged(""));
          dispatch(DoneChanged(done.concat([false])));
          dispatch(EditableDivChanged(editableDiv.concat([false])));
        } 
      }

    return(
        <div>
          <button className="Submit"
          onClick={HandleSubmit}
          >SUBMIT DODOS 💪</button>
        </div>
    )
}

export default SubmitButton;