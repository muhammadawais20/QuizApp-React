import React from "react";
import './Options.css';

const Options = (props) => {
    return (
        <>
            <div className="options">
                <button id="option1" className="option" disabled={props.disableOption} onClick={props.clicked}>{props.option}</button>
                {/* <button id="option2" className="option">option2</button> */}
            </div>
            {/* <div className="options">
                <button id="option3" className="option">option3</button>
                <button id="option4" className="option">option4</button>
            </div> */}
        </>
    )
}

export default Options;