import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './GameOver.css';
import WellDone from '../img/welldone.svg';

const GameOver = () => {
    const [quizStates, dispatch] = useContext(QuizContext);

    return (
        <div id="gameover">
            <h2>Fim de Jogo</h2>
            <p className='pontos-container'>
                Pontuação: <span className="pontos">{quizStates.score}</span>
            </p>
            <p className='pontos-container'>
                Você acertou <span className="pontos">{quizStates.score}</span>{' '}
                de <span className="pontos">{quizStates.questions.length}</span>{' '}
                perguntas.
            </p>
            <img src={WellDone} alt="Fim do Quiz" />
            <button onClick={() => dispatch({ type: 'NEW_GAME' })}>
                Reiniciar
            </button>
        </div>
    );
};

export default GameOver;
