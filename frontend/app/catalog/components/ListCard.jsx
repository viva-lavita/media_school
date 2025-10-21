import { useState, useEffect } from 'react';
import { comfortaa } from '@/lib/fonts';
import Card from './Card';
import styles from './DocumentsSection.module.css';
import formatDocument from '@/app/utils/formatDocument';

export default function SectionListCard({ title, documents }) {
 const [windowWidth, setWindowWidth] = useState(0);

 useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
 }, []);

 const visibleFilesCount = windowWidth <= 768 ? 2 : Math.min(documents.length, 3);
 const [isCollapsed, setIsCollapsed] = useState(true);

 const handleToggleClick = () => {
  setIsCollapsed((prevState) => !prevState); 
 };

 const totalCount = title === 'Фотогалерея'
  ? documents.reduce((sum, doc) => sum + (doc.photoCount || 0), 0)
  : documents.length;

 return (
  <section className={styles.mediaSection}>
   <div className={styles.info}>
    <h2 className={`${comfortaa.className} ${styles.title} ${styles.mediaTitle}`}>{title}</h2>
    <p className={`${styles.count}`}>{formatDocument(totalCount)}</p>
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
     documents.length > visibleFilesCount &&
     documents
      .slice(visibleFilesCount)
      .map((file) => (
       <Card
         imageUrl={file.imageUrl}
      videoUrl={file.videoUrl}
      title={file.title}
      date={file.date}
      categoryName={file.categoryName}
      photoCount={file.photoCount}
      images={file.images}
      isVideo={file.isVideo !== undefined ? file.isVideo : true}

        key={`item-`+ Math.random().toString(36).substr(2, 9)}
       />
      ))}

   </div>

   {
    /* Кнопка появляется, если документов больше видимых */
    documents.length > visibleFilesCount && (
     <button className={`${styles.toggleButton}`} onClick={handleToggleClick}>
      {isCollapsed ? 'РАСКРЫТЬ СПИСОК' : 'СВЕРНУТЬ'}
     </button>
    )
   }
  </section>
 );
}
