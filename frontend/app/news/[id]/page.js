"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../Onenews.module.css";
import NewsContent from "./components/NewsContent";
import CommentForm from "./components/CommentForm";
import CommentsList from "./components/CommentsList";
import { usePageTitle } from "../../context/PageTitleContext";

export default function NewsDetail() {
  const { id } = useParams();
  const { setPageTitle } = usePageTitle();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Неверные параметры URL");
      setLoading(false);
      return;
    }

    const fetchItem = async () => {
      const apis = [
        { endpoint: '/api/news/' + id, type: 'news' },
        { endpoint: '/api/announcements/' + id, type: 'announcements' },
        { endpoint: '/api/contests/' + id, type: 'contests' }
      ];

      for (const api of apis) {
        try {
          const response = await fetch(api.endpoint);
          if (!response.ok) continue;
          const data = await response.json();
          if (data) {
            setItem(data);
            setPageTitle(data.title);
            setLoading(false);
            return;
          }
        } catch (error) {
          console.error(`Error fetching from ${api.endpoint}:`, error);
        }
      }
      setError("Новость не найдена");
      setLoading(false);
    };

    fetchItem();
  }, [id, setPageTitle]);

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
    { id: 2, text: "Можно ли учиться онлайн или только офлайн?", author: "Мария Петрова", date: "02.10.2023", time: "14:30", answers: 44 },
    { id: 3, text: "Можно ли учиться онлайн или только офлайн?", author: "Алексей Сидоров", date: "03.10.2023", time: "09:15", answers: 44 },
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
