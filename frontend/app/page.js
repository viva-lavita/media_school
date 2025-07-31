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
          <div className={`grid grid-cols-3 gap-[30px]`}>
            <img className={`w-[447px] h-[200px]`} src="/images/blogging.png" alt="blogging"/>
            <img className={`w-[447px] h-[200px]`} src="/images/videotaping.png" alt="videotaping"/>
            <img className={`w-[447px] h-[200px]`} src="/images/videotaping-uas.png" alt="videotaping-uas"/>
            <img className={`w-[447px] h-[200px]`} src="/images/video-editing.png" alt="video-editing"/>
            <img className={`w-[447px] h-[200px]`} src="/images/photographing.png" alt="photographing"/>
            <img className={`w-[447px] h-[200px]`} src="/images/photo-processing.png" alt="photo-processing"/>
            <img className={`w-[447px] h-[200px]`} src="/images/storytelling.png" alt="storytelling"/>
            <img className={`w-[447px] h-[200px]`} src="/images/interviewing.png" alt="interviewing"/>
            <img className={`w-[447px] h-[200px]`} src="/images/longread.png" alt="longread"/>
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
