import React, {useState} from 'react'
import './App.css';
import Line from './Components/RElement.js'

let App = () => {

  let [todo,setTodo] = useState([]);

  let [inputHolder, setinputHolder] = useState("");

  let [done, setDone] = useState([]);

  let [editAbleDiv, setEditAbleDiv] = useState([]);

  let [editInputHolder, setEditInputHolder] = useState("");

  let ToDoDiv = (element) =>{
    if(element.key==='Enter' && inputHolder.length){
      element.preventDefault();
      setTodo(todo.concat([inputHolder]));
      setinputHolder("");
      setDone(done.concat([false]));
      setEditAbleDiv(editAbleDiv.concat([false]));
    }else if(element.key==='Enter' && !inputHolder.length){
      element.preventDefault();
    }
  }

  let HandleSubmit = (element) =>{
    if(inputHolder.length){
      setTodo(todo.concat([inputHolder]));
      setinputHolder("");
      setDone(done.concat([false]));
      setEditAbleDiv(editAbleDiv.concat([false]));
    } 
  }

  const InputWidth = (text) =>{
    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    context.font = "20px Arial, Helvetica, sans-serif";
    let width = context.measureText(text).width;
    return width;
  }

  let HandleChange = (event) =>{
    event.preventDefault();
    if(InputWidth(event.target.value)<=710){
      setinputHolder(event.target.value);
    }
  }

  let TaskDone = (index) =>{
    if(done[index]){
      setDone(done.map((element,idx)=>idx!==index ? element :false));
    }else{
      setDone(done.map((element,idx)=>idx!==index ? element :true));
    }
  }

  let TaskRemove = (index) =>{
    setTodo(todo.filter((element,idx)=>idx!==index));
    setDone(done.filter((element,idx)=>idx!==index));
    setEditAbleDiv(editAbleDiv.filter((element,idx)=>idx!==index));
  }

  let DeleteAllTasks = () =>{
    setTodo([]);
    setDone([]);
    setEditAbleDiv([]);
  }

  let DeleteDoneTasks = () =>{
    setTodo(todo.filter((element,idx)=>done[idx]!==true));
    setDone(done.filter((element)=>element!==true));
    setEditAbleDiv(editAbleDiv.filter((element,idx)=>done[idx]!==true));
  }

  let HandleEdit = (index) =>{
    const isEdited = (editAbleDiv.indexOf(true)===-1) ? true : false;
    if(!done[index] && isEdited){
      setEditAbleDiv(editAbleDiv.map((element,idx)=>idx!==index ? element :true));
      setEditInputHolder(todo[index]);
      setTodo(todo.map((element,idx)=>index!==idx ? element : ""));
    }
  }

  let EditOnEnter = (element,index) =>{
    if(element.key==='Enter' && editInputHolder.length){
      setTodo(todo.map((value,idx)=>idx!==index ? value :editInputHolder));
      setEditInputHolder("");
      setEditAbleDiv(editAbleDiv.map((value,idx)=>idx!==index ? value :false));
    }
  }

  let HandleEditChange = (event) =>{
    event.preventDefault();
    if(InputWidth(event.target.value)<=710){
      setEditInputHolder(event.target.value);
    }
  }

  return (
    <div className="Wrapper">
      <div className="Container">
        <div> 
          <form>
          <input className="Input" 
          value={inputHolder}
          placeholder={"Start make your own todo list"}
          // Start make your own todo list
          onKeyDown={ToDoDiv}
          onChange={HandleChange}></input>
          </form>
        </div>
        <div>
          <button className="NameOfList"
          onClick={HandleSubmit}>SUBMIT DODOS 💪</button>
        </div>
        <div className="List">
          {todo.map((elementVal,index)=> { 
            return (
          //  <div className="Line"
          //  key={index}>{elementVal}</div>
          <Line 
          className={"Line"} 
          elementVal={elementVal} 
          key={elementVal.toString()+index.toString()}
          Done={()=>TaskDone(index)}
          Remove={()=>TaskRemove(index)}
          style={done[index]}
          value={editInputHolder}
          editAble={editAbleDiv[index]}
          onClick={()=>HandleEdit(index)}
          onKeyDown={(e)=>EditOnEnter(e,index)}
          onChange={HandleEditChange}
          />
          )})}
        </div>
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
