import { comfortaa, montserrat } from '@/lib/fonts';
import Question from './components/Question';
import styles from './QA.module.css';

export default function QAPage() {
 return (
  <div className={styles.wrap}>
   <h3 className={`${comfortaa.className} ${styles.titleQA}`}>Вопрос-ответ</h3>
   <div className={styles.tabs}>
    <button className={`${montserrat.className} ${styles.tabButton} ${styles.active}`}>
     Все вопросы
    </button>
    <button className={`${montserrat.className} ${styles.tabButton}`}>
     Задать вопросы
    </button>
   </div>
   <Question />
  </div>
 );
}
