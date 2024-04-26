import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {DoneChanged} from '../features/done.js';

const MarkAsDoneButton = (props) =>{

    const dispatch = useDispatch();

    const done = useSelector((state)=>state.done);

    const TaskDone = (index) =>{
        if(done[index]){
            dispatch(DoneChanged(done.map((element,idx)=>idx!==index ? element :false)));
        }else{
            dispatch(DoneChanged(done.map((element,idx)=>idx!==index ? element :true)));
        }
    }

    return (
        <button className="InteractButton" onClick={()=>TaskDone(props.index)}> ✓ </button>
    )
}

export default MarkAsDoneButton;