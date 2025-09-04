import { useState } from 'react';
import QuestionForm from './QuestionForm';
import AnswerForm from './AnswerForm';
import styles from './Question.module.css';
import formatAnswer from '@/app/utils/formatAnswer';
import { montserrat } from '@/lib/fonts';

export default function Question({ question, name, answers, data, time }) {
 const [isExpanded, setIsExpanded] = useState(false);

 const handleToggleAnswers = () => {
  setIsExpanded(!isExpanded);
 };

 const hideAll = () => {
  setIsExpanded(false);
 };
 return (
  <>
   <QuestionForm
    question={question}
    name={name}
    answers={answers}
    data={data}
    time={time}
    toggleAnswers={handleToggleAnswers}
   />
   {isExpanded && Array.isArray(answers) && answers.length > 0 && (
    <>
     <div className={styles.answerContainer}>
      <div className={`${montserrat.className} ${styles.answersCount}`}>
       {formatAnswer(answers.length)}
      </div>
      {answers.map((item, index) => (
       <AnswerForm
        key={index}
        answer={item.answer}
        name={item.name}
        position={item.position}
        data={item.data}
        time={item.time}
       />
      ))}
      <button
       className={`${montserrat.className} ${styles.hideBtn}`}
       onClick={hideAll}
      >
       Свернуть
      </button>
     </div>
    </>
   )}
  </>
 );
}
