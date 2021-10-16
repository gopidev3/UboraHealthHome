import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import RightSideBar from './Components/SideBar/RightSideBar';
import BottomSideBar from './Components/SideBar/BottomSideBar';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <RightSideBar/>
      {/* <BottomSideBar/> */}
    </div>   
  );
}

export default App;
