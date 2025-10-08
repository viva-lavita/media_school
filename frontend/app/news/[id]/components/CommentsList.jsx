"use client";
import { comfortaa, montserrat } from "@/lib/fonts";
import { useState } from "react";
import styles from "../../Onenews.module.css";
import { formatDate } from "@/app/utils/formatDate";
import { formatText } from "@/app/utils/formatText";

export default function CommentsList({ questions, newsId, type, setComments }) {
  const [expandedComments, setExpandedComments] = useState(new Set());

  const toggleAnswers = (id) => {
    setExpandedComments(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };
  const formatAnswer = (num) => {
    const getAnswerWord = (n) => {
      if (n % 10 === 1 && n % 100 !== 11) return 'ответ';
      if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return 'ответа';
      return 'ответов';
    };
    return `${num} ${getAnswerWord(num)}`;
  };

  return (
    <div className={`${styles.commentsList}`}>
      <h2
        className={`${comfortaa.className} font-bold text-[18px] lg:text-[22px] leading-[100%] mb-[14px]`}
      >
        Комментарии и вопросы
      </h2>
      {questions.map((question) => (
        <div key={question.id} className={styles.question}>
          <div className={`${montserrat.className} ${styles.questionText} font-normal text-lg leading-[140%]`}>
            {formatText(question.text)}
          </div>
          <div className={styles.icons}>
            <span className={`${montserrat.className} ${styles.nameAuthor} whitespace-nowrap`}>
              {question.author}
            </span>
            <div className={`flex flex-row gap-5`}>
              <span
                className={`${montserrat.className} ${styles.answers}`}
                style={{ cursor: 'pointer' }}
                onClick={() => toggleAnswers(question.id)}
              >
                {formatAnswer(question.answers.length)}
              </span>
              <span className={`${montserrat.className} ${styles.date}`}>
                {`${question.date}, ${question.time}`}
              </span>
            </div>
          </div>
          {expandedComments.has(question.id) && (
            <div className={styles.answersList}>
              <span className={`${montserrat.className} ${styles.answersOpen} pb-2`}>
                {formatAnswer(question.answers.length)}
              </span>
              {question.answers.map((answer) => (
                <div key={answer.id} className={styles.answer}>
                  <div className={`${montserrat.className} ${styles.questionText} font-normal text-lg leading-[140%] pb-2`}>
                    {formatText(answer.text)}
                  </div>
                  <div className={`${styles.answerMeta} ${styles.icons} pb-2`}>
                    <span className={`${montserrat.className} ${styles.nameAuthor} whitespace-nowrap`}>
                      {answer.author
                        ? `${answer.author.first_name} ${answer.author.last_name}`.trim() || answer.author.username
                        : 'Аноним'}
                    </span>
                    <span className={`${montserrat.className} ${styles.date}`}>
                      {formatDate(answer.created_at)}, {new Date(answer.created_at).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              {question.answers.length > 0 && (
                <button className={`${styles.collapseButton} underline`} onClick={() => toggleAnswers(question.id)}>
                  Свернуть
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
