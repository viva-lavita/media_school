"use client";
import styles from "../../Home.module.css";
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";
import Link from "next/link";

const categoryMap = {
  'Блогинг': 'blogging',
  'Видеосъемка': 'videotaping',
  'Видеосъемка с помощью БАС': 'videotaping-uas',
  'Монтаж видео': 'video-editing',
  'Фотографирование': 'photographing',
  'Обработка фото': 'photo-processing',
  'Сторителлинг': 'storytelling',
  'Интервьюирование': 'interviewing',
  'Лонгрид': 'longread',
};

export default function WhatAreWeStudyingSection() {
 return (
  <div className={`flex flex-col gap-10`}>
   <h2 className={`${comfortaa.className} ${styles.aboutLearning} font-bold leading-[100%] w-1/1`}>
    Что мы изучаем в&nbsp;Медиашколе
   </h2>
   <div className={`${comfortaa.className} ${styles.aboutLearningContainer}`}>
    {Object.entries(categoryMap).map(([label, slug]) => (
      <Link key={slug} href={`/catalog?category=${slug}`} className={`relative`}>
        <img
          className={`${styles.topicsStudy}`}
          src={`/images/${slug}.png`}
          alt={label}
        />
        <p className={`${styles.topicsStudyText}`}>{label}</p>
      </Link>
    ))}
   </div>
   <p
    className={`${montserrat.className} ${styles.materialCatalog} text-lg font-semibold text-dark-green`}
   >
    КАТАЛОГ МАТЕРИАЛОВ
   </p>
  </div>
 );
}
