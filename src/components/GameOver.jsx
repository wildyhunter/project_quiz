import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './GameOver.css';
import WellDone from '../img/welldone.svg';

const GameOver = () => {
    const [quizStates, dispatch] = useContext(QuizContext);

    return (
        <div id='gameover'>
            <h2>Fim de Jogo</h2>
            <p>Pontuação: {quizStates.score}</p>
            <p>Você acertou {quizStates.score} de {quizStates.questions.length} perguntas.</p>
            <img src={WellDone} alt="Fim do Quiz" />
            <button onClick={() => dispatch({ type: 'NEW_GAME' })}>Reiniciar</button>
        </div>
    );
};

export default GameOver;
