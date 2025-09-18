'use client';
import { comfortaa } from '@/lib/fonts';
import styles from './layoutCatalog.module.css';
import { useState } from 'react';
import DescriptionSection from '../about/components/DescriptionSection';
import TeachersList from '../about/components/TeachersList';
import DocumentsSection from './components/DocumentsSection';
import ListCard from './components/ListCard';

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
 const files = [
  {
   id: 1,
   name: 'resume.pdf',
   createdAt: new Date('2023-08-15'),
   format: 'PDF',
  },
  {
   id: 2,
   name: 'cover_letter.docx',
   createdAt: new Date('2023-08-16'),
   format: 'DOCX',
  },
  {
   id: 3,
   name: 'portfolio.zip',
   createdAt: new Date('2023-08-17'),
   format: 'ZIP',
  },
  {
   id: 4,
   name: 'references.txt',
   createdAt: new Date('2023-08-18'),
   format: 'TXT',
  },
  {
   id: 5,
   name: 'additional_info.xlsx',
   createdAt: new Date('2023-08-19'),
   format: 'XLSX',
  },
 ];

 const documentSection = [
  {
   imageUrl: '/about-images/Ivanova.png',
   title: 'Завлеки собеседника — 3 простых правила от «Осторожно Новости»',
   date: '10 апреля 2025',
  },
  {
   imageUrl: '/about-images/Ivanova.png',
   title: 'Завлеки собеседника — 3 простых правила от «Осторожно Новости»',
   date: '10 апреля 2025',
  },
  {
   imageUrl: '/about-images/Ivanova.png',
   title: 'Завлеки собеседника — 3 простых правила от «Осторожно Новости»',
   date: '10 апреля 2025',
  },
 ];
 const titleListCatalog = 'Наставники';
 const initialActiveTab = 'Интервьюирование';
 const titleCardSectionVideo = 'Видео-материалы';
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
    <DocumentsSection documents={files} />
    <section className={styles.mediaSection}>
     <ListCard titleCardList={titleCardSectionVideo} documents={documentSection}/>
    </section>
   </main>
  </div>
 );
}
