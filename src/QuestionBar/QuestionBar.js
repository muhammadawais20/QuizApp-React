import React from "react";
import './QuestionBar.css';

const QuestionBar = (props) => {
    return (
        <>
            <div className="questionTopBar" style={{width: `${props.percentage}%`}}>
                <div className="questionTopBarWidth"></div>
            </div>
        </>
    )
}

export default QuestionBar;