import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import './PickCategory.css';
import Category from '../img/category.svg';

const PickCategory = () => {
    const [quizStates, dispatch] = useContext(QuizContext);

    const ChoseCategoryAndReorderQuestions = (category) => {
        dispatch({
            type: 'START_GAME',
            payload: category,
        });
        dispatch({
            type: 'REORDER_QUESTIONS',
        });
    }

    return (
        <div id="category">
            <h2>Escolha a categoria</h2>
            <p>
                As perguntas serão aleatórias de uma das seguintes categorias:
            </p>
            <div>
                {console.log(quizStates)}
                {quizStates.questions.map((question) => (
                    <button
                    key={question.category}
                        onClick={() =>
                            ChoseCategoryAndReorderQuestions(question.category)
                        }
                    >
                        {question.category}
                    </button>
                ))}
            </div>
            <img src={Category} alt="Categorias do Quiz" />
        </div>
    );
};

export default PickCategory;
