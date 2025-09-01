"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./News.module.css";
import { comfortaa } from "@/lib/fonts";
import { montserrat } from "@/lib/fonts";

const newsData = [
  {
    title: "В школу приехали студенты-журналисты: как прошёл день МК",
    date: "10 апреля 2025",
    preview: "В минувший четверг в нашей школе прошёл необычный и насыщенный день — к нам приехали студенты факультета журналистики, чтобы провести серию мастер-классов и творческих встреч для школьников.",
    image: "/images/news.png",
  },
  {
    title: "Заголовок 2",
    date: "11 апреля 2025",
    preview: "Текст превью 2. Узнайте, как новые инновации меняют наше представление о будущем.",
    image: "/images/news.png",
  },
  {
    title: "Заголовок 3",
    date: "12 апреля 2025",
    preview: "Текст превью 3. Присоединяйтесь к нам, чтобы узнать о самых интересных фактах из истории.",
    image: "/images/news.png",
  },
  {
    title: "Заголовок 4",
    date: "13 апреля 2025",
    preview: "Текст превью 4. Мы обсудим последние достижения в области медицины и здоровья.",
    image: "/images/news.png",
  },
  {
    title: "Заголовок 5",
    date: "14 апреля 2025",
    preview: "Текст превью 5. В этом выпуске мы рассмотрим новые тренды в мире искусства.",
    image: "/images/news.png",
  },
  {
    title: "Заголовок 6",
    date: "15 апреля 2025",
    preview: "Текст превью 6. Узнайте, как экология и устойчивое развитие становятся приоритетами для бизнеса.",
    image: "/images/news.png",
  },
  {
    title: "Заголовок 7",
    date: "16 апреля 2025",
    preview: "Текст превью 7. Мы расскажем о самых захватывающих событиях в мире спорта.",
    image: "/images/news.png",
  },
  {
    title: "Заголовок 8",
    date: "17 апреля 2025",
    preview: "Текст превью 8. Откройте для себя новые горизонты путешествий и приключений.",
    image: "/images/news.png",
  },
  {
    title: "Заголовок 9",
    date: "18 апреля 2025",
    preview: "Текст превью 9. Мы обсудим влияние социальных сетей на современное общество.",
    image: "/images/news.png",
  },
  {
    title: "Заголовок 10",
    date: "19 апреля 2025",
    preview: "Текст превью 10. Узнайте о новых открытиях в области науки и технологий.",
    image: "/images/news.png",
  },
];
const announcementsData = [
  {
    title: "Анонс 1",
    date: "10 апреля 2025",
    preview: "В минувший четверг в нашей школе прошёл необычный и насыщенный день — к нам приехали студенты факультета журналистики, чтобы провести серию мастер-классов и творческих встреч для школьников.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 2",
    date: "11 апреля 2025",
    preview: "Текст превью 2. Узнайте, как новые инновации меняют наше представление о будущем.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 3",
    date: "12 апреля 2025",
    preview: "Текст превью 3. Присоединяйтесь к нам, чтобы узнать о самых интересных фактах из истории.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 4",
    date: "13 апреля 2025",
    preview: "Текст превью 4. Мы обсудим последние достижения в области медицины и здоровья.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 5",
    date: "14 апреля 2025",
    preview: "Текст превью 5. В этом выпуске мы рассмотрим новые тренды в мире искусства.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 6",
    date: "15 апреля 2025",
    preview: "Текст превью 6. Узнайте, как экология и устойчивое развитие становятся приоритетами для бизнеса.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 7",
    date: "16 апреля 2025",
    preview: "Текст превью 7. Мы расскажем о самых захватывающих событиях в мире спорта.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 8",
    date: "17 апреля 2025",
    preview: "Текст превью 8. Откройте для себя новые горизонты путешествий и приключений.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 9",
    date: "18 апреля 2025",
    preview: "Текст превью 9. Мы обсудим влияние социальных сетей на современное общество.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 10",
    date: "19 апреля 2025",
    preview: "Текст превью 10. Узнайте о новых открытиях в области науки и технологий.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 1",
    date: "10 апреля 2025",
    preview: "В минувший четверг в нашей школе прошёл необычный и насыщенный день — к нам приехали студенты факультета журналистики, чтобы провести серию мастер-классов и творческих встреч для школьников.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 2",
    date: "11 апреля 2025",
    preview: "Текст превью 2. Узнайте, как новые инновации меняют наше представление о будущем.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 3",
    date: "12 апреля 2025",
    preview: "Текст превью 3. Присоединяйтесь к нам, чтобы узнать о самых интересных фактах из истории.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 4",
    date: "13 апреля 2025",
    preview: "Текст превью 4. Мы обсудим последние достижения в области медицины и здоровья.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 5",
    date: "14 апреля 2025",
    preview: "Текст превью 5. В этом выпуске мы рассмотрим новые тренды в мире искусства.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 6",
    date: "15 апреля 2025",
    preview: "Текст превью 6. Узнайте, как экология и устойчивое развитие становятся приоритетами для бизнеса.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 7",
    date: "16 апреля 2025",
    preview: "Текст превью 7. Мы расскажем о самых захватывающих событиях в мире спорта.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 8",
    date: "17 апреля 2025",
    preview: "Текст превью 8. Откройте для себя новые горизонты путешествий и приключений.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 9",
    date: "18 апреля 2025",
    preview: "Текст превью 9. Мы обсудим влияние социальных сетей на современное общество.",
    image: "/images/news.png",
  },
  {
    title: "Анонс 10",
    date: "19 апреля 2025",
    preview: "Текст превью 10. Узнайте о новых открытиях в области науки и технологий.",
    image: "/images/news.png",
  },  
];

