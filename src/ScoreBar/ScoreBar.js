import React from "react";
import './ScoreBar.css';

const ScoreBar = (props) => {
    return (
        <footer>
            <div className="score">
                <p id="score">Score {props.currentScore}%</p>
                <p id="max-score">Max Score {props.maxScore}%</p>
            </div>
            <div className="scoreBar" id="score-bar">
                <div id="max-score-bar-width" style={{width: `${props.maxScore}%`}}>
                    <div id="score-bar-width" style={{width: `${props.currentScore}%`}}>
                        <div id="min-score-bar-width" style={{width: `${props.minScore}%`}}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default ScoreBar;