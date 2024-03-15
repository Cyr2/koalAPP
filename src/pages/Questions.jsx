import { Link } from 'react-router-dom';
import { allQuestions } from '../data/allQuestions';

export default function Questions() {
    const questions = allQuestions();
    return (
        <>
            <h1>Questions</h1>
            <ul>
                {questions.map((questionObj, index) => {
                    return <li key={index}><Link to={"/questions/" + index}>Tu préfères, {(() => {
                        return (
                            <>
                                {questionObj.question.map((choice, index) => {
                                    return <span key={index}>{choice}{index === questionObj.question.length - 1 ? '' : ' ou '}</span>
                                })}
                            </>
                        )
                    })()}</Link></li>
                })}
            </ul>
        </>
    )
}