"use client";
import { useParams } from 'next/navigation';
import { newsData, announcementsData, contestsData } from '../data.js';
import styles from '../Onenews.module.css';
import { comfortaa } from '@/lib/fonts';
import { montserrat } from '@/lib/fonts';

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
              <span className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>
                Автор: {item.author || 'Имя Автора'}
              </span>
              <h1 className={`${comfortaa.className} ${styles.newsTitle} font-bold leading-[100%]`}>
                {item.title}
              </h1>
              <span className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>
                Дата: {item.date}
              </span>
              <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>
                {item.preview}
              </p>
            </div>
            <img src={item.image} alt="Фото новости" className={styles.newsImage} />
          </div>

          {/* Текст новости с подзаголовками */}
          <div className={`${styles.newsContent}`}>
            <div className={`${styles.newsParagraph}`}>
              <h2 className={`${montserrat.className} font-bold text-lg leading-[140%]`}>Подзаголовок абзац1</h2>
              <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>
                {item.content || item.preview}
              </p>
            </div>
            <img src="/images/news-subimage.png" alt="Дополнительное фото" className={styles.subImage} />

            <div className={`${styles.newsParagraph}`}>
              <h2 className={`${montserrat.className} font-bold text-lg leading-[140%]`}>Подзаголовок абзац2</h2>
              <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>
                Дополнительный текст новости.
              </p>
            </div>
            <img src="/images/news-subimage.png" alt="Дополнительное фото" className={styles.subImage} />

            <div className={`${styles.newsParagraph}`}>
              <h2 className={`${montserrat.className} font-bold text-lg leading-[140%]`}>Подзаголовок абзац3</h2>
              <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>
                Ещё один абзац с информацией.
              </p>
            </div>
            <img src="/images/news-subimage.png" alt="Дополнительное фото" className={styles.subImage} />

            <div className={`${styles.newsParagraph}`}>
              <h2 className={`${montserrat.className} font-bold text-lg leading-[140%]`}>Подзаголовок абзац4</h2>
              <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>
                Заключительный абзац новости.
              </p>
            </div>
            <img src="/images/news-subimage.png" alt="Дополнительное фото" className={styles.subImage} />
          </div>
        </div>

        {/* Форма для добавления комментариев или вопросов */}
        <div className={`${styles.commentSection}`}>
          <h2 className={`${montserrat.className} font-bold text-lg leading-[140%]`}>Добавить комментарий или задать вопрос</h2>
          <form className={`${styles.commentForm}`}>
            <textarea placeholder="Ваш комментарий или вопрос" className={`${styles.commentInput}`} />
            <button type="submit" className={`${styles.commentButton}`}>Отправить</button>
          </form>
        </div>

        {/* Список комментариев и вопросов */}
        <div className={`${styles.commentsList}`}>
          <h2 className={`${montserrat.className} font-bold text-lg leading-[140%]`}>Комментарии</h2>
          <div className={`${styles.comment}`}>
            <p><strong>Имя пользователя:</strong> Это комментарий.</p>
          </div>
          <div className={`${styles.comment}`}>
            <p><strong>Имя пользователя:</strong> Другой комментарий.</p>
          </div>
        </div>
      </div>
    </>
  );
}
