import React, { useState } from "react";
import './QuestionResult.css';

const QuestionResult = (props) => {

    return (
        <div>
            {props.showCorrect ?
                <h2 id="correct">Correct!</h2>
                :
                null
            }

            {props.showSorry ?
                <h2 id="sorry">Sorry!</h2>
                :
                null
            }

            {props.showCompleted ?
                < h2 id="quiz-completed">Quiz Completed!</h2>
                :
                null
            }
        </div>
    )
}

export default QuestionResult;