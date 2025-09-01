import { useRouter } from 'next/router';
import { newsData, announcementsData, contestsData } from '../../data'; // Импортируйте ваши данные

const NewsDetail = () => {
  const router = useRouter();
  const { title } = router.query; // Получаем заголовок из URL

  // Найдите соответствующий элемент по заголовку
  const item = [...newsData, ...announcementsData, ...contestsData].find(
    (data) => data.title === title
  );

  if (!item) {
    return <p>Новость не найдена.</p>; // Обработка случая, когда элемент не найден
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.preview}</p>
      <img src={item.image} alt={item.title} />
      <p>{item.date}</p>
      {/* Добавьте другие данные, которые хотите отобразить */}
    </div>
  );
};

export default NewsDetail;