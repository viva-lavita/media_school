'use client';
import { useContext } from 'react';
import styles from './Home.module.css';
import { comfortaa } from '@/lib/fonts';
import { montserrat } from '@/lib/fonts';
import { hidden } from 'next/dist/lib/picocolors';
import { c } from 'react/compiler-runtime';
import WhatAreWeStudyingSection from './components/WhatAreWeStudyingSection/WhatAreWeStudyingSection';
import Advantages from './components/Advantages/Advantages';
import Experts from './components/Experts/Experts';
import PageWidthContext from './context/PageWidthProvider';
import Link from "next/link";

export default function Home() {
 const { pageWidth } = useContext(PageWidthContext);
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
      className={`${comfortaa.className} ${styles.aboutLearning} ${styles.aboutLearningTitleContainer}`}
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
     <h2 className={`${comfortaa.className} ${styles.aboutLearning}`}>
      Новости, анонсы и конкурсы
     </h2>
     <div className={`${styles.announcementsContainer}`}>
      <div className={`flex flex-col basis-0 grow gap-2`}>
       <figure className={`flex flex-col gap-3`}>
        <img src="/images/news.png" alt="новости" />
        <figcapture
         className={`${montserrat.className} text-dark-green font-normal text-sm leading-[100%]`}
        >
         НОВОСТИ
        </figcapture>
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
        pageWidth < 768 ? 'hidden' : ''
       } flex flex-col basis-0 grow gap-2`}
      >
       <figure className={`flex flex-col gap-3`}>
        <img src="/images/announcements.png" alt="анонсы" />
        <figcapture
         className={`${montserrat.className} text-dark-green font-normal text-sm leading-[100%]`}
        >
         АНОНСЫ
        </figcapture>
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
        pageWidth < 1920 ? 'hidden' : ''
       } flex flex-col basis-0 grow gap-2`}
      >
       <figure className={`flex flex-col gap-3`}>
        <img src="/images/news-together.png" alt="новости" />
        <figcapture
         className={`${montserrat.className} text-dark-green font-normal text-sm leading-[100%]`}
        >
         НОВОСТИ
        </figcapture>
       </figure>
       <div className={`flex flex-col gap-2`}>
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
      <h2 className={`${comfortaa.className} ${styles.aboutLearning}`}>
       Отзывы о&nbsp;проекте
      </h2>
      <div className={`${styles.feedbackContent}`}>
       <div
        className={`flex flex-col basis-0 grow gap-2 p-4 border-green border bg-light-green`}
       >
        <div className={`flex items-center gap-2`}>
         <img
          src="/images/avatar.png"
          alt="аватар"
          className={`h-[100px] w-[100px] rounded-full`}
         />
         <p
          className={`${montserrat.className} font-medium text-base leading-[100%]`}
         >
          Анна, 15&nbsp;лет
         </p>
        </div>
        <div className={`flex flex-col gap-3`}>
         <p
          className={`${montserrat.className} line-clamp-9 font-normal text-base leading-[130%]`}
         >
          «Я&nbsp;всегда любила снимать видео на&nbsp;телефон, но&nbsp;делала
          это&nbsp;скорее интуитивно. На&nbsp;мастер-классе по&nbsp;видеосъёмке
          нам&nbsp;объяснили, как&nbsp;строить кадр, зачем нужен сценарий
          и&nbsp;как&nbsp;пользоваться светом. Всё&nbsp;было интересно
          и&nbsp;понятно&nbsp;— не&nbsp;просто лекция, а&nbsp;живая работа
          с&nbsp;камерой. Мы&nbsp;сразу пробовали снимать сами.
          Я&nbsp;даже&nbsp;попробовала себя в&nbsp;роли режиссёра и&nbsp;поняла,
          что&nbsp;хочу продолжать этим заниматься. Теперь мечтаю поступить
          в&nbsp;вуз, связанный с&nbsp;медиа»
         </p>
         <p
          className={`${montserrat.className} ${styles.materialCatalog} font-medium text-base leading-[100%] 
                  text-grey-2`}
         >
          ЧИТАТЬ ПОЛНОСТЬЮ
         </p>
        </div>
       </div>
       <div
        className={`${
         pageWidth >= 768
          ? 'flex flex-col basis-0 grow gap-2 p-4 border-green border bg-light-green'
          : 'hidden'
        }`}
       >
        <div className={`flex items-center gap-2`}>
         <img
          src="/images/feedback-kirill.png"
          alt="отзывы Кирилл"
          className={`h-[100px] w-[100px] rounded-full`}
         />
         <p
          className={`${montserrat.className} font-medium text-base leading-[100%]`}
         >
          Кирилл, 17&nbsp;лет
         </p>
        </div>
        <div className={`flex flex-col gap-3`}>
         <p
          className={`${montserrat.className} line-clamp-9 font-normal text-base leading-[130%]`}
         >
          «На&nbsp;одном из&nbsp;занятий у&nbsp;нас&nbsp;был гость&nbsp;—
          настоящий журналист с&nbsp;телевидения. Он&nbsp;рассказал,
          как&nbsp;проводить интервью, что&nbsp;такое открытые и&nbsp;закрытые
          вопросы, и&nbsp;как&nbsp;не&nbsp;бояться камеры. А&nbsp;потом
          мы&nbsp;сами брали интервью у&nbsp;учителей и&nbsp;учеников.
          Это&nbsp;был&nbsp;новый опыт, и&nbsp;я&nbsp;понял,
          что&nbsp;мне&nbsp;нравится быть в&nbsp;центре событий.
          До&nbsp;этого&nbsp;я&nbsp;вообще не&nbsp;знал, что&nbsp;журналистика
          может быть такой живой и&nbsp;интересной».
         </p>
         <p
          className={`${montserrat.className} ${styles.materialCatalog} font-medium text-base leading-[100%] text-grey-2`}
         >
          ЧИТАТЬ ПОЛНОСТЬЮ
         </p>
        </div>
       </div>
       <div
        className={`${
         pageWidth >= 1024
          ? 'flex flex-col basis-0 grow gap-2 p-4 border-green border bg-light-green'
          : 'hidden'
        }`}
       >
        <div className={`flex items-center gap-2`}>
         <img
          src="/images/feedback-liza.png"
          alt="аватар"
          className={`h-[100px] w-[100px] rounded-full`}
         />
         <p
          className={`${montserrat.className} font-medium text-base leading-[100%]`}
         >
          Лиза, 14&nbsp;лет
         </p>
        </div>
        <div className={`flex flex-col gap-3`}>
         <p
          className={`${montserrat.className} line-clamp-9 font-normal text-base leading-[130%]`}
         >
          «Я&nbsp;попала на&nbsp;мастер-класс по&nbsp;блогингу&nbsp;—
          и&nbsp;это&nbsp;было лучше, чем&nbsp;любой урок! Нас&nbsp;научили,
          как&nbsp;вести себя в&nbsp;кадре, о&nbsp;чём&nbsp;говорить,
          чтобы&nbsp;было интересно, и&nbsp;как&nbsp;монтировать видео.
          Мы&nbsp;сразу начали снимать свой блог,
          и&nbsp;я&nbsp;даже&nbsp;записала первое видео про&nbsp;школьный
          праздник. Поняла, что&nbsp;это&nbsp;не&nbsp;просто развлечение,
          а&nbsp;настоящая работа, которая требует подготовки. Теперь
          я&nbsp;веду свой видеодневник для&nbsp;школьного канала».
         </p>
         <p
          className={`${montserrat.className} ${styles.materialCatalog} font-medium text-base leading-[100%] text-grey-2`}
         >
          ЧИТАТЬ ПОЛНОСТЬЮ
         </p>
        </div>
       </div>
       <div
        className={`${
         pageWidth >= 1920
          ? 'flex flex-col basis-0 grow gap-2 p-4 border-green border bg-light-green'
          : 'hidden'
        }`}
       >
        <div className={`flex items-center gap-2`}>
         <img
          src="/images/avatar.png"
          alt="аватар"
          className={`h-[100px] w-[100px] rounded-full`}
         />
         <p
          className={`${montserrat.className} font-medium text-base leading-[100%]`}
         >
          Даниил, 16&nbsp;лет
         </p>
        </div>
        <div className={`flex flex-col gap-3`}>
         <p
          className={`${montserrat.className} line-clamp-9 font-normal text-base leading-[130%]`}
         >
          «Я&nbsp;в&nbsp;медиагруппе почти с&nbsp;самого начала.
          За&nbsp;это&nbsp;время мы&nbsp;научились снимать, писать тексты, брать
          интервью и&nbsp;даже&nbsp;делать простые новостные сюжеты.
          У&nbsp;нас&nbsp;уже есть&nbsp;несколько видео на&nbsp;сайте&nbsp;—
          приятно видеть результат своей работы. Мне&nbsp;нравится,
          что&nbsp;всё&nbsp;по‑настоящему: у&nbsp;нас&nbsp;есть&nbsp;задачи,
          дедлайны, съёмки. Это&nbsp;развивает и&nbsp;ответственность,
          и&nbsp;креативность. После&nbsp;школы хочу поступать
          на&nbsp;журналиста, и&nbsp;опыт в&nbsp;Медиашколе точно поможет».
         </p>
         <p
          className={`${montserrat.className} ${styles.materialCatalog} 
                  font-medium text-base leading-[100%] text-grey-2`}
         >
          ЧИТАТЬ ПОЛНОСТЬЮ
         </p>
        </div>
       </div>
      </div>
     </div>
     <div
      className={`${
       pageWidth >= 1920 ? 'absolute top-[7px] right-0' : 'justify-center'
      } flex gap-3`}
     >
      <button aria-label="Previous">
       <img src="/images/ArrowLeft.svg" alt="" />
      </button>

      <button aria-label="Next">
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
