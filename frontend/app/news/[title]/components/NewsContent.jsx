import { comfortaa, montserrat } from "@/lib/fonts";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from "../../Onenews.module.css";

export default function NewsContent({ item }) {
  const [detailedItem, setDetailedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('NewsContent received item:', item);
    setDetailedItem(item);
    setLoading(false);
  }, [item]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  const displayItem = detailedItem || item;

  return (
    <div className={`${styles.newsAll}`}>
      <div className={`${styles.newsInfo}`}>
        <div className={`${styles.newsPreview}`}>
          <div className={`flex flex-row gap-1 lg:mb-7`}>
            <span
              className={`${montserrat.className} font-normal text-sm leading-[130%] text-dark-green`}
            >
              Автор:
            </span>
            <span
              className={`${montserrat.className} font-normal text-sm leading-[130%]`}
            >
              {displayItem.author_for_display}
            </span>
          </div>
          <h1
            className={`${comfortaa.className} ${styles.newsTitle} font-bold leading-[111%]`}
          >
            {displayItem.title}
          </h1>
          <span
            className={`${montserrat.className} ${styles.newsDate} font-normal text-sm leading-[130%] text-grey-2`}
          >
            {displayItem.created_at}
          </span>
          <p
            className={`${montserrat.className} ${styles.newsPreview} font-normal text-base leading-[140%] lg:mt-3`}
          >
            {displayItem.description}
          </p>
        </div>
        <img src={displayItem.image} alt="Фото новости" className={styles.newsImage} />
      </div>

      {/* Текст новости с параграфами из API */}
      {displayItem.paragraphs && displayItem.paragraphs.length > 0 && (
        <div className={`${styles.newsContent}`}>
          {displayItem.paragraphs.map((paragraph, index) => (
            <div key={paragraph.id || index} className={`${styles.newsParagraph}`}>
              {paragraph.title && (
                <h3
                  className={`${comfortaa.className} font-bold text-[22px] lg:text-[28px] leading-[130%]`}
                >
                  {paragraph.title}
                </h3>
              )}
              {paragraph.text && (
                <p
                  className={`${montserrat.className} font-normal text-base leading-[140%]`}
                >
                  {paragraph.text}
                </p>
              )}
              {paragraph.image && (
                <img src={paragraph.image} alt={`Фото параграфа ${index + 1}`} className={styles.subImage} />
              )}
              {paragraph.link_text && paragraph.link_url && (
                <a
                  className={`${montserrat.className} font-normal text-base leading-[140%] underline text-blue-600`}
                  href={paragraph.link_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {paragraph.link_text}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {displayItem.link && displayItem.link_text && (
        <a
          className={`${montserrat.className} font-bold text-lg leading-[140%] underline`}
          href={displayItem.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {displayItem.link_text}
        </a>
      )}
      <Link href='/news' className={`${montserrat.className} font-normal text-dark-green text-sm leading-[100%] mt-[-12px]`}>
        НОВОСТИ
      </Link>
    </div>
  );
}
