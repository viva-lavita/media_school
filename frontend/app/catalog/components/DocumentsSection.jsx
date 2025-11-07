'use client';
import { comfortaa, montserrat } from '@/lib/fonts';
import styles from './DocumentsSection.module.css';
import FileItem from './FileItem';
import { useState, useEffect } from 'react';
import stylesDocument from './DocumentsSection.module.css';
import formatDocument from '@/app/utils/formatDocument';
import Pagination from '../../news/components/Pagination';

export default function DocumentsSection({ documents: initialDocuments, categoryId }) {
 const [documents, setDocuments] = useState(initialDocuments?.results || []);
 const [currentPage, setCurrentPage] = useState(1);
 const [totalCount, setTotalCount] = useState(initialDocuments?.count || 0);
 const [nextPage, setNextPage] = useState(initialDocuments?.next || null);
 const [previousPage, setPreviousPage] = useState(initialDocuments?.previous || null);
 const [isLoading, setIsLoading] = useState(false);
 const [isCollapsed, setIsCollapsed] = useState(true);
 const API_URL = process.env.NEXT_PUBLIC_API_URL;

 useEffect(() => {
  if (initialDocuments) {
   setDocuments(initialDocuments.results || []);
   setTotalCount(initialDocuments.count || 0);
   setNextPage(initialDocuments.next || null);
   setPreviousPage(initialDocuments.previous || null);
  }
 }, [initialDocuments]);

 const fetchDocuments = async (page) => {
  setIsLoading(true);
  try {
   const response = await fetch(`${API_URL}/content/documents/${categoryId}?page=${page}&limit=10`);
   const data = await response.json();
   setDocuments(data.results || []);
   setTotalCount(data.count || 0);
   setNextPage(data.next || null);
   setPreviousPage(data.previous || null);
   setCurrentPage(page);
   if (page > 1) {
    setIsCollapsed(false);
   } else {
    setIsCollapsed(true);
   }
  } catch (error) {
   console.error('Error fetching documents:', error);
   setDocuments([]);
   setTotalCount(0);
   setNextPage(null);
   setPreviousPage(null);
  } finally {
   setIsLoading(false);
  }
 };

 const handlePageChange = (page) => {
  fetchDocuments(page);
 };

 const handleNextPage = () => {
  if (nextPage) {
   fetchDocuments(currentPage + 1);
  }
 };

 const handlePreviousPage = () => {
  if (previousPage) {
   fetchDocuments(currentPage - 1);
  }
 };

 const handleToggleClick = () => {
  setIsCollapsed(!isCollapsed);
 };

 const totalPages = Math.ceil(totalCount / 10);
 const visibleFilesCount = currentPage === 1 ? (isCollapsed ? 5 : 10) : 10;

 if (!Array.isArray(documents)) {
  console.error('Документы отсутствуют или имеют неверный формат.');
  return null;
 }

 return (
  <section className={styles.sectionDocuments}>
   <div className={styles.info}>
    <h2 className={`${comfortaa.className} ${styles.title}`}>
     Документы для интервью
    </h2>
    <p className={`${montserrat.className} ${styles.count}`}>
     {formatDocument(totalCount)}
    </p>
   </div>
   <div className={styles.documentBox}>
    {documents.slice(0, visibleFilesCount).map((file) => (
     <FileItem key={file.id} file={file} />
    ))}
   </div>
   {totalCount > 5 && (
    <>
     {currentPage === 1 && documents.length > 5 && (
      <button
       className={`${montserrat.className} ${stylesDocument.toggleButton}`}
       onClick={handleToggleClick}
      >
       {isCollapsed ? 'РАСКРЫТЬ СПИСОК' : 'СВЕРНУТЬ СПИСОК'}
      </button>
     )}
     {!isCollapsed && totalCount > 10 && (
      <Pagination
       totalPages={totalPages}
       currentPage={currentPage}
       setCurrentPage={handlePageChange}
      />
     )}
    </>
   )}
  </section>
 );
}
