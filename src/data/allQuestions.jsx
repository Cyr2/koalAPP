export function allQuestions() {
    return ([['Être un développeur front-end', 'Être un développeur back-end'], ['Travailler dans une grande entreprise', 'Travailler dans une petite entreprise']].map(question => ({ question, answer: null })));
}