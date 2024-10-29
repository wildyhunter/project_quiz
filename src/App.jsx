import { useEffect, useState, useContext } from 'react';
import { QuizContext } from './context/quiz';
import './App.css';

import Welcome from './components/welcome';
import Question from './components/Question';
import GameOver from './components/GameOver';

function App() {
    const [quizStates, dispatch] = useContext(QuizContext);

    useEffect(() => {
        dispatch({ type: 'REORDER_QUESTIONS' });
    }, []);

    return (
        <div className="App">
            <h1>Quiz de Programação</h1>
            {quizStates.gameStage === 'Start' && <Welcome />}
            {quizStates.gameStage === 'Playing' && <Question />}
            {quizStates.gameStage === 'End' && <GameOver />}
        </div>
    );
}

export default App;
