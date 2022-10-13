import React from "react";
import './QuestionCategory.css';

const QuestionCategory = (props) => {
    return (
        <p className="category">{props.questionCategory}</p>
    )
}

export default QuestionCategory;