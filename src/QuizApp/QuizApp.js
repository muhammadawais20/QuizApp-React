import React, { useState } from "react";
import QuestionBar from "../QuestionBar/QuestionBar";
import QuestionCategory from "../QuestionCategory/QuestionCategory";
import QuestionTag from "../QuestionTag/QuestionTag";
import Questions from "../Questions/Questions";
import Options from "../Options/Options";
import QuestionResult from "../QuestionResult/QuestionResult";
import NextQuestion from "../NextQuestion/NextQuestion";
import ScoreBar from "../ScoreBar/ScoreBar";
import './QuizApp.css';
import questions from '../questions.json';

const QuizApp = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [maxScore, setMaxScore] = useState(100);
    const [minScore, setMinScore] = useState(0);
    const [show, setShow] = useState(false);
    const [showCorrect, setShowCorrect] = useState(false);
    const [showSorry, setShowSorry] = useState(false);
    const [showCompleted, setShowCompleted] = useState(false)
    const [disableOptions, setDisableOptions] = useState(false)

    const questionCategory = questions[currentQuestion].category;
    const questionsLength = questions.length;
    const question = questions[currentQuestion].question;

    const maxQuestion = () => {
        if (currentQuestion == questionsLength - 1) {
            setShow(false);
            setShowCompleted(true);
        }
    }

    const checkAnswer = (answer) => {

        if (answer === questions[currentQuestion].correct_answer) {

            const currentScore = score + 1;

            setScore(currentScore);
            setShow(true);
            setShowCorrect(true);
            setShowSorry(false);
            setDisableOptions(true);
        }

        else {
            setShow(true);
            setShowCorrect(false);
            setShowSorry(true);
            setDisableOptions(true);
        }
        
        calclulateMinScore();
        calclulateMaxScore();
        maxQuestion();
    }

    const nextQuestionHandler = () => {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);

        setShowCorrect(false);
        setShowSorry(false);
        setDisableOptions(false);
        setShow(false);
    }

    let percentageBar = ((currentQuestion + 1) / questionsLength) * 100;

    let remainingQuestion = questionsLength - currentQuestion - 1;

    const currentScore = (score / questionsLength) * 100;

    const calclulateMaxScore = () => {
        const maxScore = ((score + remainingQuestion + 1) / questionsLength) * 100;
        setMaxScore(maxScore);
    }

    const calclulateMinScore = () => {
        if (remainingQuestion >= 2) {
            const minScore = ((remainingQuestion - score) / questionsLength) * 100;
            setMinScore(minScore);
        }
    }

    console.log("minScore", minScore);
    let answerArray = [
        ...questions[currentQuestion].incorrect_answers,
        questions[currentQuestion].correct_answer,
    ];
    answerArray.sort(() => Math.random() - 0.5);

    return (
        <div className="container">
            <QuestionBar
                percentage={percentageBar}
            />
            <header>
                <QuestionTag
                    questionsLength={questionsLength}
                    currentQuestion={currentQuestion + 1}
                />
                <QuestionCategory
                    questionCategory={questionCategory}
                />
                <span>*****</span>
            </header>
            <main>
                <section>
                    <h4 id="question">
                        <Questions
                            question={question}
                        />
                    </h4>
                    <div>
                        {answerArray.map((option, index) => (
                            <Options
                                key={index}
                                option={option}
                                disableOption={disableOptions}
                                clicked={() => checkAnswer(option)}
                            />
                        ))}

                    </div>
                    <div className="answer">

                        <QuestionResult
                            showCorrect={showCorrect}
                            showSorry={showSorry}
                            showCompleted={showCompleted}
                        />

                        {show ? <NextQuestion
                            nextQuestion={nextQuestionHandler}
                        /> : null}
                    </div>
                </section>
            </main>
            <footer>
                <ScoreBar
                    currentScore={currentScore}
                    maxScore={maxScore}
                    minScore={minScore}
                />
            </footer>
        </div>
    )
}

export default QuizApp;