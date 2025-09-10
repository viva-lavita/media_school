import { comfortaa, montserrat } from "@/lib/fonts";
import Link from 'next/link';
import styles from "../../Onenews.module.css";

export default function NewsContent({ item }) {
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
              {item.author_for_display || "админ"}
            </span>
          </div>
          <h1
            className={`${comfortaa.className} ${styles.newsTitle} font-bold leading-[111%]`}
          >
            {item.title}
          </h1>
          <span
            className={`${montserrat.className} ${styles.newsDate} font-normal text-sm leading-[130%] text-grey-2`}
          >
            {item.created_at}
          </span>
          <p
            className={`${montserrat.className} ${styles.newsPreview} font-normal text-base leading-[140%] lg:mt-3`}
          >
            {item.description}
          </p>
        </div>
        <img src={item.image} alt="Фото новости" className={styles.newsImage} />
      </div>

      {/* Текст новости с подзаголовками */}
      {/* <div className={`${styles.newsContent}`}>
        <div className={`${styles.newsParagraph}`}>
          <h3
            className={`${comfortaa.className} font-bold text-[22px] lg:text-[28px] leading-[130%]`}
          >
            {item.paragraph1}
          </h3>
          <p
            className={`${montserrat.className} font-normal text-base leading-[140%]`}
          >
            {item.content1}
          </p>
          {item.points1 && item.points1.length > 0 && (
            <ul className={`${montserrat.className} ${styles.bulletList}`}>
              {item.points1.map((point, index) => (
                <li key={index} className={`${montserrat.className} font-normal text-base leading-[110%]`}>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
        {item.image1 && item.image1 !== "" && (
          <img src={item.image1} alt="Фото 1" className={styles.subImage} />
        )}

        <div className={`${styles.newsParagraph}`}>
          <h3
            className={`${comfortaa.className} font-bold text-[22px] lg:text-[28px] leading-[130%]`}
          >
            {item.paragraph2}
          </h3>
          <p
            className={`${montserrat.className} font-normal text-base leading-[140%]`}
          >
            {item.content2}
          </p>
          {item.titleList2 && item.titleList2.length > 0 && (
            <p
              className={`${montserrat.className} font-normal text-lg leading-[140%]`}
            >
              {item.titleList2}
            </p>
          )}
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
          <img src={item.image2} alt="Фото 2" className={styles.subImage} />
        )}

        <div className={`${styles.newsParagraph}`}>
          <h3
            className={`${comfortaa.className} font-bold text-[22px] lg:text-[28px] leading-[130%]`}
          >
            {item.paragraph3}
          </h3>
          <p
            className={`${montserrat.className} font-normal text-base leading-[140%]`}
          >
            {item.content3}
          </p>
          {item.points3 && item.points3.length > 0 && (
            <ul className={`${montserrat.className} ${styles.bulletList} text-base`}>
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
          <h3
            className={`${comfortaa.className} font-bold text-[22px] lg:text-[28px] leading-[130%]`}
          >
            {item.paragraph4}
          </h3>
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
        )} */}
      {/* </div> */}

      <a
        className={`${montserrat.className} font-bold text-lg leading-[140%] underline`}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.link_text}
      </a>
      <Link href='/news' className={`${montserrat.className} font-normal text-dark-green text-sm leading-[100%] mt-[-12px]`}>
        НОВОСТИ
      </Link>
    </div>
  );
}
