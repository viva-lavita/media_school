"use client";
import { useParams } from "next/navigation";
import { newsData, announcementsData, contestsData } from "../data.js";
import styles from "../Onenews.module.css";
import NewsContent from "./components/NewsContent";
import CommentForm from "./components/CommentForm";
import CommentsList from "./components/CommentsList";

export default function NewsDetail() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

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
        <NewsContent item={item} />
        <CommentForm />
        <CommentsList questions={lastTwoQuestions} />
      </div>
    </>
  );
}
