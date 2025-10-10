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
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitError, setSubmitError] = useState('');
 const [submitSuccess, setSubmitSuccess] = useState(false);

 const handleSubmit = async (event) => {
  event.preventDefault();

  // Validation
  if (!selectedCategory) {
   setCategoryError(true);
   setSubmitError('Пожалуйста, выберите категорию вопроса');
   return;
  } else {
   setCategoryError(false);
  }

  if (!questionText.trim()) {
   setQuestionError(true);
   setSubmitError('Пожалуйста, введите текст вопроса');
   return;
  } else {
   setQuestionError(false);
  }

  if (questionText.length > 400) {
   setSubmitError('Текст вопроса не должен превышать 400 символов');
   return;
  }

  setIsSubmitting(true);
  setSubmitError('');

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

   // Success
   setSubmitSuccess(true);
   setSelectedCategory('');
   setQuestionText('');
   setCharCount(0);

   // Reset success message after 3 seconds
   setTimeout(() => {
    setSubmitSuccess(false);
   }, 3000);

  } catch (error) {
   console.error('Error submitting question:', error);
   setSubmitError(error.message || 'Произошла ошибка при отправке вопроса');
  } finally {
   setIsSubmitting(false);
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
     disabled={isSubmitting}
    />

    {submitError && (
     <div className="mt-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
      {submitError}
     </div>
    )}

    {submitSuccess && (
     <div className="mt-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
      Вопрос отправлен успешно!
     </div>
    )}

    <button
     disabled={isSubmitting}
     type="submit"
     className={`${montserrat.className} ${styles.commentButton} ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
     {isSubmitting ? 'Отправляем...' : 'Спросить'}
    </button>
   </form>
  </>
 );
}
