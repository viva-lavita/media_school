"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
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
  const [type, setType] = useState('news');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/users/me');
        console.log('Auth check result:', response.ok, response.status);
        setIsAuthenticated(response.ok);
      } catch (error) {
        console.error('Auth check error:', error);
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (!id) {
      setError("Неверные параметры URL");
      setLoading(false);
      return;
    }

    const typeValue = searchParams.get('type') || 'news';
    setType(typeValue);
    const queryParam = typeValue === 'news' ? 'news' : typeValue === 'announcements' ? 'announcement' : 'competition';

    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments?${queryParam}=${id}&ordering=-created_at`);
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched comments data:', data);
          const results = data.results || data;
          const formatted = results.map(comment => ({
            id: comment.id,
            text: comment.text,
            author: comment.author ? `${comment.author.first_name} ${comment.author.last_name}`.trim() || comment.author.username : 'Аноним',
            date: formatDate(comment.created_at),
            time: new Date(comment.created_at).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
            answers: comment.answers || []
          }));
          setComments(formatted);
        }
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    const fetchItem = async () => {
      const endpoint = `/api/${typeValue}/${id}`;

      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${typeValue} with id ${id}`);
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
        setError(`${typeValue.charAt(0).toUpperCase() + typeValue.slice(1)} не найдена`);
        setLoading(false);
      }
    };

    fetchItem();
  }, [id, searchParams, setPageTitle]);

  if (loading) {
    return <p className={styles.loading}>Загрузка...</p>;
  }

  if (error) {
    return <p className={styles.loading}>{error}</p>;
  }

  if (!item) {
    return <p className={styles.loading}>Новость не найдена.</p>;
  }

  // return (
  //   <>
  //     <div className={`${styles.newsContainer}`}>
  //       <NewsContent item={item} />
  //       {isAuthenticated ? <CommentForm itemId={id} itemType={type} /> : <div className={`${styles.textInfo} border-l-1 border-grass`}><p>Возможность комментирования доступна только для авторизованных пользователей</p></div>}
  //       <CommentsList questions={comments} />
  //     </div>
  //   </>
  // );
  return (
    <>
      <div className={`${styles.newsContainer}`}>
        <NewsContent item={item} />
        {isAuthenticated ? <CommentForm itemId={id} itemType={type} /> : <div ></div>}
        <CommentsList questions={comments} />
        {isAuthenticated ? <div ></div> : <div className={`${styles.textInfo} border-l-1 border-grass`}><p>Возможность комментирования доступна только для авторизованных пользователей</p></div>}
      </div>
    </>
  );
}
