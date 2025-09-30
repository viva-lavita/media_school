'use client';
import PageWidthContext from '@/app/context/PageWidthProvider';
import styles from '../../Home.module.css';
import { comfortaa } from '@/lib/fonts';
import { montserrat } from '@/lib/fonts';
import { useContext, useState } from 'react';

export default function Experts() {
  const { pageWidth } = useContext(PageWidthContext);

  const teachers = [
    {
      src: '/images/Olga-Sergeevna-Dumcheva.png',
      alt: 'Думчева Ольга Сергеевна',
      name: 'Думчева Ольга Сергеевна',
      role: 'Учитель английского языка'
    },
    {
      src: '/images/Maria-Sergeyevna-Gauer.png',
      alt: 'Гауэр Мария Сергеевна',
      name: 'Гауэр Мария Сергеевна',
      role: 'Учитель английского языка'
    },
    {
      src: '/images/Nadezhda-Leonidovna-Mikhalchuk.png',
      alt: 'Михальчук Надежда Леонидовна',
      name: 'Михальчук Надежда Леонидовна',
      role: 'Учитель математики'
    },
    {
      src: '/images/Evgeny-Pavlovich-Zaitsev.png',
      alt: 'Зайцев Евгений Павлович',
      name: 'Зайцев Евгений Павлович',
      role: 'Учитель физики'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      return prev === 0 ? teachers.length - 1 : prev - 1;
    });
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      return prev === teachers.length - 1 ? 0 : prev + 1;
    });
  }

  let visibleCount = 1;
  if (pageWidth >= 768 && pageWidth < 1024) visibleCount = 2;
  else if (pageWidth >= 1024 && pageWidth < 1920) visibleCount = 3;
  else if (pageWidth >= 1920) visibleCount = 4;

  const visibleTeachers = teachers.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  if (visibleTeachers.length < visibleCount) {
    visibleTeachers.push(
      ...teachers.slice(0, visibleCount - visibleTeachers.length)
    );
  }

  return (
    <div className={`${styles.mediaSchoolExperience} flex flex-col`}>
      <h2 className={`${comfortaa.className} ${styles.aboutLearning}`}>
        Журналисты и&nbsp;эксперты, которые делятся опытом
      </h2>
      <div className={`${styles.mediaSchoolExperienceTeachers} flex gap-6 transition-all duration-500`}>
        {visibleTeachers.map((teacher, idx) => (
          <div key={idx} className="flex flex-col basis-0 grow gap-4">
            <img src={teacher.src} alt={teacher.alt} className="h-100" />
            <div className={`flex flex-col gap-2`}>
              <h3
                className={`${comfortaa.className} ${styles.mediaSchoolExperienceTeacher} font-bold leading-[100%]`}
              >
                {teacher.name}
              </h3>
              <p
                className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}
              >
                {teacher.role}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={`flex gap-3 justify-center mt-4`}>
        <button aria-label="Предыдущее" onClick={prevSlide}>
          <img src="/images/ArrowLeft.svg" alt="" />
        </button>
        <button aria-label="Следующее" onClick={nextSlide}>
          <img src="/images/ArrowRight.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