const contestsData = [
    {
    title: "Конкурс 1",
    date: "12 апреля 2025",
    date_start: "12 апреля 2025",
    date_end: "16.04.2026",
    preview: "В минувший четверг в нашей школе прошёл необычный и насыщенный день — к нам приехали студенты факультета журналистики, чтобы провести серию мастер-классов и творческих встреч для школьников.",
    image: "/images/news.png",
  },
  {
    title: "Конкурс 2",
    date: "12 апреля 2025",
    date_start: "12 апреля 2026",
    date_end: "10.09.2025",
    preview: "Текст превью 2. Узнайте, как новые инновации меняют наше представление о будущем.",
    image: "/images/news.png",
  },
  {
    title: "Конкурс 3",
    date: "12 сентября 2025",
    date_start: "12 августа 2025",
    date_end: "10.08.2026",
    preview: "Текст превью 3. Присоединяйтесь к нам, чтобы узнать о самых интересных фактах из истории.",
    image: "/images/news.png",
  },
  {
    title: "Конкурс 4",
    date: "13 апреля 2025",
    date_start: "13 апреля 2025",
    date_end: "10.04.2025",
    preview: "Текст превью 4. Мы обсудим последние достижения в области медицины и здоровья.",
    image: "/images/news.png",
  },
  {
    title: "Конкурс 5",
    date: "14 апреля 2025",
    date_start: "13 апреля 2025",
    date_end: "10.04.2025",
    preview: "Текст превью 5. В этом выпуске мы рассмотрим новые тренды в мире искусства.",
    image: "/images/news.png",
  },
  {
    title: "Конкурс 6",
    date_start: "13 апреля 2025",
    date_end: "10.04.2025",
    date: "15 апреля 2025",
    preview: "Текст превью 6. Узнайте, как экология и устойчивое развитие становятся приоритетами для бизнеса.",
    image: "/images/news.png",
  },
  {
    title: "Конкурс 7",
    date: "16 апреля 2025",
    date_start: "13 апреля 2025",
    date_end: "10.04.2025",
    preview: "Текст превью 7. Мы расскажем о самых захватывающих событиях в мире спорта.",
    image: "/images/news.png",
  },
  {
    title: "Конкурс 8",
    date: "17 апреля 2025",
    date_start: "13 апреля 2025",
    date_end: "10.04.2025",
    preview: "Текст превью 8. Откройте для себя новые горизонты путешествий и приключений.",
    image: "/images/news.png",
  },
  {
    title: "Конкурс 9",
    date: "18 апреля 2025",
    date_start: "13 апреля 2025",
    date_end: "10.04.2025",
    preview: "Текст превью 9. Мы обсудим влияние социальных сетей на современное общество.",
    image: "/images/news.png",
  },
//   {
//     title: "Конкурс 10",
//     date: "19 апреля 2025",
    // date_start: "113 апреля 2025",
    // date_end: "10.04.2025",
//     preview: "Текст превью 10. Узнайте о новых открытиях в области науки и технологий.",
//     image: "/images/news.png",
//   },
];

