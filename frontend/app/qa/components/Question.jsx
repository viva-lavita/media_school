import { montserrat } from '@/lib/fonts';
import styles from './Question.module.css';

export default function Question() {
 return (
  <div className={styles.question}>
   <div className={`${montserrat.className} ${styles.questionText}`}>
    Какой уровень подготовки необходим?
   </div>
   <div className={styles.icons}>
    <span className={`${montserrat.className} ${styles.nameAuthor}`}>Иван Иванов</span>
    <span className={`${montserrat.className} ${styles.answers}`}>0 ответов</span>
    <span className={ `${montserrat.className} ${styles.date}`}>20 октября 2023 г.</span>
   </div>
  </div>
 );
}
