"use client";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";
import {hidden} from "next/dist/lib/picocolors";
import {c} from "react/compiler-runtime";

export default function Home() {
  const [pageWidth, setPageWidth] = useState(360);

  useEffect(() => {
    const handleResize = () => setPageWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
            <div className={`flex flex-col gap-5 grow-1 basis-0`}>
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
            <div className={`${styles.skillsTrainingProspects} flex flex-col grow-1 basis-0`}>
              <div className={`flex flex-col gap-3`}>
                <h2 className={`${comfortaa.className} ${styles.skillsTrainingTitle}  font-bold leading-[100%]`}>Вместе с профессионалами из мира медиа
                  вы:
                </h2>
                <ul className={`${montserrat.className} ${styles.skillsTrainingList} font-normal text-base leading-[130%]`}>
                  <li>научитесь брать интервью и&nbsp;работать с камерой;</li>
                  <li>узнаете основы фото — и&nbsp;видеосъёмки;</li>
                  <li>попробуете себя в роли блогера и&nbsp;автора новостей.</li>
                </ul>
              </div>
              <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>Стань частью команды!
                Учись у&nbsp;экспертов, создавай свои медиа
                и делись ими с миром.
              </p>
            </div>
          </div>
          <p className={`${montserrat.className} ${styles.materialCatalog}`}>ПОДРОБНЕЕ О&nbsp;ПРОЕКТЕ</p>
        </div>
        <div className={`${styles.mediaSchoolSpecial}`}>
          <h1 className={`${comfortaa.className} ${styles.aboutLearning}`}>Что&nbsp;делает Медиашколу особенной</h1>
          <div className={`${styles.mediaSchoolSpecialContent}`}>
            <div className={`${styles.mediaSchoolSpecialItem}`} style={{backgroundColor: '#EDF6CD'}}>
              <h2 className={`${comfortaa.className} ${styles.mediaSchoolSpecialTitle} font-bold leading-[100%]`}>
                Обучение от&nbsp;практиков</h2>
              <p className={`${montserrat.className} font-normal text-base leading-[130%]`}>
                Мастер-классы проводят
                настоящие журналисты, фотографы и&nbsp;видеографы. Ты&nbsp;учишься у&nbsp;тех,
                кто&nbsp;каждый день работает в&nbsp;медиа.
              </p>
            </div>
            <div className={`${styles.mediaSchoolSpecialItem}`} style={{backgroundColor: '#F6FFDE'}}>
              <h2 className={`${comfortaa.className} ${styles.mediaSchoolSpecialTitle} font-bold leading-[100%]`}>
                Медиабиблиотека для&nbsp;самостоятельного обучения
              </h2>
              <p className={`${montserrat.className} font-normal text-base leading-[130%]`}>
                Всё, что&nbsp;вы&nbsp;проходите, сохраняется на&nbsp;сайте&nbsp;— возвращайтесь к&nbsp;материалам
                в&nbsp;любое время, чтобы&nbsp;повторить или&nbsp;углубиться.
              </p>
            </div>
            <div className={`${styles.mediaSchoolSpecialItem}`} style={{backgroundColor: '#FBFFF0'}}>
              <h2 className={`${comfortaa.className} ${styles.mediaSchoolSpecialTitle} font-bold leading-[100%]`}>
                Возможность проявить себя</h2>
              <p className={`${montserrat.className} font-normal text-base leading-[130%]`}>
                Хотите попробовать себя в&nbsp;роли журналиста, блогера, ведущего? Здесь это&nbsp;не&nbsp;мечта,
                а&nbsp;часть учебного процесса.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.mediaSchoolExperience} flex flex-col`}>
          <h1 className={`${comfortaa.className} ${styles.aboutLearning}`}>
            Журналисты и&nbsp;эксперты, которые делятся опытом
          </h1>
          <div className={`${styles.mediaSchoolExperienceTeachers}`}>
            <div className={`flex flex-col basis-0 grow-1 gap-4`}>
              <img
                src="/images/Olga-Sergeevna-Dumcheva.png"
                alt="Думчева Ольга Сергеевна"
                className="h-100"
              />
              <div className={`flex flex-col gap-2`}>
                <h3 className={`${comfortaa.className} ${styles.mediaSchoolExperienceTeacher} font-bold leading-[100%]`}>Думчева Ольга Сергеевна</h3>
                <p className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Учитель английского языка</p>
              </div>
            </div>
            <div className={`${pageWidth < 768 ? 'hidden' : ''} flex flex-col basis-0 grow-1 gap-4`}>
              <img
                src="/images/Maria-Sergeyevna-Gauer.png"
                alt="Гауэр Мария Сергеевна"
                className="h-100"
              />
              <div className={`flex flex-col gap-2`}>
                <h3 className={`${comfortaa.className} ${styles.mediaSchoolExperienceTeacher} font-bold leading-[100%]`}>Гауэр Мария Сергеевна</h3>
                <p className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Учитель английского языка</p>
              </div>
            </div>
            <div className={`${pageWidth < 1024 ? 'hidden' : ''} flex flex-col basis-0 grow-1 gap-4`}>
              <img
                src="/images/Nadezhda-Leonidovna-Mikhalchuk.png"
                alt="Михальчук Надежда Леонидовна"
                className="h-100"
              />
              <div className={`flex flex-col gap-2`}>
                <h3 className={`${comfortaa.className} ${styles.mediaSchoolExperienceTeacher} font-bold leading-[100%]`}>Михальчук Надежда Леонидовна</h3>
                <p className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Учитель математики</p>
              </div>
            </div>
            <div className={`${pageWidth < 1920 ? 'hidden' : ''} flex flex-col basis-0 grow-1 gap-4`}>
              <img
                src="/images/Evgeny-Pavlovich-Zaitsev.png"
                alt="Зайцев Евгений Павлович"
                className="h-100"
              />
              <div className={`flex flex-col gap-2`}>
                <h3 className={`${comfortaa.className} ${styles.mediaSchoolExperienceTeacher} font-bold leading-[100%]`}>Зайцев Евгений Павлович</h3>
                <p className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Учитель физики</p>
              </div>
            </div>
          </div>
          <div className={`flex gap-3 justify-center`}>
            <img src="/images/ArrowLeft.svg" alt="ArrowLeft"/>
            <img src="/images/ArrowRight.svg" alt="ArrowRight"/>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  </div>
  )
}
