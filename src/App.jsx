//react , componentes, estáticos.

import './App.css'
import Welcome from './components/welcome'
import { useContext, useEffect } from 'react'
import Question from './components/Play'
import { QuizContext } from './context/quiz'
import GameOver from './components/GameOver'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" })
    //embaralhar perguntas
  }, []
  )

  return (
    <>
      <div className='appcss'>
        <h1>Conhece Victor?</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
      </div>

    </>
  )
}

export default App
