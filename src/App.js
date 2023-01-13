import React from 'react'
import './App.css';
import ListOfTasks from './Components/ListOfTasks.js'
import InputTask from './Components/InputTask.js'
import SubmitButton from './Components/SubmitButton';
import DeleteDoneButton from './Components/DeleteDoneButton';
import DeleteAllButton from './Components/DeleteAllButton';

const App = () => {

  return (
    <div className="Wrapper">
      <div className="Container">
        <InputTask/>
        <SubmitButton/>
        <ListOfTasks/>
        <div>
          <DeleteDoneButton/>
          <DeleteAllButton/>
        </div>
      </div>
    </div>
  );
}

export default App;
