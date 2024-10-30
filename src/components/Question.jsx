import React from 'react';
import './Question.css';

import { QuizContext } from '../context/quiz';
import Option from './Option';

const Question = () => {
    const [quizStates, dispatch] = React.useContext(QuizContext);
    const currentQuestion = quizStates.questions[quizStates.currentQuestion];

    const onSelectOption = (option) => {
        dispatch({
            type: 'CHECK_ANSWER',
            payload: { answer: currentQuestion.answer, option },
        });
    };

    return (
        <div id="question">
            <p>
                Pergunta {quizStates.currentQuestion + 1} de{' '}
                {quizStates.questions.length}
            </p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                {currentQuestion.options.map((option) => (
                    <Option
                        option={option}
                        key={option}
                        answer={currentQuestion.answer}
                        selectOption={onSelectOption}
                    />
                ))}
            </div>
            {!quizStates.answerSelected && !quizStates.help && (
                <>
                    {currentQuestion.tip && (
                        <button onClick={() => dispatch({ type: 'SHOW_TIP' })}>
                            Dica
                        </button>
                    )}
                </>
            )}
            {!quizStates.answerSelected && quizStates.help === 'tip' && <p>{currentQuestion.tip}</p>}

            {quizStates.answerSelected && (
                <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>
                    Continuar
                </button>
            )}
        </div>
    );
};

export default Question;
