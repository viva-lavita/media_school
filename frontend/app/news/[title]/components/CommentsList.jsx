import { comfortaa, montserrat } from "@/lib/fonts";
import styles from "../../Onenews.module.css";

export default function CommentsList({ questions }) {
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
            {question.text}
          </div>
          <div className={styles.icons}>
            <span className={`${montserrat.className} ${styles.nameAuthor} whitespace-nowrap`}>
              {question.author}
            </span>
            <div className={`flex flex-row gap-5`}>
              <span className={`${montserrat.className} ${styles.answers}`}>
                {formatAnswer(question.answers)}
              </span>
              <span className={`${montserrat.className} ${styles.date}`}>
                {`${question.date}, ${question.time}`}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
