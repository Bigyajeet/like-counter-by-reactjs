import {useState} from 'react';

export default function(){
    let [isLiked,setIsLiked]=useState(false);
    let [click,setClick]=useState(0);
    let togglelikebutton=()=>{
        setIsLiked(!isLiked);
        setClick(click+1);
    };
    let likestyle={color:"red"};
    return (
        <div >
            <p>click={click}</p>
            <p onClick={togglelikebutton}>
                {isLiked ? <i className="fa-solid fa-heart" style={likestyle}></i> :<i className="fa-regular fa-heart"></i>}
                </p>
        </div>
        
    )
}