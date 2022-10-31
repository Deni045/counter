
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <p><Burger/></p>
        <Name name ='bobby shmurda' age ='111'/>
        <p><Tross/></p>
   </div>
)

function Tross(){
    return(
        <>
        <span className="Tross">012345678901245687890123456789012345678901234567890123456789012345678901234567890123456789</span>
        </>
    )
}

function Burger(){
    return(
        <>
        <span className="unknown">asdfghjkoiuytresxcvbnmkloiuytgfvbnm,lkiuygfvbnm,.løp0987654</span>
       </> 
    )
}

function Name(props){
return(
     <>

     <span className="span">
         {props.name}
     </span>

     <span className="span">
         {props.age}
     </span>
    
    </> 
    )
}