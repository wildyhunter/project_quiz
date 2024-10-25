import React from 'react';
import Quiz from '../img/quiz.svg';	
import '../components/Welcome.css';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

const Welcome = () => {
    const [quizStates, dispatch] = useContext(QuizContext);

    return (
        <div id='welcome'>
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão para começar</p>
            <button onClick={() => dispatch({ type: 'CHANGE_STAGE' })}>Iniciar</button>
            <img src={Quiz} alt="Inicio do quiz" />
        </div>
    );
};

export default Welcome;
