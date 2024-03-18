import React from 'react';

const AllQuestionsContext = React.createContext({
    allQuestions: [],
    setAllQuestions: () => {},
});

export default AllQuestionsContext;