import { useState } from 'react';
import Question from './Question';
import styles from './QuestionsList.module.css';
import { inter } from '@/lib/fonts';

export default function QuestionsList({ questions }) {
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const isOnlyOnePage = totalPages <= 1;

  const renderPaginationButtons = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return pageNumbers.map((number) => (
      <li
        key={number}
        className={`${inter.className} ${styles.paginationItem} ${currentPage === number ? `${styles.active}` : ''}`}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </li>
    ));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {currentQuestions.map((item, index) => (
        <Question key={index} {...item} />
      ))}
      
      {!isOnlyOnePage && (
        <ul className={styles.pagination}>
          {renderPaginationButtons()}
          
          {currentPage !== totalPages && (
            <li
              className={styles.nextPageBtn}
              onClick={handleNextPage}
            >
              ➜ 
            </li>
          )}
        </ul>
      )}
    </div>
  );
}