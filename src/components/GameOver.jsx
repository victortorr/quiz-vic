import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import WellDone from '../img/welldone.svg';

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="gameover">

            <h2>Fim</h2>
            <h3>Veja como você foi:</h3>
            <p>Pontuação: {quizState.score} de {quizState.questions.length}</p>

            <img src={WellDone} alt="toquetoquemeuebem" />

            <button onClick={() => dispatch({ type: "NEW_GAME" })}> Reiniciar</button>

        </div>
    )
}

export default GameOver