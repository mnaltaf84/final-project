import React, { useEffect, useState } from 'react'
import { HiMiniCheckCircle } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../styles/Todo.css"

const myTodo = "myTodoData";


export default function Todo() {
    const [inputValue, setInputValue] = useState("");
    const[task, setTask] = useState(()=>{
        const tempData = localStorage.getItem(myTodo);
        if(!tempData) return[];
        return JSON.parse(tempData);
    });

    const [time, setTime] = useState("")

    useEffect(()=>{
        const interval = setInterval(()=>{
            const updatedDate = new Date().toLocaleDateString();
            const updatedTime = new Date().toLocaleTimeString();
            setTime(`${updatedDate} - ${updatedTime}`)
        },1000);

        },[]);

    //Input value handling
    const handleInputValue =(e)=> {
        setInputValue(e.target.value);
    };

    //Function for creating Task entry
    const handleTaskInput = (e)=>{
        e.preventDefault();

    //Empty String
    if(!inputValue) 
        return(
        alert("Please ''ENTER'' Some thing before hit submit!")
        );

    //Duplicate entry prevent
    if(task.some((t) => t.text === inputValue)){
        alert("duplicate entry found")
        setInputValue("")
        return;
    }
    // Task Entry
    setTask((curTask) => [...curTask,{text: inputValue, completion: false}]);
    setInputValue("");
    };

    useEffect(()=>{
        localStorage.setItem(myTodo, JSON.stringify(task));
    },[task]);

    // Task deletion function
    const handleTaskDeletion = (value)=>{
    const updatedTask = task.filter((curElem) => curElem.text !==value);
    setTask(updatedTask);
    }

    //Task checked Entry

    const handleCheckedTask = (value) =>{
        const updatedTask = task.map((curTask)=> curTask.text === value ? {...curTask, completion: !curTask.completion}:curTask);
        setTask(updatedTask);
    }

  return (
    <div style={{width:"350px", height:"350px",borderRadius:"500px", backgroundColor:"#a7c957", margin:"10px"}}>
    <div className='main-div' style={{ width:"100%", height:"100%", borderRadius:"500px", marginLeft:"0%"}}>
        <header>
            <h1>Todo App</h1>
            <h2>{time}</h2>
        </header>

        <section className="todo-task">
        <form onSubmit={handleTaskInput}>
            <input type="text" style={{borderRadius:"8px", height:"30px", fontWeight:"bolder"}} value={inputValue} onChange={handleInputValue} />
            <div style={{display:"flex", width:"100%", justifyContent:"right"}}><button type="Submit" style={{marginLeft:"5px"}}>Submit</button></div>
        </form>
        </section>
        <ul className='entry-list'>
            {
                task.map((curElem, index)=>{
                    return(
                    <li className={`complete-list ${curElem.completion ? 'checked' : "" }`} 
                    key={index}>
                    <span className="list-empty">{curElem.text}</span>
                    <button className="check-btn" onClick={()=> handleCheckedTask(curElem.text)}><HiMiniCheckCircle /></button>
                    <button className="delete-btn" onClick={()=> handleTaskDeletion(curElem.text)}><RiDeleteBin6Line /></button>
                    </li>
                    );
                })}
        <br />
        <div style={{display:"flex", width:"85%", justifyContent:"right"}}><button onClick={()=>setTask([])} style={{padding:"5px", borderRadius:"50px"}}>Clear</button></div>
        
        </ul>
    </div>
    </div>
  );
}
