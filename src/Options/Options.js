import React from "react";
import './Options.css';

const Options = (props) => {
    return (
        <div className="options">
            <button id="option" className="option" disabled={props.disableOption} onClick={props.clicked}>
                {props.option}
            </button>
        </div>
    )
}

export default Options;