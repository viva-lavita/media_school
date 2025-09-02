"use client";
import { useParams } from "next/navigation";
import { newsData, announcementsData, contestsData } from "../data.js";
import styles from "../Onenews.module.css";
import { comfortaa } from "@/lib/fonts";
import { montserrat } from "@/lib/fonts";
// import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function NewsDetail() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const [charCount, setCharCount] = useState(0);

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
              <span
                className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}
              >
                Автор: {item.author || "Имя Автора"}
              </span>
              <h1
                className={`${comfortaa.className} ${styles.newsTitle} font-bold leading-[100%]`}
              >
                {item.title}
              </h1>
              <span
                className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}
              >
                Дата: {item.date}
              </span>
              <p
                className={`${montserrat.className} font-normal text-base leading-[140%]`}
              >
                {item.preview}
              </p>
            </div>
            <img
              src={item.image}
              alt="Фото новости"
              className={styles.newsImage}
            />
          </div>
          {/* Текст новости с подзаголовками */}
          <div className={`${styles.newsContent}`}>
            <div className={`${styles.newsParagraph}`}>
              <h2
                className={`${montserrat.className} font-bold text-lg leading-[140%]`}
              >
                Подзаголовок абзац1
              </h2>
              <p
                className={`${montserrat.className} font-normal text-base leading-[140%]`}
              >
                {item.content || item.preview}
              </p>
            </div>
            <img
              src="/images/news-subimage.png"
              alt="Дополнительное фото"
              className={styles.subImage}
            />

            <div className={`${styles.newsParagraph}`}>
              <h2
                className={`${montserrat.className} font-bold text-lg leading-[140%]`}
              >
                Подзаголовок абзац2
              </h2>
              <p
                className={`${montserrat.className} font-normal text-base leading-[140%]`}
              >
                Будущие журналисты поделились с учениками 8–11 классов своими
                знаниями, рассказали, как устроена современная медиасреда, что
                такое фейк-ньюс и как отличить достоверную информацию
                от манипулятивной. Формат встречи был максимально живым: ребята
                не просто слушали, но и активно участвовали в дискуссиях,
                задавали вопросы и выполняли практические задания.
              </p>
            </div>
            {/* <img src="/images/news-subimage.png" alt="Дополнительное фото" className={styles.subImage} /> */}

            <div className={`${styles.newsParagraph}`}>
              <h2
                className={`${montserrat.className} font-bold text-lg leading-[140%]`}
              >
                Подзаголовок абзац3
              </h2>
              <p
                className={`${montserrat.className} font-normal text-base leading-[140%]`}
              >
                По итогам встречи школьники получили сертификаты участников
                и приглашение поучаствовать в городском конкурсе молодёжной
                журналистики. А самые активные ребята уже загорелись идеей
                создать собственную школьную медиа-команду.
              </p>
            </div>
            {/* <img src="/images/news-subimage.png" alt="Дополнительное фото" className={styles.subImage} /> */}

            {/* <div className={`${styles.newsParagraph}`}>
              <h2 className={`${montserrat.className} font-bold text-lg leading-[140%]`}>Подзаголовок абзац4</h2>
              <p className={`${montserrat.className} font-normal text-base leading-[140%]`}>
                Будущие журналисты поделились с учениками 8–11 классов своими знаниями, рассказали, как устроена современная медиасреда, что такое фейк-ньюс и как отличить достоверную информацию от манипулятивной. Формат встречи был максимально живым: ребята не просто слушали, но и активно участвовали в дискуссиях, задавали вопросы и выполняли практические задания.
              </p>
            </div>
            <img src="/images/news-subimage.png" alt="Дополнительное фото" className={styles.subImage} /> */}
          </div>
          <a
            className={`${montserrat.className} font-bold text-lg leading-[140%]  underline`}
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Фотоотчёт и лучшие материалы с мастер-классов можно найти в школьной
            группе в соцсетях
          </a>
          .
        </div>
        <Link href='/news'>Новости</Link>

        {/* Форма для добавления комментариев или вопросов */}
        <div className={`${styles.commentSection}`}>
          <h2
            className={`${montserrat.className} font-bold text-lg leading-[140%]`}
          >
            Добавить комментарий
          </h2>
          <p
            className={`${montserrat.className} font-normal text-base text-lg text-textblack leading-[140%]`}
          >
            Выберите категорию вопроса
          </p>
          <div className="flex flex-col mt-2">
            <label>
                <input type="radio" name="category" value="category1" />
                Вопрос эксперту/ преподавателю
            </label>
            <label>
                <input type="radio" name="category" value="category2" />
                Технический вопрос
            </label>
            <label>
                <input type="radio" name="category" value="category3" />
                Другое
            </label>
            </div>

          <form className={`${styles.commentForm}`}>
            <div className="flex flex-row justify-between">
              <p className={`${montserrat.className} font-normal text-base text-lg text-textblack leading-[140%]`}>Текст вопроса</p>
              <span className={`${montserrat.className} font-normal text-base text-lg text-textblack leading-[140%]`}> {charCount}/400 </span>
            </div>
            <textarea
                className={`${styles.commentInput} ${montserrat.className} font-normal text-lg text-textblack leading-[140%]`}
                maxLength="400"
                onChange={(e) => setCharCount(e.target.value.length)}
                style={{ resize: 'none' }}
            />
            <button type="submit" className={`${montserrat.className} ${styles.commentButton} b-green text-textblack`}>
              Отправить
            </button>
          </form>
        </div>

        {/* Список комментариев и вопросов */}
        <div className={`${styles.commentsList}`}>
          <h2
            className={`${comfortaa.className} font-bold text-[22px] text-textblack leading-[100%]`}
          >
            Комментарии и вопросы
          </h2>
          {lastTwoQuestions.map((question) => (
            <div key={question.id} className={styles.question}>
              <div className={`${montserrat.className} ${styles.questionText}`}>
                {question.text}
              </div>
              <div className={styles.icons}>
                <span className={`${montserrat.className} ${styles.nameAuthor}`}>{question.author}</span>
                <span className={`${montserrat.className} ${styles.answers}`}>{formatAnswer(question.answers)}</span>
                <span className={`${montserrat.className} ${styles.date}`}>{`${question.date}, ${question.time}`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
