import { comfortaa, montserrat } from "@/lib/fonts";
import { useState } from 'react';
import styles from "../../Onenews.module.css";

export default function CommentForm({ itemId, itemType }) {
  const [charCount, setCharCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [text, setText] = useState('');
  const [categoryError, setCategoryError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!selectedCategory) {
      setCategoryError(true);
      setSubmitError('Пожалуйста, выберите категорию вопроса');
      return;
    } else {
      setCategoryError(false);
    }

    if (!text.trim()) {
      setSubmitError('Пожалуйста, введите текст вопроса');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Map radio button values to API question_category
      const categoryMapping = {
        'category1': 'expert',
        'category2': 'technical',
        'category3': 'other'
      };

      // Prepare request body with the correct association key
      const requestBody = {
        question_category: categoryMapping[selectedCategory],
        text: text.trim(),
      };

      // Add the association key based on itemType
      if (itemType === 'news') {
        requestBody.news = itemId;
      } else if (itemType === 'announcements') {
        requestBody.announcement = itemId;
      } else if (itemType === 'contests') {
        requestBody.competition = itemId;
      }

      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();

        // Handle specific error types
        if (response.status === 401) {
          throw new Error('Необходимо войти в систему для отправки комментариев');
        }

        throw new Error(errorData.error || 'Ошибка при отправке комментария');
      }

      // Success
      setSubmitSuccess(true);
      setText('');
      setCharCount(0);
      setSelectedCategory('');

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting comment:', error);
      setSubmitError(error.message || 'Произошла ошибка при отправке комментария');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${styles.commentSection}`}>
      <h2
        className={`${comfortaa.className} font-bold text-[18px] lg:text-[22px] leading-[100%]`}
      >
        Добавить комментарий
      </h2>
      <p
        className={`${montserrat.className} font-normal text-lg leading-[140%] mt-3 ${categoryError ? 'text-red-500' : ''}`}
      >
        Выберите категорию вопроса
      </p>
      <div className="flex flex-col gap-4">
        <label className={`${styles.customRadio}`}>
          <input
            type="radio"
            name="category"
            value="category1"
            checked={selectedCategory === 'category1'}
            onChange={() => {
              setSelectedCategory('category1');
              setCategoryError(false);
            }}
          />
          <span className={`${styles.radioBtn} ${categoryError ? 'border-red-500' : ''}`}></span>
          <span className={`${styles.textStyle}`}>
            Вопрос эксперту/ преподавателю
          </span>
        </label>
        <label className={`${styles.customRadio}`}>
          <input
            type="radio"
            name="category"
            value="category2"
            checked={selectedCategory === 'category2'}
            onChange={() => {
              setSelectedCategory('category2');
              setCategoryError(false);
            }}
          />
          <span className={`${styles.radioBtn} ${categoryError ? 'border-red-500' : ''}`}></span>
          <span className={`${styles.textStyle}`}>
            Технический вопрос
          </span>
        </label>
        <label className={`${styles.customRadio}`}>
          <input
            type="radio"
            name="category"
            value="category3"
            checked={selectedCategory === 'category3'}
            onChange={() => {
              setSelectedCategory('category3');
              setCategoryError(false);
            }}
          />
          <span className={`${styles.radioBtn} ${categoryError ? 'border-red-500' : ''}`}></span>
          <span className={`${styles.textStyle}`}>
            Другое
          </span>
        </label>
      </div>

      <form className={`${styles.commentForm}`} onSubmit={handleSubmit}>
        <div className={`${styles.nameForm} flex flex-row justify-between mt-[22px]`}>
          <p className={`${montserrat.className} font-normal text-base text-lg leading-[140%]`}>
            Текст вопроса
          </p>
          <span className={`${montserrat.className} font-normal text-base text-lg leading-[140%]`}>
            {charCount}/400
          </span>
        </div>
        <textarea
          className={`${styles.commentInput} ${montserrat.className} font-normal text-lg text-dark-green leading-[140%]`}
          maxLength="400"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setCharCount(e.target.value.length);
          }}
          style={{ resize: 'none' }}
          disabled={isSubmitting}
        />

        {submitError && (
          <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {submitError}
          </div>
        )}

        {submitSuccess && (
          <div className="mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            Комментарий успешно отправлен!
          </div>
        )}

        <button
          type="submit"
          className={`${montserrat.className} ${styles.commentButton} b-green mt-7 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправляем...' : 'Добавить'}
        </button>
      </form>
    </div>
  );
}
