'use client';
import styles from '../../Home.module.css';
import { comfortaa } from '@/lib/fonts';
import { montserrat } from '@/lib/fonts';

export default function Advantages() {
 return (
  <div className={`${styles.mediaSchoolSpecial}`}>
   <h1 className={`${comfortaa.className} ${styles.aboutLearning}`}>
    Что&nbsp;делает Медиашколу особенной
   </h1>
   <div className={`${styles.mediaSchoolSpecialContent}`}>
    <div
     className={`${styles.mediaSchoolSpecialItem}`}
     style={{ backgroundColor: '#EDF6CD' }}
    >
     <h2
      className={`${comfortaa.className} ${styles.mediaSchoolSpecialTitle} font-bold leading-[100%]`}
     >
      Обучение от&nbsp;практиков
     </h2>
     <p
      className={`${montserrat.className} font-normal text-base leading-[130%]`}
     >
      Мастер-классы проводят настоящие журналисты, фотографы и&nbsp;видеографы.
      Ты&nbsp;учишься у&nbsp;тех, кто&nbsp;каждый день работает в&nbsp;медиа.
     </p>
    </div>
    <div
     className={`${styles.mediaSchoolSpecialItem}`}
     style={{ backgroundColor: '#F6FFDE' }}
    >
     <h2
      className={`${comfortaa.className} ${styles.mediaSchoolSpecialTitle} font-bold leading-[100%]`}
     >
      Медиабиблиотека для&nbsp;самостоятельного обучения
     </h2>
     <p
      className={`${montserrat.className} font-normal text-base leading-[130%]`}
     >
      Всё, что&nbsp;вы&nbsp;проходите, сохраняется на&nbsp;сайте&nbsp;—
      возвращайтесь к&nbsp;материалам в&nbsp;любое время, чтобы&nbsp;повторить
      или&nbsp;углубиться.
     </p>
    </div>
    <div
     className={`${styles.mediaSchoolSpecialItem}`}
     style={{ backgroundColor: '#FBFFF0' }}
    >
     <h2
      className={`${comfortaa.className} ${styles.mediaSchoolSpecialTitle} font-bold leading-[100%]`}
     >
      Возможность проявить себя
     </h2>
     <p
      className={`${montserrat.className} font-normal text-base leading-[130%]`}
     >
      Хотите попробовать себя в&nbsp;роли журналиста, блогера, ведущего? Здесь
      это&nbsp;не&nbsp;мечта, а&nbsp;часть учебного процесса.
     </p>
    </div>
   </div>
  </div>
 );
}
