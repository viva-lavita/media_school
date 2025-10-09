import { useState } from 'react';
import Card from './Card';
import FileItem from './FileItem';
import styles from './DocumentsSection.module.css';
import styleSection from '../layoutCatalog.module.css';
import { comfortaa, montserrat } from '@/lib/fonts';
import formatDocument from '@/app/utils/formatDocument';

export default function SectionListCard({ title, documents }) {
 const visibleFilesCount = Math.min(documents.length, 3); // Показываем первые три элемента
 const [isCollapsed, setIsCollapsed] = useState(true); // Начальное состояние - свернуто

 const handleToggleClick = () => {
  setIsCollapsed((prevState) => !prevState); // Инвертируем состояние кнопки
 };

 return (
  <section className={styles.mediaSection}>
   <div className={styles.info}>
    <h2 className={`${styles.title}`}>{title}</h2>
    <p className={`${styles.count}`}>{formatDocument(documents.length)}</p>
   </div>

   <div className={styles.mediaBox}>
    {documents.slice(0, visibleFilesCount).map((file) => (
     <Card
      key={`item-`+ Math.random().toString(36).substr(2, 9)}
      imageUrl={file.imageUrl}
      videoUrl={file.videoUrl}
      title={file.title}
      date={file.date}
      categoryName={file.categoryName}
      photoCount={file.photoCount}
      images={file.images}
      isVideo={file.isVideo !== undefined ? file.isVideo : true}
     />
    ))}

    {!isCollapsed &&
     documents.length > 3 &&
     documents
      .slice(visibleFilesCount)
      .map((file) => (
       <Card
         imageUrl={file.imageUrl}
      videoUrl={file.videoUrl}
      title={file.title}
      date={file.date}
      categoryName={file.categoryName}
      isVideo={file.isVideo !== undefined ? file.isVideo : true}

        key={`item-`+ Math.random().toString(36).substr(2, 9)}
       />
      ))}

   </div>

   {
    /* Кнопка появляется, если документов больше трех */
    documents.length > 3 && (
     <button className={`${styles.toggleButton}`} onClick={handleToggleClick}>
      {isCollapsed ? 'РАСКРЫТЬ СПИСОК' : 'СВЕРНУТЬ'}
     </button>
    )
   }
  </section>
 );
}
