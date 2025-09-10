import React from "react"
import {Sidebar, MainDash, RightSide} from './container'

import './App.scss';

function App() {
  return (
    <div className="App">
      
        <div className='app__glass'>
        <Sidebar />
        <MainDash />
        <RightSide />
        </div>
      
    </div>
  );
}

export default App;
