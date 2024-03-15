import { Link } from 'react-router-dom';

export default function Questions() {
    return (
        <>
            <h1>Questions</h1>
            <ul>
                {allQuestions.map((question, index) => {
                    return <li key={index}><Link to={"/questions/" + index}>{question}</Link></li>
                })}
            </ul>
        </>
    )
}