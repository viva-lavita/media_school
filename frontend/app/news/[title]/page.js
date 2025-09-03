"use client";
import { useParams } from "next/navigation";
import { newsData, announcementsData, contestsData } from "../data.js";
import styles from "../Onenews.module.css";
import { comfortaa } from "@/lib/fonts";
import { montserrat } from "@/lib/fonts";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function NewsDetail() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const [charCount, setCharCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');

  const formatAnswer = (num) => {
    const getAnswerWord = (n) => {
      if (n % 10 === 1 && n % 100 !== 11) return 'ответ';
      if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return 'ответа';
      return 'ответов';
    };
    return `${num} ${getAnswerWord(num)}`;
  };

  const item = [...newsData, ...announcementsData, ...contestsData].find(
    (data) => data.title === decodedTitle
  );

  if (!item) {
    return <p>Новость не найдена.</p>;
  }

    // Пример массива вопросов
const questions = [
  { id: 1, text: "Какой уровень подготовки необходим для начала обучения? И сколько длится обучение на одном курсе?", author: "Иван Иванов", date: "01.10.2023", time: "12:00", answers: 5 },
  { id: 2, text: "Можно ли учиться онлайн или только офлайн?", author: "Мария Петрова", date: "02.10.2023", time: "14:30", answers: 3 },
  { id: 3, text: "Можно ли учиться онлайн или только офлайн?", author: "Алексей Сидоров", date: "03.10.2023", time: "09:15", answers: 1 },
  { id: 4, text: "Какой уровень подготовки необходим для начала обучения? И сколько длится обучение на одном курсе?", author: "Ольга Кузнецова", date: "04.10.2023", time: "16:45", answers: 7 },
];
    // Получаем последние два вопроса
  const lastTwoQuestions = questions.slice(-2);
  
  return (
    <>
      <div className={`${styles.newsContainer}`}>
        {/* Новость */}
        <div className={`${styles.newsAll}`}>
          <div className={`${styles.newsInfo}`}>
            <div className={`${styles.newsPreview}`}>
              <div className={`flex flex-row gap-1`}>
                <span
                  className={`${montserrat.className} font-normal text-base leading-[130%] text-dark-green`}
                >
                  Автор:
                </span>
                <span
                  className={`${montserrat.className} font-normal text-base leading-[130%]`}
                >
                  {item.author || "админ"}
                </span>
              </div>
              <h1
                className={`${comfortaa.className} ${styles.newsTitle} font-bold leading-[100%]`}
              >
                {item.title}
              </h1>
              <span
                className={`${montserrat.className} ${styles.newsDate} font-normal text-base leading-[130%] text-grey-2`}
              >
                {item.date}
              </span>
              <p
                className={`${montserrat.className} ${styles.newsPreview} font-normal text-base leading-[140%]`}
              >
                {item.preview}
              </p>
            </div>
            <img src={item.image} alt="Фото новости" className={styles.newsImage} />
          </div>
          {/* Текст новости с подзаголовками */}
          <div className={`${styles.newsContent}`}>
            <div className={`${styles.newsParagraph}`}>
              <h2
                className={`${montserrat.className} font-bold text-lg leading-[140%]`}
              >
                {item.paragraph1}
              </h2>
              <p
                className={`${montserrat.className} font-normal text-base leading-[140%]`}
              >
                {item.content1}
              </p>
              {item.points1 && item.points1.length > 0 && (
                <ul className={`${montserrat.className} ${styles.bulletList}`}>
                  {item.points1.map((point, index) => (
                    <li key={index} className={`${montserrat.className} font-normal text-base leading-[140%]`}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
             {item.image1 && item.image1 !== "" && (
              <img src={item.image3} alt="Фото 1" className={styles.subImage} />
            )}

            <div className={`${styles.newsParagraph}`}>
              <h2
                className={`${montserrat.className} font-bold text-lg leading-[140%]`}
              >
                {item.paragraph2}
              </h2>
              <p
                className={`${montserrat.className} font-normal text-base leading-[140%]`}
              >
                {item.content2}
              </p>
              {item.points2 && item.points2.length > 0 && (
                <ul className={`${montserrat.className} ${styles.bulletList}`}>
                  {item.points2.map((point, index) => (
                    <li key={index} className={`${montserrat.className} font-normal text-base leading-[140%]`}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {item.image2 && item.image2 !== "" && (
              <img src={item.image2} alt="Фото 3" className={styles.subImage} />
            )}

            <div className={`${styles.newsParagraph}`}>
              <h2
                className={`${montserrat.className} font-bold text-lg leading-[140%]`}
              >
                {item.paragraph3}
              </h2>
              <p
                className={`${montserrat.className} font-normal text-base leading-[140%]`}
              >
                {item.content3}
              </p>
              {item.points3 && item.points3.length > 0 && (
                <ul className={`${montserrat.className} ${styles.bulletList}`}>
                  {item.points3.map((point, index) => (
                    <li key={index} className={`${montserrat.className} font-normal text-base leading-[140%]`}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {item.image3 && item.image3 !== "" && (
              <img src={item.image3} alt="Фото 3" className={styles.subImage} />
            )}

            <div className={`${styles.newsParagraph}`}>
              <h2
                className={`${montserrat.className} font-bold text-lg leading-[140%]`}
              >
                {item.paragraph4}
              </h2>
              <p
                className={`${montserrat.className} font-normal text-base leading-[140%]`}
              >
                {item.content4}
              </p>
              {item.points4 && item.points4.length > 0 && (
                <ul className={`${montserrat.className} ${styles.bulletList}`}>
                  {item.points4.map((point, index) => (
                    <li key={index} className={`${montserrat.className} font-normal text-base leading-[140%]`}>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {item.image4 && item.image4 !== "" && (
              <img src={item.image4} alt="Фото 4" className={styles.subImage} />
            )}
          </div>
          <a
            className={`${montserrat.className} font-bold text-lg leading-[140%] underline`}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.link_text}
          </a>
          .
        </div>
        <Link href='/news' className={`${montserrat.className} font-normal text-dark-green text-sm leading-[100%]`}>НОВОСТИ</Link>

        {/* Форма для добавления комментариев или вопросов */}
        <div className={`${styles.commentSection}`}>
          <h2
            className={`${comfortaa.className} font-bold text-[22px] leading-[100%]`}
          >
            Добавить комментарий
          </h2>
          <p
            className={`${montserrat.className} font-normal text-lg leading-[140%]`}
          >
            Выберите категорию вопроса
          </p>
          <div className="flex flex-col mt-2 gap-4">
            <label className={`${styles.customRadio}`}>
              <input
                type="radio"
                name="category"
                value="category1"
                checked={selectedCategory === 'category1'}
                onChange={() => setSelectedCategory('category1')}
              />
              <span className={`${styles.radioBtn}`}></span>
              <span className={`${styles.textStyle}`}>
                Вопрос эксперту/ преподавателю
              </span>
            </label>
            <label className={`${styles.customRadio}`}>
              <input
                type="radio"
                name="category"
                value="category2"
                checked={selectedCategory === 'category2'}
                onChange={() => setSelectedCategory('category2')}
              />
              <span className={`${styles.radioBtn}`}></span>
              <span className={`${styles.textStyle}`}>
                Технический вопрос
              </span>
            </label>
            <label className={`${styles.customRadio}`}>
              <input
                type="radio"
                name="category"
                value="category3"
                checked={selectedCategory === 'category3'}
                onChange={() => setSelectedCategory('category3')}
              />
              <span className={`${styles.radioBtn}`}></span>
              <span className={`${styles.textStyle}`}>
                Другое
              </span>
            </label>
          </div>

          <form className={`${styles.commentForm}`}>
            <div className={`${styles.nameForm} flex flex-row justify-between`}>
              <p className={`${montserrat.className} font-normal text-base text-lg leading-[140%]`}>Текст вопроса</p>
              <span className={`${montserrat.className} font-normal text-base text-lg leading-[140%]`}> {charCount}/400 </span>
            </div>
            <textarea
                className={`${styles.commentInput} ${montserrat.className} font-normal text-lg text-dark-green leading-[140%]`}
                maxLength="400"
                onChange={(e) => setCharCount(e.target.value.length)}
                style={{ resize: 'none' }}
            />
            <button type="submit" className={`${montserrat.className} ${styles.commentButton} b-green`}>
              Отправить
            </button>
          </form>
        </div>

        {/* Список комментариев и вопросов */}
        <div className={`${styles.commentsList}`}>
          <h2
            className={`${comfortaa.className} font-bold text-[22px] leading-[100%]`}
          >
            Комментарии и вопросы
          </h2>
          {lastTwoQuestions.map((question) => (
            <div key={question.id} className={styles.question}>
              <div className={`${montserrat.className} ${styles.questionText} font-normal text-lg leading-[140%]`}>
                {question.text}
              </div>
              <div className={styles.icons}>
                <span className={`${montserrat.className} ${styles.nameAuthor}`}>{question.author}</span>
                <span className={`${montserrat.className} ${styles.answers}`}><Image  src={ "/images/sms.svg"}  alt={""} width={18} height={18} style={{ marginRight: "5px" }} /> {formatAnswer(question.answers)}</span>
                <span className={`${montserrat.className} ${styles.date}`}>{`${question.date}, ${question.time}`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
