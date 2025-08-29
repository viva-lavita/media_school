import styles from './About.module.css';
import { comfortaa } from '@/lib/fonts';
import { montserrat } from '@/lib/fonts';

export default function DetailsSection() {
 return (
  <section className={styles.detailesMediashcool}>
   <h3 className={`${comfortaa.className}`}>Что делает Медиашколу особенной</h3>
   <div className={styles.detailsContext}>
    <div className={`${styles.detailCard}  ${styles.detailCardFirst}`}>
     <p className={`${comfortaa.className} ${styles.titleCard}`}>
      Обучение от практиков
     </p>
     <p className={`${montserrat.className} ${styles.textCard}`}>
      Мастер-классы проводят настоящие журналисты, фотографы и видеографы. Ты
      учишься у тех, кто каждый день работает в медиа.
     </p>
    </div>

    <div className={`${styles.detailCard} ${styles.detailCardSecond}`}>
     <p className={`${comfortaa.className} ${styles.titleCard}`}>
      Медиабиблиотека для самостоятельного обучения
     </p>
     <p className={`${montserrat.className} ${styles.textCard}`}>
      Всё, что вы проходите, сохраняется на сайте — возвращайтесь к материалам в
      любое время, чтобы повторить или углубиться.
     </p>
    </div>

    <div className={`${styles.detailCard} ${styles.detailCardThird}`}>
     <p className={`${comfortaa.className} ${styles.titleCard}`}>
      Возможность проявить себя
     </p>
     <p className={`${montserrat.className} ${styles.textCard}`}>
      Хотите попробовать себя в роли журналиста, блогера, ведущего? Здесь это не
      мечта, а часть учебного процесса.
     </p>
    </div>
   </div>
  </section>
 );
}
