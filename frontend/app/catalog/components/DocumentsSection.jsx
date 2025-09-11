'use client';
import { comfortaa, montserrat } from '@/lib/fonts';
import styles from './DocumentsSection.module.css';
import FileItem from './FileItem';
import { useState } from 'react';

export default function DocumentsSection({ documents }) {
 const visibleFilesCount = Math.min(documents.length, 4);
 const [isCollapsed, setIsCollapsed] = useState(true);

 const handleToggleClick = () => {
  setIsCollapsed(!isCollapsed);
 };

 return (
  <section className={styles.sectionDocuments}>
   <div className={styles.info}>
    <h2 className={`${comfortaa.className} ${styles.title}`}>
     Документы для интервью
    </h2>
    <p className={`${montserrat.className} ${styles.count}`}>
     {documents.length} документов
    </p>
   </div>
   <div className={styles.documentBox}>
    {documents.slice(0, visibleFilesCount).map((file) => (
     <FileItem key={file.id} file={file} />
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
  </section>
 );
}
