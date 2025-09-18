"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "../Onenews.module.css";
import NewsContent from "./components/NewsContent";
import CommentForm from "./components/CommentForm";
import CommentsList from "./components/CommentsList";
import { usePageTitle } from "../../context/PageTitleContext";
import { formatDate } from "../../utils/formatDate";

export default function NewsDetail() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const { setPageTitle } = usePageTitle();
  const [item, setItem] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Неверные параметры URL");
      setLoading(false);
      return;
    }

    const type = searchParams.get('type') || 'news';
    const queryParam = type === 'news' ? 'news' : type === 'announcements' ? 'announcement' : 'competition';

    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments?${queryParam}=${id}&ordering=-created_at`);
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched comments data:', data);
          const results = data.results || data;
          const lastTwo = results.slice(0, 2);
          const formatted = lastTwo.map(comment => ({
            id: comment.id,
            text: comment.text,
            author: comment.author ? `${comment.author.first_name} ${comment.author.last_name}`.trim() || comment.author.username : 'Аноним',
            date: formatDate(comment.created_at),
            time: new Date(comment.created_at).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
            answers: comment.answers ? comment.answers.length : 0
          }));
          setComments(formatted);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    const fetchItem = async () => {
      const endpoint = `/api/${type}/${id}`;

      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${type} with id ${id}`);
        }
        const data = await response.json();
        if (data) {
          setItem(data);
          setPageTitle(data.title);
          await fetchComments();
          setLoading(false);
          return;
        }
      } catch (error) {
        console.error(`Error fetching from ${endpoint}:`, error);
        setError(`${type.charAt(0).toUpperCase() + type.slice(1)} не найдена`);
        setLoading(false);
      }
    };

    fetchItem();
  }, [id, searchParams, setPageTitle]);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!item) {
    return <p>Новость не найдена.</p>;
  }

  return (
    <>
      <div className={`${styles.newsContainer}`}>
        <NewsContent item={item} />
        <CommentForm />
        <CommentsList questions={comments} />
      </div>
    </>
  );
}
