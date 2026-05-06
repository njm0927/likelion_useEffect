import React from 'react'
import {useEffect,useState} from "react";

const HookStructure = () => {
    const [count,setCount]=useState(0);
    const [text,setText]=useState("빈 텍스트");
    
    useEffect(() =>{
        console.log("컴포넌트가 마운트됨");
    }, []); //Mounting 시점에만 실행
    
    useEffect(() =>{
        console.log("카운트가 변경되었음:",count);
    },[count]);//count가 변경될 때마다 실행
    
    useEffect(() => {
        console.log("텍스트가 변경되었음:",text);
        
    },[text]);//text가 변경될 때마다 실행
    
    useEffect(() => {
        console.log("매 랜더링마다 랜더링됨");
    });
    return (
    <div>
        <h2 className="text-2xl">Count: {count}</h2>
        <button onClick={() => setCount(count+1)}className="border">Increment</button>
        <hr className="text-gray-400"/>
        <h2 className="text-2xl">Typed text: {text}</h2>
        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border"/>
    </div>
  );
};

export default HookStructure;