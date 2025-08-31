import styles from './QA.module.css';

export default function QAPage() {

 return (
  <section className={styles.qaSection}>
   <div className={styles.container}>
    <div className={styles.tabs}>
     <button className={styles.tabBbutton}>
      Вопрос
     </button>
     <button className={styles.tabBbutton}>
      Ответ
     </button>
    </div>
   </div>
  </section>
 );
}
