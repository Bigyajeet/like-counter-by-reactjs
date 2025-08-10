import {useState} from 'react'

export default function Counter(){
    let Count=0;
    let arr=useState(10);
    console.log(arr);
    let [count,setCount]=useState(0);
    let inCount=()=>{
        
        setCount((currCnt)=>{
             return currCnt +=1;
        });
        setCount((currCnt)=>{
             return currCnt +=1;
        });
        setCount((currCnt)=>{
             return currCnt +=1;
        });
        console.log(`cnt inside inCount : ${count}`);
    }
    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={inCount}>Increase Count</button>
        </div>
    )
}