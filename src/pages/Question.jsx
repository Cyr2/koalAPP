import { useContext } from 'react';


export default function Question() {
    const context = useContext(AllQuestionsContext);
    console.log(context);
}