import React,{useState} from "react";
import "./style.css";

export default function App() {
  const fecha = new Date().toString();

  let [state, setState]= useState({click:0, fechaRes:fecha});
  const handleClick = ()=>{
    setState({click:++state.click,fechaRes:fecha})
  }
  return (
    <div>
      <h1>clicks{state.click}</h1>
      <h2>{state.fechaRes}</h2>
      <button onClick={handleClick}>click</button>
    </div>
  );
}
