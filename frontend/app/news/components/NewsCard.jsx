import Link from "next/link";
import Image from 'next/image';
import { montserrat } from "@/lib/fonts";
import styles from "./NewsCard.module.css";

export default function NewsCard({ item, index, currentTab }) {
  if (currentTab === "contests") {
    // Преобразуем дату завершения в формат ГГГГ-ММ-ДД
    const parts = item.date_end.split(".");
    const formattedDateEnd = `${parts[2]}-${parts[1]}-${parts[0]}`;
    const dateEnd = new Date(formattedDateEnd); // Создаем объект Date для конца
    const currentDate = new Date(); // Получаем текущую дату
    // Проверяем, завершен ли конкурс
    const isCompleted = currentDate > dateEnd;

    return (
      <Link key={index} href={`/news/${encodeURIComponent(item.title)}`} className="flex flex-col gap-2 relative">
        <div className={styles.newsLabel}>
          <Image
            src={isCompleted ? "/images/checkmark.svg" : "/images/Anons_news.svg"}
            alt={isCompleted ? "check" : "anons"}
            width={16}
            height={16}
          />
          {isCompleted ? "завершен" : `c ${item.date_start}`}
        </div>
        <figure className="flex flex-col gap-3">
          <Image
            src={item.image}
            alt="конкурс"
            width={447}
            height={300}
            layout="responsive"
          />
          <figcaption
            className={`${montserrat.className} text-dark-green font-normal text-sm leading-[100%]`}
          >
            {"КОНКУРС"}
          </figcaption>
        </figure>
        <div className="flex flex-col gap-2">
          <p
            className={`${montserrat.className} font-normal text-lg leading-[140%]`}
          >
            {item.title}
          </p>
          <p
            className={`${montserrat.className} line-clamp-3 font-normal leading-[130%]`}
          >
            {item.preview}
          </p>
        </div>
        <p
          className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2`}
        >
          {item.date}
        </p>
      </Link>
    );
  }

  return (
    <Link key={index} href={`/news/${encodeURIComponent(item.title)}`} className="flex flex-col gap-2 relative">
      <figure className="flex flex-col gap-3">
        <Image
          src={item.image}
          alt="новость"
          width={447}
          height={300}
          layout="responsive"
        />
        <figcaption
          className={`${montserrat.className} text-dark-green font-normal text-sm leading-[100%]`}
        >
          {currentTab === "news" ? "НОВОСТИ" : "АНОНС"}
        </figcaption>
      </figure>
      <div className="flex flex-col gap-2">
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
    </Link>
  );
}
