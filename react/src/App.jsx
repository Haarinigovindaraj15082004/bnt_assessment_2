import React from 'react';
import './App.css';
import Counter from './components/1/counter.jsx';
import Toggle from './components/2/toggle.jsx'; 
import ParentComponent from './components/3/ParentComponent.jsx';
import GrandParent from './components/4/Grandparent.jsx';
import NameList from './components/5/Namelist.jsx';
import CheckBox from './components/6/CheckBox.jsx';
import ControlledInput from './components/7/ControlledInput.jsx';
import LoginForm from './components/9/LoginForm.jsx';
import ItemList from './components/10/ItemList.jsx';
import ToDoApp from './components/11/ToDoApp.jsx';


function App() {
  return (
    <>
    <div className="App">
      <Counter count={0}/>
      <Toggle />
      <ParentComponent />
      <GrandParent/>
      {/* <NameList/> */}
      <CheckBox/>
      <ControlledInput />
      <LoginForm/>
      <ItemList/>
      <ToDoApp/>
      
    </div>
    </>
  );
}

export default App;
