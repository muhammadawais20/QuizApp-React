import React, {useState} from "react";
import './NextQuestion.css';

const NextQuestion = (props) => {
    return (
        <button className="nextQuestion" onClick={props.nextQuestion}>
            Next Question
        </button>
    )
}

export default NextQuestion;