"use client";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={`${styles.mainImage} flex justify-center relative`}>
        <div className={`${styles.mainImageContent} text-white flex flex-col text-wrap gap-7 text-center absolute
         items-center`}>
          <p className={`${comfortaa.className} ${styles.mainImageTextTop} font-bold`}>Онлайн-библиотека по журналистике и медиа для школьников</p>
          <p className={`${montserrat.className} ${styles.mainImageTextBottom} font-normal`}>Проект, который объединяет школьников и журналистов. Учи жанры, тренируй навыки и возвращайся к
            лучшим мастер-классам в медиабиблиотеке.</p>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={`flex flex-col gap-10`}>
          <h1 className={`${comfortaa.className} text-center font-bold text-[42px]`}>
            Что мы изучаем в Медиашколе
          </h1>
          <div className={`${comfortaa.className} grid grid-cols-3 gap-[30px]`}>
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
          <p className={montserrat.className}>КАТАЛОГ МАТЕРИАЛОВ</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  </div>
  )
}
