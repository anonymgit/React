import React, { useState } from 'react'

const UseStateArrayDemo = () => {
    //data array
    var bioData=[
        {
            id:0,myName:"Aryan",age:21

        },
        {
            id:1,myName:"Aman",age:26

        },
        {
            id:2,myName:"Akash",age:23

        },
        {
            id:3,myName:"Abhisek",age:24

        },
        {
            id:4,myName:"Ajay",age:27

        },
        {
            id:5,myName:"Arav",age:28

        },
    
    ]
    //inserting data using useState which helps to reflect dynamic contents
    const [myArray,setMyArray]=useState(bioData);

    //function for clear All data
    const clearArray=()=>{
        setMyArray([]);
    }

    //function for delete data
    const deleteData=(index)=>{
        const myNewArray=myArray.filter((currElm)=>
        {
            return (currElm.id!==index);
        })
        setMyArray(myNewArray);
    }

    //function to edit data
    const editData=(id,myName)=>{
        const newName=prompt("please enter your name",myName);
        
        const newArray = [...myArray];
        newArray[id].myName=newName;
        setMyArray(newArray);
    }


    //function to update data
    const addData=()=>{
        
    }
    //printing data array in console
    console.log(myArray);


  return (
    
    <div>
        {
            myArray.map((currElm)=>{
                return (
                <div>
                    <h1 className="h1style" key={currElm.id}>Name : {currElm.myName} & Age: {currElm.age} 
                    <button className="btnInner" onClick={()=>addData(currElm.id)}>add</button>
                    <button className="btnInner" onClick={()=>editData(currElm.id,currElm.myName)}>edit</button>
                    <button className="btnInner" onClick={()=>deleteData(currElm.id)}>delete</button>
                    </h1>
                    
                </div>
                )
            })
        }
        <button className="btn" onClick={clearArray}>clear</button>
    </div>
  )
}

export default UseStateArrayDemo