import React from 'react';
import { useContext } from 'react'
import "../data/questions.js"
import { QuizContext } from '../context/quiz.jsx'
import './Play.css'
import Option from './Options.jsx';



const Question = () => {

  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option }
    })

  }

  return <div id='question'>

    <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>

    <h2>{currentQuestion.question}</h2>

    <div id='options_container'>

      {currentQuestion.options.map((option) =>
        <Option
          option={option}
          key={option}
          answerSelect={currentQuestion.answer}
          selectOption={() => onSelectOption(option)}
        />)}

    </div>
    {quizState.answerSelect && (<button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>)}

  </div>
}

export default Question