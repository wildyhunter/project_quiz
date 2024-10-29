import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import './Option.css';

const Option = ({ option, selectOption, answer }) => {
    const [quizStates, dispatch] = useContext(QuizContext);

    return (
        <div
            className={`option ${
                quizStates.answerSelected && option === answer ? 'correct' : ''
            }${
                quizStates.answerSelected && option !== answer ? 'wrong' : ''}`}
            onClick={() => selectOption(option)}
        >
            <p>{option}</p>
        </div>
    );
};

export default Option;
