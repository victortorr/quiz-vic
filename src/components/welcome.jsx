import React, { useState } from 'react';
import Quiz from '../img/quiz.svg';
import "./Welcome.css";
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div id="welcome" >

            <h2>Veja se acerta</h2>
            <h5>Clique no botão abaixo para começar!

            </h5>
            <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>
            <img src={Quiz} alt="inicio" />

        </div>
    );
};

export default Welcome;
