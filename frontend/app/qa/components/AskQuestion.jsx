import { useState } from 'react';
import styles from './AskQuestion.module.css';
import { montserrat } from '@/lib/fonts';

export default function AskQuestion() {
 const categories = [
  'Вопрос к эксперту/преподавателю',
  'Технический вопрос',
  'Другое',
 ];

 const [selectedCategory, setSelectedCategory] = useState('');
 const [questionText, setQuestionText] = useState('');
 const [charCount, setCharCount] = useState(0);
 const [categoryError, setCategoryError] = useState(false);
 const [questionError, setQuestionError] = useState(false);

 const handleSubmit = async (event) => {
  event.preventDefault();

  if (!selectedCategory) {
   setCategoryError(true);
  } else {
   setCategoryError(false);
  }

  if (!questionText.trim()) {
   setQuestionError(true);
  } else {
   setQuestionError(false);
  }

  if (!selectedCategory || !questionText.trim()) {
   alert('Заполните все необходимые поля!');
   return;
  }

  const categoryMap = {
   'Вопрос к эксперту/преподавателю': 'expert',
   'Технический вопрос': 'technical',
   'Другое': 'other'
  };

  const questionCategory = categoryMap[selectedCategory] || 'other';

  try {
   const response = await fetch('/api/comments', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({
     text: questionText,
     question_category: questionCategory,
    }),
   });

   if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Ошибка отправки вопроса');
   }

   alert('Вопрос отправлен успешно!');
   setSelectedCategory('');
   setQuestionText('');
   setCharCount(0);
  } catch (err) {
   console.error('Ошибка отправки:', err.message);
   alert('Ошибка отправки вопроса: ' + err.message);
  }
 };
 const checkForErrors = (newValue) => {
  if (!selectedCategory && newValue.trim() !== '') {
   setCategoryError(true);
  } else {
   setCategoryError(false);
  }

  if (!newValue.trim()) {
   setQuestionError(true);
  } else {
   setQuestionError(false);
  }
 };

 return (
  <>
   <h1
    className={`${montserrat.className} ${styles.title} ${
     categoryError ? styles.titleError : ''
    }`}
   >
    Категория вопроса
   </h1>
   <div
    className={`${styles.categoriesContainer} ${
     categoryError ? styles.hasError : ''
    }`}
   >
    {categories.map((category, index) => (
     <label key={index} className={styles.labelCategory}>
      <input
       className={`${montserrat.className} ${styles.inputCategories}`}
       type="radio"
       name="category"
       value={category}
       checked={selectedCategory === category}
       onChange={() => {
        setSelectedCategory(category);
        setCategoryError(false);
       }}
      />
      <span className={`${montserrat.className} ${styles.textCategories}`}>
       {category}
      </span>
     </label>
    ))}
   </div>

   <form className={styles.commentForm} onSubmit={handleSubmit}>
    <div className={styles.headerBlock}>
     <p className={`${montserrat.className} ${styles.ourQuestion}`}>
      Текст вопроса
     </p>
     <span className={`${montserrat.className} ${styles.count}`}>
      {charCount}/400
     </span>
    </div>
    <textarea
     className={`${styles.commentInput} ${montserrat.className} ${
      questionError ? styles.hasQuestionError : ''
     }`}
     value={questionText}
     onChange={(e) => {
      setQuestionText(e.target.value);
      setCharCount(e.target.value.length);
      checkForErrors(e.target.value);
     }}
     maxLength="400"
     style={{ resize: 'none' }}
    />
    <button
     disabled={!selectedCategory || !questionText.trim()}
     type="submit"
     className={`${montserrat.className} ${styles.commentButton}`}
    >
     Спросить
    </button>
   </form>
  </>
 );
}
