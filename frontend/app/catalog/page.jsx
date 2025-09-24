'use client';
import { comfortaa } from '@/lib/fonts';
import styles from './layoutCatalog.module.css';
import { useEffect, useState } from 'react';
import DescriptionSection from '../about/components/DescriptionSection';
import TeachersList from '../about/components/TeachersList';
import handleFetch from '../utils/fetchErrorHandle';
//import DocumentsSection from './components/DocumentsSection';
//import ListCard from './components/ListCard';

export default function LayoutPage() {
 const initialActiveTab = 'Интервьюирование';
 const [categories, setCategories] = useState([]);
 const [activeCategory, setActiveCategory] = useState({});
 const [expertsData, setExpertsData] = useState([]);

 useEffect(() => {
  handleFetch('/api/categories')
   .then((data) => {
    setCategories(data.results);
    setActiveCategory(data.results[0]);
   })
   .catch(console.error);
 }, []);

useEffect(() => {
  if (activeCategory.id) {
   handleFetch(`/api/expertsCategory/${activeCategory.id}`)
    .then((data) => {
     setExpertsData(data.results);
    })
    .catch(console.error);
  }
 }, [activeCategory]);

 console.log(activeCategory.id);
 return (
  <div className={styles.wrap}>
   <h3 className={`${comfortaa.className} ${styles.title}`}>
    Каталог материалов
   </h3>

   <div className={styles.tabs}>
    {categories.map((tabItem) => (
     <button
      key={tabItem.name}
      onClick={() => setActiveCategory(tabItem)}
      className={`${styles.tabButton} ${
       activeCategory?.name === tabItem.name ? styles.active : ''
      }`}
     >
      {tabItem.name}
     </button>
    ))}
   </div>
   <main className={styles.mainCatalog}>
    {activeCategory && (
     <>
      <img
       className={styles.imgPreview}
       src={activeCategory.image}
       alt={`Картинка ${activeCategory.name}`}
      />

      <section className={styles.description}>
       <DescriptionSection
        title={activeCategory.title}
        description={activeCategory.description}
       />

       <div className={styles.founders}>
        <TeachersList titleList="Эксперты" teachers={expertsData} />
       </div>
      </section>
     </>
    )}
   </main>
  </div>
 );
}
