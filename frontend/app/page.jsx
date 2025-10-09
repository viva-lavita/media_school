'use client';
import { useContext, useState, useEffect } from 'react';
import styles from './Home.module.css';
import { comfortaa } from '@/lib/fonts';
import { montserrat } from '@/lib/fonts';
import WhatAreWeStudyingSection from './components/WhatAreWeStudyingSection/WhatAreWeStudyingSection';
import Advantages from './components/Advantages/Advantages';
import Experts from './components/Experts/Experts';
import PageWidthContext from './context/PageWidthProvider';
import Link from "next/link";
import PopUpAttribution from "@/app/components/PopUpAttribution/PopUpAttribution";

const feedbacks = [
 {
  src: '/images/avatar.png',
  alt: 'аватар Анна',
  name: 'Анна, 15 лет',
  text: '«Я всегда любила снимать видео на телефон, но делала это скорее интуитивно. На мастер-классе ' +
    'по видеосъёмке нам объяснили, как строить кадр, зачем нужен сценарий и как пользоваться светом. ' +
    'Всё было интересно и понятно — не просто лекция, а живая работа с камерой. Мы сразу пробовали ' +
    'снимать сами. Я даже попробовала себя в роли режиссёра и поняла, что хочу продолжать этим заниматься. ' +
    'Теперь мечтаю поступить в вуз, связанный с медиа»',
 },
 {
  src: '/images/feedback-kirill.png',
  alt: 'отзывы Кирилл',
  name: 'Кирилл, 17 лет',
  text: '«На одном из занятий у нас был гость — настоящий журналист с телевидения. Он рассказал,' +
    ' как проводить интервью, что такое открытые и закрытые вопросы, и как не бояться камеры. А потом ' +
    'мы сами брали интервью у учителей и учеников. Это был новый опыт, и я понял, что мне нравится' +
    ' быть в центре событий. До этого я вообще не знал, что журналистика может быть такой живой и интересной».',
 },
 {
  src: '/images/feedback-liza.png',
  alt: 'аватар Лиза',
  name: 'Лиза, 14 лет',
  text: '«Я попала на мастер-класс по блогингу — и это было лучше, чем любой урок! Нас научили, как вести себя в кадре, о чём говорить, чтобы было интересно, и как монтировать видео. Мы сразу начали снимать свой блог, и я даже записала первое видео про школьный праздник. Поняла, что это не просто развлечение, а настоящая работа, которая требует подготовки. Теперь я веду свой видеодневник для школьного канала».',
 },
 {
  src: '/images/avatar.png',
  alt: 'аватар Даниил',
  name: 'Даниил, 16 лет',
  text: '«Я в медиагруппе почти с самого начала. За это время мы научились снимать, писать тексты, брать интервью и даже делать простые новостные сюжеты. У нас уже есть несколько видео на сайте — приятно видеть результат своей работы. Мне нравится, что всё по‑настоящему: у нас есть задачи, дедлайны, съёмки. Это развивает и ответственность, и креативность. После школы хочу поступать на журналиста, и опыт в Медиашколе точно поможет».',
 },
];

