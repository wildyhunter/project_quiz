import React from 'react';
import { QuizContext } from '../context/quiz';
import './Question.css';

const Question = () => {
    const [quizStates, dispatch] = React.useContext(QuizContext);
    const currentQuestion = quizStates.questions[quizStates.currentQuestion];

    console.log(quizStates);
    return (
        <div id='question'>
            <p>Pergunta {quizStates.currentQuestion + 1} de {quizStates.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                <p>Opções</p>
            </div>
            <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>Continuar</button>
        </div>
    );
};

export default Question;
