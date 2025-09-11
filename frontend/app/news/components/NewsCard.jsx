import Link from "next/link";
import { montserrat } from "@/lib/fonts";
import styles from "./NewsCard.module.css";

export default function NewsCard({ item, index, currentTab }) {
  if (currentTab === "contests") {
    // Проверяем дату завершения
    const dateEnd = item.end_date ? new Date(item.end_date) : new Date();
    const currentDate = new Date();
    // Проверяем, завершен ли конкурс
    const isCompleted = currentDate > dateEnd;

    return (
      <Link key={index} href={`/news/${encodeURIComponent(item.title || 'contest')}?id=${item.id}&type=contests`} className="flex flex-col gap-2 relative">
        <div className={styles.newsLabel}>
          <img
            src={isCompleted ? "/images/checkmark.svg" : "/images/Anons_news.svg"}
            alt={isCompleted ? "check" : "anons"}
            style={{ width: '16px', height: '16px' }}
          />
          {isCompleted ? "завершен" : `c ${item.start_date || ''}`}
        </div>
        <figure className="flex flex-col gap-3">
          {item.image && item.image.trim() !== '' ? (
            <div className="w-full h-[300px] overflow-hidden">
              <img
                src={item.image}
                alt="конкурс"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gray-200 flex items-center justify-center hidden">
                <span className="text-gray-500">Ошибка загрузки изображения</span>
              </div>
            </div>
          ) : (
            <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Изображение отсутствует</span>
            </div>
          )}
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
            {item.description }
          </p>
        </div>
        <p
          className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2`}
        >
          {item.created_at }
        </p>
      </Link>
    );
  }

  return (
    <Link key={index} href={`/news/${encodeURIComponent(item.title || 'news')}?id=${item.id}&type=${currentTab}`} className="flex flex-col gap-2 relative">
      <figure className="flex flex-col gap-3">
        {item.image && item.image.trim() !== '' ? (
          <div className="w-full h-[300px] overflow-hidden">
            <img
              src={item.image}
              alt="новость"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gray-200 flex items-center justify-center hidden">
              <span className="text-gray-500">Ошибка загрузки изображения</span>
            </div>
          </div>
        ) : (
          <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Изображение отсутствует</span>
          </div>
        )}
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
          {item.description}
        </p>
      </div>
      <p
        className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2`}
      >
        {item.created_at}
      </p>
    </Link>
  );
}
