import React, { useEffect,useState} from 'react'

const UseEffectDemo = () => {
    const[count,setCount]=useState(0);
    
        useEffect(()=>{
            if(count>0){
            document.title=`chats(${count})`
            }
            else
            {
                document.title=`chats`
            }
        },[count]);
    
        
    const counter=()=>{
        setCount(count+1);
    }
    
  return (
    <div>
        <h1>{count}</h1>
        <button className="btn" onClick={counter}>Click</button>
    </div>
  )
}

export default UseEffectDemo