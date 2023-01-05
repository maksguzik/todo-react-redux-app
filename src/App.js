import React from 'react'
import './App.css';
import List from './Components/List.js'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {InputChanged} from './features/inputHolder.js';
import {TodoChanged} from './features/todo.js';
import {DoneChanged} from './features/done.js';
import {EditAbleDivChanged} from './features/editAbleDiv.js';
import InputWidth from './functions/InputWidth';

let App = () => {

  const dispatch = useDispatch();

  // let [todo,setTodo] = useState([]);
  const todo = useSelector((state)=>state.todo);

  // let [inputHolder, setinputHolder] = useState("");
  const inputHolder = useSelector((state)=>state.inputHolder)

  // let [done, setDone] = useState([]);
  const done = useSelector((state)=>state.done);

  // let [editAbleDiv, setEditAbleDiv] = useState([]);
  const editAbleDiv = useSelector((state)=>state.editAbleDiv);

  let ToDoDiv = (element) =>{
    if(element.key==='Enter' && inputHolder.length){
      element.preventDefault();
      dispatch(TodoChanged(todo.concat([inputHolder])))
      dispatch(InputChanged(""));
      dispatch(DoneChanged(done.concat([false])));
      dispatch(EditAbleDivChanged(editAbleDiv.concat([false])));
    }else if(element.key==='Enter' && !inputHolder.length){
      element.preventDefault();
    }
  }

  let HandleSubmit = (element) =>{
    if(inputHolder.length){
      dispatch(TodoChanged(todo.concat([inputHolder])));
      dispatch(InputChanged(""));
      dispatch(DoneChanged(done.concat([false])));
      dispatch(EditAbleDivChanged(editAbleDiv.concat([false])));
    } 
  }

  let HandleChange = (event) =>{
    event.preventDefault();
    if(InputWidth(event.target.value)<=710){
      dispatch(InputChanged(event.target.value));
    }
  }

  let DeleteAllTasks = () =>{
    dispatch(TodoChanged([]));
    dispatch(DoneChanged([]));
    dispatch(EditAbleDivChanged([]));
  }

  let DeleteDoneTasks = () =>{
    dispatch(TodoChanged(todo.filter((element,idx)=>done[idx]!==true)));
    dispatch(DoneChanged(done.filter((element)=>element!==true)));
    dispatch(EditAbleDivChanged(editAbleDiv.filter((element,idx)=>done[idx]!==true)))
  }

  return (
    <div className="Wrapper">
      <div className="Container">
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
        <div>
          <button className="NameOfList"
          onClick={HandleSubmit}
          >SUBMIT DODOS 💪</button>
        </div>
        <List/>
        <div>
          <button className="DeleteDone"
          onClick={DeleteDoneTasks}>Delete all done</button>
          <button className="DeleteAll"
          onClick={DeleteAllTasks}>Delete all DODOS</button>
        </div>
      </div>
    </div>
  );
}

export default App;
