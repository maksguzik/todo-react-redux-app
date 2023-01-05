import Line from './RElement.js'
import {useSelector} from 'react-redux'

let List = () =>{

    const todo = useSelector((state)=>state.todo);

    return (
        <>
        <div className="List">
          {todo.map((elementVal,index)=> { 
            return (
          <Line  
          key={elementVal.toString()+index.toString()}
          index={index}
          />
          )})}
        </div>
        </>
    )
}

export default List;