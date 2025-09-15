'use client';
import PageWidthContext from '@/app/context/PageWidthProvider';
import styles from '../../Home.module.css';
import { comfortaa } from '@/lib/fonts';
import { montserrat } from '@/lib/fonts';
import { useContext } from 'react';

export default function Experts() {
    const { pageWidth } = useContext(PageWidthContext);
 return (
  <div className={`${styles.mediaSchoolExperience} flex flex-col`}>
   <h2 className={`${comfortaa.className} ${styles.aboutLearning}`}>
    Журналисты и&nbsp;эксперты, которые делятся опытом
   </h2>
   <div className={`${styles.mediaSchoolExperienceTeachers}`}>
    <div className={`flex flex-col basis-0 grow-1 gap-4`}>
     <img
      src="/images/Olga-Sergeevna-Dumcheva.png"
      alt="Думчева Ольга Сергеевна"
      className="h-100"
     />
     <div className={`flex flex-col gap-2`}>
      <h3
       className={`${comfortaa.className} ${styles.mediaSchoolExperienceTeacher} font-bold leading-[100%]`}
      >
       Думчева Ольга Сергеевна
      </h3>
      <p
       className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}
      >
       Учитель английского языка
      </p>
     </div>
    </div>
    <div
     className={`${
      pageWidth < 768 ? 'hidden' : ''
     } flex flex-col basis-0 grow-1 gap-4`}
    >
     <img
      src="/images/Maria-Sergeyevna-Gauer.png"
      alt="Гауэр Мария Сергеевна"
      className="h-100"
     />
     <div className={`flex flex-col gap-2`}>
      <h3
       className={`${comfortaa.className} ${styles.mediaSchoolExperienceTeacher} font-bold leading-[100%]`}
      >
       Гауэр Мария Сергеевна
      </h3>
      <p
       className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}
      >
       Учитель английского языка
      </p>
     </div>
    </div>
    <div
     className={`${
      pageWidth < 1024 ? 'hidden' : ''
     } flex flex-col basis-0 grow-1 gap-4`}
    >
     <img
      src="/images/Nadezhda-Leonidovna-Mikhalchuk.png"
      alt="Михальчук Надежда Леонидовна"
      className="h-100"
     />
     <div className={`flex flex-col gap-2`}>
      <h3
       className={`${comfortaa.className} ${styles.mediaSchoolExperienceTeacher} font-bold leading-[100%]`}
      >
       Михальчук Надежда Леонидовна
      </h3>
      <p
       className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}
      >
       Учитель математики
      </p>
     </div>
    </div>
    <div
     className={`${
      pageWidth < 1920 ? 'hidden' : ''
     } flex flex-col basis-0 grow-1 gap-4`}
    >
     <img
      src="/images/Evgeny-Pavlovich-Zaitsev.png"
      alt="Зайцев Евгений Павлович"
      className="h-100"
     />
     <div className={`flex flex-col gap-2`}>
      <h3
       className={`${comfortaa.className} ${styles.mediaSchoolExperienceTeacher} font-bold leading-[100%]`}
      >
       Зайцев Евгений Павлович
      </h3>
      <p
       className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}
      >
       Учитель физики
      </p>
     </div>
    </div>
   </div>
   <div className={`flex gap-3 justify-center`}>
    <img src="/images/ArrowLeft.svg" alt="ArrowLeft" />
    <img src="/images/ArrowRight.svg" alt="ArrowRight" />
   </div>
  </div>
 );
}
