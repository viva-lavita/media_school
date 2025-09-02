 // Функция расчёта индекса первой и последней записи на странице

 export default function calculatePageIndexes(currentPage, questionsPerPage) {
     const indexOfLastQuestion = currentPage * questionsPerPage;
 const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
 const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
 }
