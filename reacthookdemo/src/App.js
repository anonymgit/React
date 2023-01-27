//import logo from './logo.svg';
//import React, { useState } from 'react';

import React from 'react';
//import UseStateDemo from "./component/UseStateDemo";
//import UseStateArrayDemo from "./component/UseStateArrayDemo";
//import UseEffectDemo from './component/UseEffectDemo';
//import UseEffectCleanupFn from './component/UseEffectCleanupFn';
import GithubUserApi from './projectGithubData/GithubUserApi';

import './App.css';

function App() {
  
  return (
    <div className="App">
      {/* <UseStateDemo/>
      <br></br> */}
      {/* <UseStateArrayDemo/> */}
      {/* <UseEffectDemo/> */}
      {/* <UseEffectCleanupFn/> */}
      <GithubUserApi/>
    </div>
  );
}

export default App;
