"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../Onenews.module.css";
import NewsContent from "./components/NewsContent";
import CommentForm from "./components/CommentForm";
import CommentsList from "./components/CommentsList";

export default function NewsDetail() {
  const { title } = useParams();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const type = searchParams.get('type');
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id || !type) {
      setError("Неверные параметры URL");
      setLoading(false);
      return;
    }

    // Определяем локальный API endpoint на основе типа
    let apiEndpoint = '';
    if (type === 'news') {
      apiEndpoint = '/api/news';
    } else if (type === 'announcements') {
      apiEndpoint = '/api/announcements';
    } else if (type === 'contests') {
      apiEndpoint = '/api/contests';
    } else {
      setError("Неизвестный тип контента");
      setLoading(false);
      return;
    }

    // Загружаем список данных и находим элемент по id
    fetch(apiEndpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const results = data.results || [];
        const foundItem = results.find((item) => item.id == id);
        if (foundItem) {
          setItem(foundItem);
        } else {
          setError("Новость не найдена");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching item:', error);
        setError("Ошибка загрузки данных");
        setLoading(false);
      });
  }, [id, type]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
        <NewsContent item={item} />
        <CommentForm />
        <CommentsList questions={lastTwoQuestions} />
      </div>
    </>
  );
}
