import { comfortaa, montserrat } from "@/lib/fonts";
import { useState } from 'react';
import styles from "../../Onenews.module.css";

export default function CommentForm() {
  const [charCount, setCharCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className={`${styles.commentSection}`}>
      <h2
        className={`${comfortaa.className} font-bold text-[18px] lg:text-[22px] leading-[100%]`}
      >
        Добавить комментарий
      </h2>
      <p
        className={`${montserrat.className} font-normal text-lg leading-[140%] mt-3`}
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
            onChange={() => setSelectedCategory('category1')}
          />
          <span className={`${styles.radioBtn}`}></span>
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
            onChange={() => setSelectedCategory('category2')}
          />
          <span className={`${styles.radioBtn}`}></span>
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
            onChange={() => setSelectedCategory('category3')}
          />
          <span className={`${styles.radioBtn}`}></span>
          <span className={`${styles.textStyle}`}>
            Другое
          </span>
        </label>
      </div>

      <form className={`${styles.commentForm}`}>
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
          onChange={(e) => setCharCount(e.target.value.length)}
          style={{ resize: 'none' }}
        />
        <button type="submit" className={`${montserrat.className} ${styles.commentButton} b-green mt-7`}>
          Отправить
        </button>
      </form>
    </div>
  );
}
