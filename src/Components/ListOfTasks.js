import Task from './Task.js'
import {useSelector} from 'react-redux'

const ListOfTasks = () =>{

    const todo = useSelector((state)=>state.todo);

    return (
        <>
        <div className="List">
          {todo.map((elementVal,index)=> { 
            return (
          <Task  
          key={elementVal.toString()+index.toString()}
          index={index}
          />
          )})}
        </div>
        </>
    )
}

export default ListOfTasks;