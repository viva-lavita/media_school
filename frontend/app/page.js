"use client";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";

export default function Home() {
  // const [pageWidth, setPageWidth] = useState(360);
  //
  // useEffect(() => {
  //   const handleResize = () => setPageWidth(window.innerWidth);
  //   handleResize();
  //   window.addEventListener('resize', handleResize);
  //
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);
  return (
    <div className={styles.main}>
      <div className={`${styles.mainImage} flex justify-center relative`}>
        <div className={`${styles.mainImageContent} text-white flex flex-col text-wrap gap-7 text-center absolute
         items-center`}>
          <p className={`${comfortaa.className} ${styles.mainImageTextTop} font-bold`}>Онлайн-библиотека по
            журналистике и медиа для школьников</p>
          <p className={`${montserrat.className} ${styles.mainImageTextBottom} font-normal`}>Проект, который объединяет
            школьников и журналистов. Учи жанры, тренируй навыки и возвращайся к
            лучшим мастер-классам в медиабиблиотеке.</p>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={`flex flex-col gap-10`}>
          <h1 className={`${comfortaa.className} ${styles.aboutLearning} w-1/1`}>
            Что мы изучаем в&nbsp;Медиашколе
          </h1>
          <div className={`${comfortaa.className} ${styles.aboutLearningContainer}`}>
            <div className={`relative`}>
              <img className={`${styles.topicsStudy}`} src="/images/blogging.png" alt="blogging"/>
              <p className={`${styles.topicsStudyText}`}>Блогинг</p>
            </div>
            <div className={`relative`}>
              <img className={`${styles.topicsStudy}`} src="/images/videotaping.png" alt="videotaping"/>
              <p className={`${styles.topicsStudyText}`}>Видеосъемка</p>
            </div>
            <div className={`relative`}>
              <img className={`${styles.topicsStudy}`} src="/images/videotaping-uas.png" alt="videotaping-uas"/>
              <p className={`${styles.topicsStudyText}`}>Видеосъемка с&nbsp;помощью&nbsp;БАС</p>
            </div>
            <div className={`relative`}>
              <img className={`${styles.topicsStudy}`} src="/images/video-editing.png" alt="video-editing"/>
              <p className={`${styles.topicsStudyText}`}>Монтаж&nbsp;видео</p>
            </div>
            <div className={`relative`}>
              <img className={`${styles.topicsStudy}`} src="/images/photographing.png" alt="photographing"/>
              <p className={`${styles.topicsStudyText}`}>Фотографирование</p>
            </div>
            <div className={`relative`}>
              <img className={`${styles.topicsStudy}`} src="/images/photo-processing.png" alt="photo-processing"/>
              <p className={`${styles.topicsStudyText}`}>Обработка фото</p>
            </div>
            <div className={`relative`}>
              <img className={`${styles.topicsStudy}`} src="/images/storytelling.png" alt="storytelling"/>
              <p className={`${styles.topicsStudyText}`}>Сторителлинг</p>
            </div>
            <div className={`relative`}>
              <img className={`${styles.topicsStudy}`} src="/images/interviewing.png" alt="interviewing"/>
              <p className={`${styles.topicsStudyText}`}>Интервьюирование</p>
            </div>
            <div className={`relative`}>
              <img className={`${styles.topicsStudy}`} src="/images/longread.png" alt="longread"/>
              <p className={`${styles.topicsStudyText}`}>Лонгрид</p>
            </div>
          </div>
          <p className={`${montserrat.className} ${styles.materialCatalog}`}>КАТАЛОГ МАТЕРИАЛОВ</p>
        </div>
        <div className={`${styles.skillsTraining} flex flex-col gap-10`}>
          <h1 className={`${comfortaa.className} ${styles.aboutLearning} ${styles.aboutLearningTitleContainer}`}>
            Хотите научиться делать интервью, видео и&nbsp;блоги?
          </h1>
          <div className={`${styles.skillsTrainingAbout}`}>
            <div className={`flex flex-col gap-5 grow-1`}>
              <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>Проект «Медиашкола» — это
                возможность попробовать себя в роли журналиста, блогера
                или видеографа уже сейчас. Мы приглашаем школьников 14–18 лет на мастер-классы,
                где вы узнаете, как создавать медиаконтент — от идеи до готового материала.</p>
              <div className={`${montserrat.className} flex flex-col gap-3 font-medium text-base leading-[100%] 
              text-grey-2`}>
                <p>Все занятия проходят в формате коротких практических мастер-классов. Ролики мы собираем
                  в медиабиблиотеку — чтобы каждый мог вернуться к материалам в удобное время
                  и научиться новому.</p>
                <p>Проект реализуется при поддержке школьных педагогов, выпускников и студентов факультетов
                  журналистики, а также профессиональных журналистов.</p>
              </div>
            </div>
            <div className={`flex flex-col grow-1`}></div>
          </div>
          <p className={`${montserrat.className} ${styles.materialCatalog}`}>ПОДРОБНЕЕ О&nbsp;ПРОЕКТЕ</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  </div>
  )
}
