import React from "react";
import './QuestionTag.css';

const QuestionTag = (props) => {
    return (
        <h1 className="totalQuestion">Question {props.currentQuestion} of {props.questionsLength}</h1>
    )
}

export default QuestionTag;