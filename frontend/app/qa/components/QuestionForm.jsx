import { montserrat } from '@/lib/fonts';
import styles from './Question.module.css';
import formatAnswer from '@/app/utils/formatAnswer';

export default function QuestionForm({
 question,
 name,
 answers,
 data,
 time,
 toggleAnswers
}) {
 return (
  <div className={styles.question}>
   <div className={`${montserrat.className} ${styles.questionText}`}>
    {question}
   </div>
   <div className={styles.icons}>
    <span className={`${montserrat.className} ${styles.nameAuthor}`}>
     {name}
    </span>
    <span className={`${montserrat.className} ${styles.answers}`} onClick={toggleAnswers}>
     {formatAnswer(answers.length)}
    </span>
    <span
     className={`${montserrat.className} ${styles.date}`}
    >{`${data}, ${time}`}</span>
   </div>
  </div>
 );
}
