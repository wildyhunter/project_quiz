import { useState } from 'react'
import './App.css'
import Welcome from './components/welcome'
import { useContext } from 'react'
import Question from './components/Question'
import { QuizContext } from './context/quiz'

function App() {
  const [quizStates, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      [quisStates.gameStage === 'Start' && <Welcome />]
      [quizStates.gameStage === 'Playing' && <Question />]
    </div>
  )
}

export default App
