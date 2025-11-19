'use client';

import { useContext, useEffect, useState } from 'react';
import styles from './Home.module.css';
import { comfortaa } from '@/lib/fonts';
import { montserrat } from '@/lib/fonts';
import WhatAreWeStudyingSection from './components/WhatAreWeStudyingSection/WhatAreWeStudyingSection';
import Advantages from './components/Advantages/Advantages';
import PageWidthContext from './context/PageWidthProvider';
import Link from "next/link";

export default function Home() {
 const [usersReview, setUsersReview] = useState([]);
 const [pagination, setPagination] = useState({
  next: `${process.env.NEXT_PUBLIC_API_URL}/reviews/`,
  previous: null,
 });
 const [isLoading, setIsLoading] = useState(false);
 const [currentIndex, setCurrentIndex] = useState(0);
 const { pageWidth } = useContext(PageWidthContext);

 async function loadPage(url) {
  if (!url || isLoading) return;

  setIsLoading(true);
  try {
   const res = await fetch(url, { cache: "no-store" });
   const data = await res.json();

   setUsersReview((prev) => {
    const merged = [...prev, ...data.results];
    const uniq = new Map(merged.map((item) => [item.id, item]));
    return Array.from(uniq.values());
   });

   const nextUrl =
     data.next && !data.next.startsWith("http")
       ? `${process.env.NEXT_PUBLIC_API_URL}${data.next}`
       : data.next;

   const previousUrl =
     data.previous && !data.previous.startsWith("http")
       ? `${process.env.NEXT_PUBLIC_API_URL}${data.previous}`
       : data.previous;

   setPagination({
    next: nextUrl,
    previous: previousUrl,
   });

  } catch (err) {
   console.error("Ошибка загрузки отзывов:", err);
  } finally {
   setIsLoading(false);
  }
 }

 useEffect(() => {
  loadPage(pagination.next);
 }, []);

 const feedbacks = usersReview.map((item) => ({
  src: item.image,
  alt: `аватар ${item.full_name}`,
  full_name: item.full_name,
  age: formatAge(item.age),
  text: item.review,
 }));

 let desiredVisibleCount = 1;

 if (pageWidth >= 590 && pageWidth < 769) desiredVisibleCount = 2;
 else if (pageWidth >= 769 && pageWidth < 1201) desiredVisibleCount = 3;
 else if (pageWidth >= 1201) desiredVisibleCount = 4;

 const maxVisible = Math.min(4, feedbacks.length);
 const visibleCount = Math.min(desiredVisibleCount, maxVisible);

 useEffect(() => {
  if (isLoading) return;
  if (!pagination.next) return;
  if (feedbacks.length === 0) return;

  const nearEnd = currentIndex + visibleCount >= feedbacks.length - 5;

  if (nearEnd) {
   loadPage(pagination.next);
  }
 }, [currentIndex, feedbacks.length, visibleCount]);

 useEffect(() => {
  if (currentIndex > feedbacks.length - 1) {
   setCurrentIndex(0);
  }
 }, [currentIndex, feedbacks.length]);

 const prevSlide = () => {
  if (feedbacks.length <= visibleCount) return;
  setCurrentIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
 };

 const nextSlide = () => {
  if (feedbacks.length <= visibleCount) return;
  setCurrentIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
 };

 let visibleFeedbacks = [];

 if (feedbacks.length <= visibleCount) {
  visibleFeedbacks = feedbacks;
 } else {
  visibleFeedbacks = feedbacks.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  if (visibleFeedbacks.length < visibleCount) {
   visibleFeedbacks = visibleFeedbacks.concat(
     feedbacks.slice(0, visibleCount - visibleFeedbacks.length)
   );
  }
 }

 function formatAge(age) {
  const mod10 = age % 10;
  const mod100 = age % 100;

  if (mod100 >= 11 && mod100 <= 14) return `${age} лет`;
  if (mod10 === 1) return `${age} год`;
  if (mod10 >= 2 && mod10 <= 4) return `${age} года`;
  return `${age} лет`;
 }

 return (
  <div className={styles.main}>
   <div className={`${styles.mainImage} flex justify-center relative`}>
    <div
     className={`${styles.mainImageContent} text-white flex flex-col text-wrap gap-7 text-center absolute
         items-center`}
    >
     <h1
      className={`${comfortaa.className} ${styles.mainImageTextTop} text-wrap font-bold`}
     >
      Твоя медиашкола: создавай контент как профи!
     </h1>
     <p
      className={`${montserrat.className} ${styles.mainImageTextBottom} font-normal`}
     >
      Проект, который объединяет школьников и&nbsp;журналистов. Учи&nbsp;жанры, тренируй навыки и&nbsp;возвращайся
      к&nbsp;лучшим мастер-классам в&nbsp;медиабиблиотеке.
     </p>
    </div>
   </div>
   <main className={styles.mainContent}>
    <WhatAreWeStudyingSection />
    <div className={`${styles.skillsTraining} flex flex-col gap-10`}>
     <h2
      className={`${comfortaa.className} ${styles.aboutLearning} ${styles.aboutLearningTitleContainer} font-bold leading-[110%]`}
     >
      Хотите научиться делать интервью, видео и&nbsp;блоги?
     </h2>
     <div className={`${styles.skillsTrainingAbout}`}>
      <div className={`flex flex-col gap-5 grow-1 basis-0`}>
       <p
        className={`${montserrat.className} font-normal text-lg leading-[140%]`}
       >
        Проект «Медиашкола»&nbsp;— это&nbsp;возможность попробовать себя в&nbsp;роли журналиста, блогера
        или&nbsp;видеографа уже&nbsp;сейчас. Мы&nbsp;приглашаем школьников 14–18&nbsp;лет&nbsp;на&nbsp;мастер-классы,
        где&nbsp;вы&nbsp;узнаете, как&nbsp;создавать медиаконтент&nbsp;— от&nbsp;идеи до&nbsp;готового материала.
       </p>
       <div
        className={`${montserrat.className} flex flex-col gap-3 font-normal text-base leading-[130%] 
              text-grey-2`}
       >
        <p>
         Все&nbsp;занятия проходят в&nbsp;формате коротких практических мастер-классов.
         Ролики мы&nbsp;собираем в&nbsp;медиабиблиотеку&nbsp;— чтобы&nbsp;каждый мог&nbsp;вернуться
         к&nbsp;материалам в&nbsp;удобное время и&nbsp;научиться новому.
        </p>
        <p>
         Проект реализуется при&nbsp;поддержке школьных педагогов, выпускников и&nbsp;студентов факультетов журналистики,
         а&nbsp;также&nbsp;профессиональных журналистов.
        </p>
       </div>
      </div>
      <div
       className={`${styles.skillsTrainingProspects} flex flex-col grow-1 basis-0`}
      >
       <div className={`flex flex-col gap-3`}>
        <h2
         className={`${comfortaa.className} ${styles.skillsTrainingTitle}  font-bold leading-[100%]`}
        >
         Вместе с&nbsp;профессионалами из&nbsp;мира медиа вы:
        </h2>
        <ul
         className={`${montserrat.className} ${styles.skillsTrainingList} font-normal text-base leading-[130%]`}
        >
         <li>научитесь брать интервью и&nbsp;работать с&nbsp;камерой;</li>
         <li>узнаете основы фото&nbsp;— и&nbsp;видеосъёмки;</li>
         <li>попробуете себя в&nbsp;роли блогера и&nbsp;автора новостей.</li>
        </ul>
       </div>
       <p
        className={`${montserrat.className} font-normal text-lg leading-[140%]`}
       >
        Стань частью команды! Учись у&nbsp;экспертов, создавай свои медиа и&nbsp;делись ими&nbsp;с&nbsp;миром.
       </p>
      </div>
     </div>
     <Link href="/about"
      className={`${montserrat.className} ${styles.materialCatalog} text-lg font-semibold text-dark-green`}
     >
      ПОДРОБНЕЕ О&nbsp;ПРОЕКТЕ
     </Link>
    </div>
    <Advantages />
    <div className={`${styles.announcements} flex flex-col gap-10`}>
     <h2 className={`${comfortaa.className} ${styles.aboutLearning} font-bold leading-[100%]`}>
      Новости, анонсы и конкурсы
     </h2>
     <div className={`${styles.announcementsContainer}`}>
      <div className={`${styles.announcementsContainerItem} flex flex-col gap-2`}>
       <figure className={`flex flex-col gap-3`}>
        <img src="/images/news.png" alt="новости" className={`h-[300px] object-cover object-left md:object-cover`}/>
        <figcaption
         className={`${montserrat.className} text-dark-green font-normal text-sm leading-[100%]`}
        >
         НОВОСТИ
        </figcaption>
       </figure>
       <div className={`flex flex-col gap-2`}>
        <p
         className={`${montserrat.className} font-normal text-lg leading-[140%]`}
        >
         В&nbsp;школу приехали студенты-журналисты: как&nbsp;прошёл день МК
        </p>
        <p
         className={`${montserrat.className} line-clamp-3 font-normal text-base leading-[130%]`}
        >
         В минувший четверг в&nbsp;нашей школе прошёл необычный
         и&nbsp;насыщенный день&nbsp;— к&nbsp;нам приехали студенты факультета
         журналистики, чтобы провести серию мастер-классов и&nbsp;творческих
         встреч для школьников.
        </p>
       </div>
       <p
        className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2`}
       >
        10&nbsp;апреля 2025
       </p>
      </div>
      <div
       className={`${
        pageWidth < 501 ? 'hidden' : ''
       } ${styles.announcementsContainerItem} flex flex-col gap-2`}
      >
       <figure className={`flex flex-col gap-3`}>
        <img src="/images/announcements.png" alt="анонсы" className={`h-[300px] object-cover object-center md:object-cover`} />
        <figcaption
         className={`${montserrat.className} text-dark-green font-normal text-sm leading-[100%]`}
        >
         АНОНСЫ
        </figcaption>
       </figure>
       <div className={`flex flex-col gap-2`}>
        <p
         className={`${montserrat.className} line-clamp-3 font-normal text-lg leading-[140%]`}
        >
         Стартует курс по&nbsp;фотографии&nbsp;— запишись в&nbsp;медиагруппу!
        </p>
        <p
         className={`${montserrat.className} line-clamp-3 font-normal text-base leading-[130%]`}
        >
         В минувший четверг в&nbsp;нашей школе прошёл необычный
         и&nbsp;насыщенный день&nbsp;— к&nbsp;нам приехали студенты факультета
         журналистики, чтобы провести серию мастер-классов и&nbsp;творческих
         встреч для школьников.
        </p>
       </div>
       <p
        className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2`}
       >
        6&nbsp;апреля 2025
       </p>
      </div>
      <div
       className={`${
        pageWidth < 1025 ? 'hidden' : ''
       } ${styles.announcementsContainerItem} flex flex-col gap-2`}
      >
       <figure className={`flex flex-col gap-3`}>
        <img src="/images/news-together.png" alt="новости" className={`h-[300px] object-cover object-left md:object-cover`}/>
        <figcaption
         className={`${montserrat.className} text-dark-green font-normal text-sm leading-[100%]`}
        >
         НОВОСТИ
        </figcaption>
       </figure>
       <div className={`${styles.announcementsContainerItem} flex flex-col gap-2`}>
        <p
         className={`${montserrat.className} font-normal text-lg leading-[140%]`}
        >
         Медиашкола приняла участников из&nbsp;соседней школы&nbsp;— вместе
         учиться интереснее
        </p>
        <p
         className={`${montserrat.className} line-clamp-3 font-normal text-base leading-[130%]`}
        >
         В минувший четверг в&nbsp;нашей школе прошёл необычный
         и&nbsp;насыщенный день&nbsp;— к&nbsp;нам приехали студенты факультета
         журналистики, чтобы провести серию мастер-классов и&nbsp;творческих
         встреч для школьников.
        </p>
       </div>
       <p
        className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2`}
       >
        2&nbsp;апреля 2025
       </p>
      </div>
     </div>
     <Link href={'/news'}
      className={`${montserrat.className} ${styles.materialCatalog} text-lg font-semibold text-dark-green`}
     >
      ВСЕ&nbsp;НОВОСТИ
     </Link>
    </div>
    <div className={`${styles.feedback} relative flex flex-col gap-7`}>
     <div className={`flex flex-col gap-10`}>
      <h2
        className={`${comfortaa.className} ${styles.aboutLearning} font-bold leading-[100%]`}
      >
       Отзывы о&nbsp;проекте
      </h2>

      <div className={`${styles.feedbackContent} flex gap-6 transition-all duration-500`}>
       {visibleFeedbacks.map((item, idx) => (
         <div
           key={idx}
           className={`flex flex-col gap-2 p-4 basis-0 grow border-green border bg-light-green`}
         >
          <div className={`flex items-center gap-2`}>
           <img
             src={item.src}
             alt={'Аватар пользователя'}
             className={`h-[100px] w-[100px] rounded-full`}
           />
           <p
             className={`${montserrat.className} font-medium text-base leading-[100%]`}
           >
            {item.full_name}, {item.age}
           </p>
          </div>
          <div className={`flex flex-col gap-3`}>
           <p
             className={`${montserrat.className} line-clamp-9 font-normal text-base leading-[130%]`}
           >
            {item.text}
           </p>
           <p
             className={`${montserrat.className} ${styles.materialCatalog} font-medium text-base leading-[100%] text-grey-2`}
           >
            ЧИТАТЬ ПОЛНОСТЬЮ
           </p>
          </div>
         </div>
       ))}
      </div>
     </div>

     <div
       className={`${
         pageWidth >= 1920 ? 'absolute top-[7px] right-0' : 'justify-center'
       } flex gap-3`}
     >
      <button aria-label="Предыдущее" onClick={prevSlide} className={`cursor-pointer`}>
       <img src="/images/ArrowLeft.svg" alt="" />
      </button>

      <button aria-label="Следующее" onClick={nextSlide} className={`cursor-pointer`}>
       <img src="/images/ArrowRight.svg" alt="" />
      </button>
     </div>
    </div>
    <div className={`${styles.contactUs} border-green border py-10 mb-20`}>
     <h2
      className={`${comfortaa.className} ${styles.contactUsTitle} font-bold`}
     >
      Остались вопросы? Свяжитесь с&nbsp;нами
     </h2>
     <div className={`${styles.contactUsContent} flex flex-col items-center`}>
      <address className={`${styles.contactUsInfo} flex`}>
       <div className={`${styles.contactUsInfoItem} flex items-center`}>
        <span
         className={`${montserrat.className} ${styles.contactInfo} text-grey-2 font-normal`}
        >
         График работы:
        </span>
        <span
         className={`${montserrat.className} ${styles.contactInfoValue} font-normal text-lg leading-[140%]`}
        >
         09:00–18:00
        </span>
       </div>
       <div className={`${styles.contactUsInfoItem} flex items-center`}>
        <span
         className={`${montserrat.className} ${styles.contactInfo} text-grey-2 font-normal text-base leading-[130%]`}
        >
         Телефон:
        </span>
        <a href="tel:+73822716769"
         className={`${montserrat.className} ${styles.contactInfoValue} font-normal text-lg leading-[140%]`}
        >
         +7&nbsp;(3822)&nbsp;71-67-69
        </a>
       </div>
       <div className={`${styles.contactUsInfoItem} flex items-center`}>
        <span
         className={`${montserrat.className} ${styles.contactInfo} text-grey-2 font-normal text-base leading-[130%]`}
        >
         Почта:
        </span>
        <a href="mailto:perspectiva@education70.ru"
         className={`${montserrat.className} ${styles.contactInfoValue} font-normal text-lg leading-[140%]`}
        >
         perspectiva@education70.ru
        </a>
       </div>
      </address>
      <div className={`flex gap-3`}>
        <a rel="noopener noreferrer" target='_blank' href="https://ok.ru/group/70000001092892" aria-label='Одноклассники'>
          <img
            src="/header-images/ok-button.png"
            alt=""
            className={`h-8 w-8`}
          />
        </a>
        <a rel="noopener noreferrer" target='_blank'  href="https://vk.com/perspectivatsk" aria-label='Вконтакте'>
          <img
            src="/header-images/vk-button.png"
            alt=""
            className={`h-8 w-8`}
          />
        </a>
      </div>
     </div>
    </div>
   </main>
  </div>
 );
}