export default function NewsPage() {
  const [pageWidth, setPageWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(9);
  const [currentTab, setCurrentTab] = useState("news");
  const [showCompleted, setShowCompleted] = useState(false); // Состояние для радиокнопок 

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setPageWidth(width);
      if (width <= 1024) {
        setNewsPerPage(8);
      } else {
        setNewsPerPage(9); // 9 новостей для экранов больше 1024px
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setCurrentPage(1); // Сбрасываем текущую страницу при смене таба
  };
// Фильтрация конкурсов на основе выбранного статуса
const filteredContests = contestsData.filter((item) => {
  const dateEnd = new Date(item.date_end);
  const currentDate = new Date();
  return showCompleted ? currentDate > dateEnd : currentDate <= dateEnd;
});
  // Определяем данные для отображения в зависимости от текущего таба
  const currentData =
    currentTab === "news"
      ? newsData
      : currentTab === "announcements"
      ? announcementsData
      : contestsData;

  const indexOfLastItem = currentPage * newsPerPage;
  const indexOfFirstItem = indexOfLastItem - newsPerPage;
  const currentItems = currentData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(currentData.length / newsPerPage);

  return (
    <>
      <div className={`${styles.newsContainer}`}>
        <div className={`${styles.newsAll}`}>
          <div className={`${styles.announcements} flex flex-col gap-7`}>
            <h1
              className={`${comfortaa.className} ${styles.aboutLearning}`}
              style={{ paddingBottom: "9px" }}
            >
              Новости, анонсы и конкурсы
            </h1>

            <div className="flex justify-center space-x-[30px]">
              <button onClick={() => handleTabChange("news")} className={`${currentTab === "news" ? "border-b-2 border-[#3C4226]" : ""} ${montserrat.className} w-[208px]`} style={{ paddingBottom: "9px" }}>
                Новости
              </button>
              <button
                onClick={() => handleTabChange("announcements")}
                className={`${
                  currentTab === "announcements"
                    ? "border-b-2 border-[#3C4226]"
                    : ""
                } ${montserrat.className} tab-style w-[208px]`}
                style={{ paddingBottom: "9px" }}
              >
                Анонсы
              </button>
              <button
                onClick={() => handleTabChange("contests")}
                className={`${
                  currentTab === "contests" ? "border-b-2 border-[#3C4226]" : ""
                } ${montserrat.className} w-[208px]`}
                style={{ paddingBottom: "9px" }}
              >
                Конкурсы
              </button>
            </div>

            {/* Радиокнопки для фильтрации */}
            <div className="flex space-x-7 mt-4">
              <label className={`${styles.customRadio}`}>
                <input
                  type="radio"
                  name="contestStatus"
                  checked={!showCompleted}
                  onChange={() => setShowCompleted(false)}
                />
                <span className={`${styles.radioBtn}`}></span>
                <span className={`${styles.textStyle}`} style={{ color: 'blue' }}> 
                  Текущие
                </span>
              </label>
              <div className={`${styles.verticalLine}`}></div>
              <label className={`${styles.customRadio}`}>
                <input
                  type="radio"
                  name="contestStatus"
                  checked={showCompleted}
                  onChange={() => setShowCompleted(true)}
                />
                <span className={`${styles.radioBtn}`}></span>
                <span className={`${styles.textStyle}`} style={{ color: 'red' }}> 
                  Завершенные
                </span>
              </label>
            </div>

            <Link href="/onenews" className={`${styles.newsCard}`}>
              {currentItems.map((item, index) => {
                if (currentTab === "contests") {
                  // Преобразуем дату завершения в формат ГГГГ-ММ-ДД
                  const parts = item.date_end.split(".");
                  const formattedDateEnd = `${parts[2]}-${parts[1]}-${parts[0]}`;
                  const dateEnd = new Date(formattedDateEnd); // Создаем объект Date для конца
                  const currentDate = new Date(); // Получаем текущую дату
                  // Проверяем, завершен ли конкурс
                  const isCompleted = currentDate > dateEnd;

                  return (
                    <div key={index} className={`flex flex-col gap-2 relative`}>
                      <div
                        style={{
                          position: "absolute",
                          top: "12px",
                          right: "12px",
                          backgroundColor: "white",
                          borderRadius: "30px",
                          gap: "8px",
                          paddingTop: "4px",
                          paddingRight: "8px",
                          paddingBottom: "4px",
                          paddingLeft: "8px",
                          height: "28px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "Montserrat",
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <img src={isCompleted ? "/images/checkmark.svg" : "/images/Star_news.svg"} alt={isCompleted ? "check" : "star"} style={{ marginRight: "5px" }} />
                        {isCompleted ? "завершен" : `c ${item.date_start}`}
                      </div>
                      <figure className={`flex flex-col gap-3`}>
                        <img src={item.image} alt="новости" />
                        <figcaption
                          className={`${montserrat.className} text-dark-green font-normal text-sm leading-[100%]`}
                        >
                          {"КОНКУРС"}
                        </figcaption>
                      </figure>
                      <div className={`flex flex-col gap-2`}>
                        <p
                          className={`${montserrat.className} font-normal text-lg leading-[140%]`}
                        >
                          {item.title}
                        </p>
                        <p
                          className={`${montserrat.className} line-clamp-3 font-normal text-base leading-[130%]`}
                        >
                          {item.preview}
                        </p>
                      </div>
                      <p
                        className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2`}
                      >
                        {item.date}
                      </p>
                    </div>
                  );
                }
                return (
                  <div key={index} className={`flex flex-col gap-2 relative`}>
                    <figure className={`flex flex-col gap-3`}>
                      <img src={item.image} alt="новости" />
                      <figcaption
                        className={`${montserrat.className} text-dark-green font-normal text-sm leading-[100%]`}
                      >
                        {currentTab === "news" ? "НОВОСТИ" : "АНОНС"}
                      </figcaption>
                    </figure>
                    <div className={`flex flex-col gap-2`}>
                      <p
                        className={`${montserrat.className} font-normal text-lg leading-[140%]`}
                      >
                        {item.title}
                      </p>
                      <p
                        className={`${montserrat.className} line-clamp-3 font-normal text-base leading-[130%]`}
                      >
                        {item.preview}
                      </p>
                    </div>
                    <p
                      className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2`}
                    >
                      {item.date}
                    </p>
                  </div>
                );
              })}
            </Link>
          </div>
          <div className="flex justify-center">
            {totalPages > 1 && (
              <>
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={` ${
                    currentPage === 1 ? "opacity-0 cursor-not-allowed" : ""
                  }`}
                  style={{
                    paddingRight: "12px",
                  }}
                >
                  <img src="/images/ArrowLeftBlack.svg" alt="" />
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    style={{
                      paddingBottom: "9px",
                      paddingLeft: "auto",
                      paddingRight: "auto",
                      paddingTop: "9px",
                      lineHeight: "19px",
                      border:
                        currentPage === index + 1
                          ? "1.5px solid #3C4226"
                          : "none",
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "16px",
                      lineHeight: "19px",
                      letterSpacing: "0%",
                      textAlign: "center",
                      width: "39px",
                    }}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={` ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  style={{
                    paddingLeft: "12px",
                  }}
                >
                  <img src="/images/ArrowRightBlack.svg" alt="" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}