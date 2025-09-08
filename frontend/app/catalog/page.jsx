'use client';
import { comfortaa } from '@/lib/fonts';
import styles from './layoutCatalog.module.css';
import { useState } from 'react';
import DescriptionSection from '../about/components/DescriptionSection';
import TeachersList from '../about/components/TeachersList';

export default function layoutPage() {
 const TABS_CATALOG = [
  'Интервьюирование',
  'Фотографирование',
  'Видеосъемка',
  'Видеосъемка с помощью БАС',
  'Обработка фото',
  'Сторителлинг',
  'Блогинг',
  'Монтаж видео',
  'Лонгрид',
 ];

 const description = {
  title:
   'Научитесь задавать правильные вопросы, слушать собеседника и создавать интересные интервью',
  paragraph1: `Искусство интервью — это больше, чем просто задавать вопросы. Это умение слушать, видеть человека, раскрывать его историю. В медиапространстве интервью остаются одним из самых популярных и ценных форматов — будь то YouTube, школьная газета или подкаст.`,
  paragraph2: `Навыки интервьюирования полезны каждому: они развивают эмпатию, критическое мышление, способность вести диалог и быть в центре событий`,
 };

 const TEACHERS_DATA = [
  {
   name: 'Мартынова Елизовета Алексеевна',
   position: 'Тренер по голосу и речи',
   photo: '/about-images/Martunova.png',
  },
  {
   name: 'Ненашев Максим Федорович',
   position: 'Оператор Первого канала',
   photo: '/about-images/Nenashev.png',
  },
  {
   name: 'Иванова Оксана Анатольевна',
   position: 'Ведущая канала К23',
   photo: '/about-images/Ivanova.png',
  },
 ];
 const titleListCatalog = 'Наставники';
 const initialActiveTab = 'Интервьюирование';
 const [activeTab, setActiveTab] = useState(initialActiveTab);
 return (
  <div className={styles.wrap}>
   <h3 className={`${comfortaa.className} ${styles.title}`}>
    Каталог материалов
   </h3>
   <div className={styles.tabs}>
    {TABS_CATALOG.map((tabTitle) => (
     <button
      key={tabTitle}
      onClick={() => setActiveTab(tabTitle)}
      className={`${styles.tabButton} ${
       activeTab === tabTitle && styles.active
      }`}
     >
      {tabTitle}
     </button>
    ))}
   </div>
   <main className={styles.mainCatalog}>
    <img
     className={styles.imgPrevue}
     src="/images/catalog-prevue.svg"
     alt="catalog-prevue"
    />
    <section className={styles.description}>
     <DescriptionSection text={description} />
     <div className={styles.founders}>
      {<TeachersList titleList={titleListCatalog} teachers={TEACHERS_DATA} />}
     </div>
    </section>
    
   </main>
  </div>
 );
}
