"use client";
import { useParams } from "next/navigation";
import { newsData, announcementsData, contestsData } from "../data.js";
import styles from "../Onenews.module.css";
import { comfortaa } from "@/lib/fonts";
import { montserrat } from "@/lib/fonts";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NewsDetail() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const item = [...newsData, ...announcementsData, ...contestsData].find(
    (data) => data.title === decodedTitle
  );

  if (!item) {
    return <p>Новость не найдена.</p>;
  }

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
            <p
            className={`${montserrat.className} font-normal text-base text-lg text-textblack leading-[140%]`}
          >
            Текст вопроса
          </p>
            <textarea
                className={`${styles.commentInput}`}
            />
            <button type="submit" className={`${styles.commentButton}`}>
              Отправить
            </button>
          </form>
        </div>

        {/* Список комментариев и вопросов */}
        <div className={`${styles.commentsList}`}>
          <h2
            className={`${montserrat.className} font-bold text-lg leading-[140%]`}
          >
            Комментарии и вопросы
          </h2>
          {/* <div className={`${styles.comment}`}>
            <p>
              <strong>Имя пользователя:</strong> Это комментарий.
            </p>
          </div>
          <div className={`${styles.comment}`}>
            <p>
              <strong>Имя пользователя:</strong> Другой комментарий.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
}
