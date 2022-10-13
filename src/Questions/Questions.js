import React from "react";
import './Questions.css';

const Questions = (props) => {
    return (
        <h4 className="question">
            {props.question}
        </h4>
    )
}

export default Questions;