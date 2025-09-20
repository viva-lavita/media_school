'use client';
import { comfortaa } from '@/lib/fonts';
import styles from './layoutCatalog.module.css';
import { useEffect, useState } from 'react';
import DescriptionSection from '../about/components/DescriptionSection';
import TeachersList from '../about/components/TeachersList';
import DocumentsSection from './components/DocumentsSection';
import ListCard from './components/ListCard';

export default function layoutPage() {

 //const titleListCatalog = 'Наставники';
 const initialActiveTab = 'Интервьюирование';
 const titleCardSectionVideo = 'Видео-материалы';
 const [activeTab, setActiveTab] = useState(initialActiveTab);

 const [categories, setCategories] = useState([]);
 const [activeCategory, setActiveCategory] = useState({});
 //const [description, setDescription] = useState('');
 const [titleListCatalog, setTitleListCatalog] = useState('');

 useEffect(() => {
  fetch('/api/categories')
   .then((response) => response.json())
   .then((data) => {
    setCategories(data.results);
    setActiveCategory(data.results[0]);
   })
   .catch((error) => console.error('Error fetching news:', error));

   fetch('/api/categories')
   .then((response) => response.json())
   .then((data) => {
    setCategories(data.results);
    setActiveCategory(data.results[0]);
   })
   .catch((error) => console.error('Error fetching news:', error));
 }, []);
 console.log(activeCategory);
 return (
  <div className={styles.wrap}>
   <h3 className={`${comfortaa.className} ${styles.title}`}>
    Каталог материалов
   </h3>
   <div className={styles.tabs}>
    {categories.map((tabItem) => (
     <button
      key={tabItem.name}
      onClick={() => setActiveCategory(tabItem)} // Меняем активную категорию
      className={`${styles.tabButton} ${
       activeCategory?.name === tabItem.name && styles.active
      }`}
     >
      {tabItem.name}
     </button>
    ))}
   </div>
   <main className={styles.mainCatalog}>
    {activeCategory && ( // Только если активная категория установлена
     <img
      className={styles.imgPrevue}
      src={activeCategory.image} // Используем картинку активного элемента
      alt={`Image of ${activeCategory.name}`}
     />
    )}
    <section className={styles.description}>
     <DescriptionSection title={activeCategory.title}  description={activeCategory.description} />
     <div className={styles.founders}>
      {<TeachersList titleList={titleListCatalog} teachers={TEACHERS_DATA} />}
     </div>
    </section>
    <DocumentsSection documents={files} />
    <section className={styles.mediaSection}>
     <ListCard
      titleCardList={titleCardSectionVideo}
      documents={documentSection}
     />
    </section>
   </main>
  </div>
 );
}
