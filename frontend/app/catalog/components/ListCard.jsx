import { useState } from 'react';
import Card from './Card';
import FileItem from './FileItem';
import styles from './DocumentsSection.module.css';
import { comfortaa, montserrat } from '@/lib/fonts';

export default function ListCard({ documents }, titleCardList) {
 const visibleFilesCount = Math.min(documents.length, 3);
 const [isCollapsed, setIsCollapsed] = useState(true);

 const handleToggleClick = () => {
  setIsCollapsed(!isCollapsed);
 };

 return (
  <>
   <div className={styles.info}>
    <h2 className={`${comfortaa.className} ${styles.title}`}>
     {titleCardList}
    </h2>
    <p className={`${montserrat.className} ${styles.count}`}>
     {documents.length} документов
    </p>
   </div>
   <div className={styles.mediaBox}>
    {documents.slice(0, visibleFilesCount).map((file) => (
     <Card
      key={file.id}
      imageUrl={file.imageUrl}
      videoUrl={file.videoUrl}
      title={file.title}
      date={file.date}
     />
    ))}

    {documents.length > 4 && isCollapsed && (
     <button
      className={`${montserrat.className} ${styles.toggleButton}`}
      onClick={handleToggleClick}
     >
      РАСКРЫТЬ СПИСОК
     </button>
    )}
    {!isCollapsed && documents.length > 4 && (
     <>
      {documents.slice(visibleFilesCount).map((file) => (
       <FileItem key={file.id} file={file} />
      ))}
     </>
    )}
   </div>
  </>
 );
}