export default function Home() {
 const { pageWidth } = useContext(PageWidthContext);

 const [mounted, setMounted] = useState(false);

 useEffect(() => setMounted(true), []);

 const [currentIndex, setCurrentIndex] = useState(0);

 const prevSlide = () => {
  setCurrentIndex((prev) => {
   return prev === 0 ? feedbacks.length - 1 : prev - 1;
  });
 };

 const nextSlide = () => {
  setCurrentIndex((prev) => {
   return prev === feedbacks.length - 1 ? 0 : prev + 1;
  });
 };

 let visibleCount = 1;
 if (mounted) {
  if (pageWidth >= 768 && pageWidth < 1024) visibleCount = 2;
  else if (pageWidth >= 1024 && pageWidth < 1400) visibleCount = 3;
  else if (pageWidth >= 1400) visibleCount = 4;
 }

 const visibleFeedbacks = feedbacks.slice(
   currentIndex,
   currentIndex + visibleCount
 );

 if (visibleFeedbacks.length < visibleCount) {
  visibleFeedbacks.push(
    ...feedbacks.slice(0, visibleCount - visibleFeedbacks.length)
  );
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
        Проект «Медиашкола» — это возможность попробовать себя в роли
        журналиста, блогера или видеографа уже сейчас. Мы приглашаем школьников
        14–18 лет на мастер-классы, где вы узнаете, как создавать медиаконтент —
        от идеи до готового материала.
       </p>
       <div
        className={`${montserrat.className} flex flex-col gap-3 font-normal text-base leading-[130%] 
              text-grey-2`}
       >
        <p>
         Все занятия проходят в формате коротких практических мастер-классов.
         Ролики мы собираем в медиабиблиотеку — чтобы каждый мог вернуться к
         материалам в удобное время и научиться новому.
        </p>
        <p>
         Проект реализуется при поддержке школьных педагогов, выпускников и
         студентов факультетов журналистики, а также профессиональных
         журналистов.
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
         Вместе с профессионалами из мира медиа вы:
        </h2>
        <ul
         className={`${montserrat.className} ${styles.skillsTrainingList} font-normal text-base leading-[130%]`}
        >
         <li>научитесь брать интервью и&nbsp;работать с камерой;</li>
         <li>узнаете основы фото — и&nbsp;видеосъёмки;</li>
         <li>попробуете себя в роли блогера и&nbsp;автора новостей.</li>
        </ul>
       </div>
       <p
        className={`${montserrat.className} font-normal text-lg leading-[140%]`}
       >
        Стань частью команды! Учись у&nbsp;экспертов, создавай свои медиа и
        делись ими с миром.
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
    <Experts />
    <div className={`${styles.announcements} flex flex-col gap-10`}>
     <h2 className={`${comfortaa.className} ${styles.aboutLearning} font-bold leading-[100%]`}>
      Новости, анонсы и конкурсы
     </h2>
     <div className={`${styles.announcementsContainer}`}>
      <div className={`${styles.announcementsContainerItem} flex flex-col gap-2`}>
       <figure className={`flex flex-col gap-3`}>
        <img src="/images/news.png" alt="новости" className={`h-[300px] object-cover object-left md:object-contain`}/>
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
        mounted && pageWidth < 729 ? 'hidden' : ''
       } ${styles.announcementsContainerItem} flex flex-col gap-2`}
      >
       <figure className={`flex flex-col gap-3`}>
        <img src="/images/announcements.png" alt="анонсы" className={`h-[300px] object-cover object-left md:object-contain`} />
        <figcaption
         className={`${montserrat.className} text-dark-green font-normal text-sm leading-[100%]`}
        >
         АНОНСЫ
        </figcaption>
       </figure>
       <div className={`flex flex-col gap-2`}>
        <p
         className={`${montserrat.className} font-normal text-lg leading-[140%]`}
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
        mounted && pageWidth < 1920 ? 'hidden' : ''
       } flex flex-col gap-2`}
      >
       <figure className={`flex flex-col gap-3`}>
        <img src="/images/news-together.png" alt="новости" className={`h-[300px] object-cover object-left md:object-contain`}/>
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
     <p
      className={`${montserrat.className} ${styles.materialCatalog} text-lg font-semibold text-dark-green`}
     >
      ВСЕ&nbsp;НОВОСТИ
     </p>
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
           className={`${styles.feedbackContentItem} flex flex-col gap-2 p-4 border-green border bg-light-green`}
         >
          <div className={`flex items-center gap-2`}>
           <img
             src={item.src}
             alt={item.alt}
             className={`h-[100px] w-[100px] rounded-full`}
           />
           <p
             className={`${montserrat.className} font-medium text-base leading-[100%]`}
           >
            {item.name}
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
         mounted && pageWidth >= 1920 ? 'absolute top-[7px] right-0' : 'justify-center'
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
        <button aria-label='Одноклассники'>
          <img
            src="/header-images/ok-button.png"
            alt=""
            className={`h-8 w-8`}
          />
        </button>
        <button aria-label='Вконтакте'>
          <img
            src="/header-images/vk-button.png"
            alt=""
            className={`h-8 w-8`}
          />
        </button>
      </div>
     </div>
    </div>
   </main>
  </div>
 );
}
