import Number from "./Number";
import Button from "./Button";
import { useState } from "react";

function MainContent(props){

    const [counter, setCounter] = useState(0);

    return(
        <div className="Main">
            <Number counter={counter}/>    
            <Button counter={counter} setCounter={setCounter}/>
        </div>
    )
}

export default MainContent
