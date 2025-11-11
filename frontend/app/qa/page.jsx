'use client';
import { comfortaa, montserrat } from '@/lib/fonts';
import styles from './QA.module.css';
import QuestionsList from './components/QuestionsList';
import { useState, useEffect } from 'react';
import AskQuestion from './components/AskQuestion';
import { formatDate } from '../utils/formatDate';

export default function QAPage() {
 const [activeTab, setActiveTab] = useState('all');
 const [questions, setQuestions] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [isAuthenticated, setIsAuthenticated] = useState(false);
 const API_URL = process.env.NEXT_PUBLIC_API_URL;

 useEffect(() => {
  const fetchQuestions = async () => {
   try {
    const response = await fetch(`${API_URL}/events/comments?question_category=expert&ordering=-created_at`);
    if (!response.ok) {
     throw new Error('Failed to fetch questions');
    }
    const data = await response.json();
    const results = data.results || data;
    const formatted = results.map(comment => ({
     question: comment.text,
     name: comment.author ? `${comment.author.first_name} ${comment.author.last_name}`.trim() || comment.author.username : 'Аноним',
     answers: comment.answers ? comment.answers.map(answer => ({
      answer: answer.text,
      name: answer.author ? `${answer.author.first_name} ${answer.author.last_name}`.trim() || answer.author.username : 'Аноним',
      position: answer.author?.post || '',
      data: formatDate(answer.created_at),
      time: new Date(answer.created_at).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
     })) : [],
     data: formatDate(comment.created_at),
     time: new Date(comment.created_at).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
    }));
    setQuestions(formatted);
    setLoading(false);
   } catch (error) {
    console.error('Error fetching questions:', error);
    setError('Не удалось загрузить вопросы');
    setLoading(false);
   }
  };

  fetchQuestions();
 }, []);

 useEffect(() => {
  const checkAuth = async () => {
   try {
        // тут поменять, на const response = await fetch(`${API_URL}/users/me`);
        // если локальное апи с аутентификацией уберут
    // const response = await fetch(`${API_URL}/users/me/`);
    const response = await fetch("/local_api/auth/profile/");
    console.log('Auth check result:', response.ok, response.status);
    setIsAuthenticated(response.ok);
   } catch (error) {
    console.error('Auth check error:', error);
    setIsAuthenticated(false);
   }
  };
  checkAuth();
 }, []);

 if (loading) {
  return <p className={styles.loading}>Загрузка...</p>;
 }

 if (error) {
  return <p className={styles.loading}>{error}</p>;
 }

 return (
  <div className={styles.wrap}>
   <h3 className={`${comfortaa.className} ${styles.titleQA}`}>Вопрос-ответ</h3>
   <div className={styles.tabs}>
    <button
     onClick={() => setActiveTab('all')}
     className={`${montserrat.className} ${styles.tabButton} ${
      activeTab === 'all' ? styles.active : ''
     }`}
    >
     Все вопросы
    </button>

    <button
     onClick={() => setActiveTab('ask')}
     className={`${montserrat.className} ${styles.tabButton} ${
      activeTab === 'ask' ? styles.active : ''
     }`}
    >
     Задать вопрос
    </button>
   </div>

   {activeTab === 'all' && <QuestionsList questions={questions} />}

   {activeTab === 'ask' && (isAuthenticated ? <AskQuestion /> : <div className={`${styles.textInfo} border-l-1 border-grass pl-3 pt-3 pb-3 mt-10`}><p>Задавать вопросы могут только авторизованные пользователи</p></div>)}
  </div>
 );
}
