import React from 'react'
import EditInput from './EditInput.js';
import MarkAsDoneButton from './MarkAsDoneButton.js';
import DeleteTaskButton from './DeleteTaskButton.js';
import TextHolderOfTask from './TextHolderOfTask.js';
import { useSelector } from 'react-redux';

const Task = (props) =>{
    
    const editableDiv = useSelector((state)=>state.editableDiv);

    return(
        (editableDiv[props.index]) ? 
            <>
                <EditInput index={props.index}/>
            </>
            : 
            <>
                <MarkAsDoneButton index={props.index}/>
                <TextHolderOfTask index={props.index}/>
                <DeleteTaskButton index={props.index}/>
            </>
    )
}

export default Task;