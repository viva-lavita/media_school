import styles from './Onenews.module.css'
import { comfortaa } from "@/lib/fonts";
import { montserrat } from "@/lib/fonts";

export default function OnenewsPage() {
  return (
    <>
      <div className={`${styles.newsContainer}`}>

        {/* Новость */}
        <div className={`${styles.newsAll}`}>
            <div className={`${styles.newsInfo}`}>
                <div className={`${styles.newsPreview}`}>
                    <span className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Автор: Имя Автора</span>
                    <h1 className={`${comfortaa.className} ${styles.newsTitle} font-bold leading-[100%]`}>Заголовок новости</h1>
                    <span className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Дата: 25 августа 2023</span>
                    <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>
                        Текст превью новости.
                    </p>
                </div>    
                <img src="/images/news-image.png" alt="Фото новости" className={styles.newsImage} />
            </div>

            {/* Текст новости с подзаголовками */}
            <div className={`${styles.newsContent}`}>
                <div className={`${styles.newsParagraph}`}>
                    <h2 className={`${montserrat.className} font-bold text-lg leading-[140%]`}>Подзаголовок абзац1</h2>
                    <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>
                        Текст абзац1.
                    </p>
                </div>  
                <img src="/images/news-subimage.png" alt="Дополнительное фото" className={styles.subImage} />

                <div className={`${styles.newsParagraph}`}>
                    <h2 className={`${montserrat.className} font-bold text-lg leading-[140%]`}>Подзаголовок абзац2</h2>
                    <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>
                        Текст абзаца.
                    </p>
                </div> 
                <img src="/images/news-subimage.png" alt="Дополнительное фото" className={styles.subImage} />

                <div className={`${styles.newsParagraph}`}>
                    <h2 className={`${montserrat.className} font-bold text-lg leading-[140%]`}>Подзаголовок абзац3</h2>
                    <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>
                        Текст абзаца.
                    </p>
                </div> 
                <img src="/images/news-subimage.png" alt="Дополнительное фото" className={styles.subImage} />

                <div className={`${styles.newsParagraph}`}>
                    <h2 className={`${montserrat.className} font-bold text-lg leading-[140%]`}>Подзаголовок абзац4</h2>
                    <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>
                        Текст абзаца.
                    </p>
                </div> 
                <img src="/images/news-subimage.png" alt="Дополнительное фото" className={styles.subImage} />
            </div>

        </div>

        
        {/* Форма для добавления комментариев или вопросов */}
        <div className={`${styles.commentSection}`}>
          <h2 className={`${montserrat.className} font-bold text-lg leading-[140%]`}>Добавить комментарий или задать вопрос</h2>
          <form className={`${styles.commentForm}`}>
            <textarea placeholder="Ваш комментарий или вопрос" className={`${styles.commentInput}`} />
            <button type="submit" className={`${styles.commentButton}`}>Отправить</button>
          </form>
        </div>

        {/* Список комментариев и вопросов */}
        <div className={`${styles.commentsList}`}>
          <h2 className={`${montserrat.className} font-bold text-lg leading-[140%]`}>Комментарии</h2>
          <div className={`${styles.comment}`}>
            <p><strong>Имя пользователя:</strong> Это комментарий.</p>
          </div>
          <div className={`${styles.comment}`}>
            <p><strong>Имя пользователя:</strong> Другой комментарий.</p>
          </div>
        </div>
      </div>
    </>
  )
}