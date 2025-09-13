import { montserrat } from '@/lib/fonts';
import styles from './Question.module.css';

export default function AnswerForm({ answer, name, position, data, time }) {
 return (
  <div className={styles.answerItem}>
   <div className={`${montserrat.className} ${styles.questionText}`}>
    {answer}
   </div>
   <div className={styles.iconsAnswer}>
    <div className={styles.authorInfo}>
     <span className={`${montserrat.className} ${styles.nameAuthor}`}>
      {name}
     </span>
     <span className={`${montserrat.className} ${styles.position}`}>
      {position}
     </span>
    </div>
    <span className={`${montserrat.className} ${styles.date}`}>
     {data}, {time}
    </span>
   </div>
  </div>
 );
}
