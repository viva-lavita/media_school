"use client";
import styles from "../../Home.module.css";
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";

export default function WhatAreWeStudyingSection() {
 return (
  <div className={`flex flex-col gap-10`}>
   <h2 className={`${comfortaa.className} ${styles.aboutLearning} w-1/1`}>
    Что мы изучаем в&nbsp;Медиашколе
   </h2>
   <div className={`${comfortaa.className} ${styles.aboutLearningContainer}`}>
    <div className={`relative`}>
     <img
      className={`${styles.topicsStudy}`}
      src="/images/blogging.png"
      alt="blogging"
     />
     <p className={`${styles.topicsStudyText}`}>Блогинг</p>
    </div>
    <div className={`relative`}>
     <img
      className={`${styles.topicsStudy}`}
      src="/images/videotaping.png"
      alt="videotaping"
     />
     <p className={`${styles.topicsStudyText}`}>Видеосъемка</p>
    </div>
    <div className={`relative`}>
     <img
      className={`${styles.topicsStudy}`}
      src="/images/videotaping-uas.png"
      alt="videotaping-uas"
     />
     <p className={`${styles.topicsStudyText}`}>
      Видеосъемка с&nbsp;помощью&nbsp;БАС
     </p>
    </div>
    <div className={`relative`}>
     <img
      className={`${styles.topicsStudy}`}
      src="/images/video-editing.png"
      alt="video-editing"
     />
     <p className={`${styles.topicsStudyText}`}>Монтаж&nbsp;видео</p>
    </div>
    <div className={`relative`}>
     <img
      className={`${styles.topicsStudy}`}
      src="/images/photographing.png"
      alt="photographing"
     />
     <p className={`${styles.topicsStudyText}`}>Фотографирование</p>
    </div>
    <div className={`relative`}>
     <img
      className={`${styles.topicsStudy}`}
      src="/images/photo-processing.png"
      alt="photo-processing"
     />
     <p className={`${styles.topicsStudyText}`}>Обработка фото</p>
    </div>
    <div className={`relative`}>
     <img
      className={`${styles.topicsStudy}`}
      src="/images/storytelling.png"
      alt="storytelling"
     />
     <p className={`${styles.topicsStudyText}`}>Сторителлинг</p>
    </div>
    <div className={`relative`}>
     <img
      className={`${styles.topicsStudy}`}
      src="/images/interviewing.png"
      alt="interviewing"
     />
     <p className={`${styles.topicsStudyText}`}>Интервьюирование</p>
    </div>
    <div className={`relative`}>
     <img
      className={`${styles.topicsStudy}`}
      src="/images/longread.png"
      alt="longread"
     />
     <p className={`${styles.topicsStudyText}`}>Лонгрид</p>
    </div>
   </div>
   <p
    className={`${montserrat.className} ${styles.materialCatalog} text-lg font-semibold text-dark-green`}
   >
    КАТАЛОГ МАТЕРИАЛОВ
   </p>
  </div>
 );
}
