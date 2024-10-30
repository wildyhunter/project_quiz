import { useEffect, useContext } from 'react';
import { QuizContext } from './context/quiz';
import './App.css';

import Welcome from './components/welcome';
import Question from './components/Question';
import GameOver from './components/GameOver';
import PickCategory from './components/PickCategory';

function App() {
    const [quizStates, dispatch] = useContext(QuizContext);


    return (
        <div className="App">
            <h1>Quiz de Programação</h1>
            {quizStates.gameStage === 'Start' && <Welcome />}
            {quizStates.gameStage === 'Category' && <PickCategory />}
            {quizStates.gameStage === 'Playing' && <Question />}
            {quizStates.gameStage === 'End' && <GameOver />}
        </div>
    );
}

export default App;
