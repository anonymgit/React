import React, { useState } from 'react';
// import './App.css';

function UseStateDemo() {
  
  const[myName,setMyname]=useState('Aryan')
  
  const changeName=()=> {
    myName==='Aryan'?setMyname('I am Aryan'):setMyname('Aryan');
  }
  
  return (
    <div >
      <h1>{myName}</h1>
      <button className="btn" onClick={changeName} >click me</button>
    </div>
  );
}

export default UseStateDemo;
