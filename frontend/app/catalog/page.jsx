'use client';
import { comfortaa } from '@/lib/fonts';
import styles from './layoutCatalog.module.css';
import { useEffect, useState } from 'react';
import DescriptionSection from '../about/components/DescriptionSection';
import TeachersList from '../about/components/TeachersList';
import handleFetch from '../utils/fetchErrorHandle';
import DocumentsSection from './components/DocumentsSection';
import SectionListCard from './components/ListCard';

export default function LayoutPage() {
 const titleExpertList = 'Наставники';
 const [categories, setCategories] = useState([]);
 const [activeCategory, setActiveCategory] = useState({});
 const [expertsData, setExpertsData] = useState([]);
 const [documentsData, setDocumentsData] = useState([]);

 const documentSection = [
  {
   id: 1,
   imageUrl: '/about-images/Ivanova.png',
   title: 'Завлеки собеседника — 3 простых правила от «Осторожно Новости»',
   date: '10 апреля 2025',
  },
    {
   imageUrl: '/about-images/Ivanova.png',
   title: 'Завлеки собеседника — 3 простых правила от «Осторожно Новости»',
   date: '10 апреля 2025',
  },
    {
   imageUrl: '/about-images/Ivanova.png',
   title: 'Завлеки собеседника — 3 простых правила от «Осторожно Новости»',
   date: '10 апреля 2025',
  },
  {
   imageUrl: '/about-images/Ivanova.png',
   title: 'Завлеки собеседника — 3 простых правила от «Осторожно Новости»',
   date: '10 апреля 2025',
  },
  {
   imageUrl: '/about-images/Ivanova.png',
   title: 'Завлеки собеседника — 3 простых правила от «Осторожно Новости»',
   date: '10 апреля 2025',
  },
 ];
 const documentSectionPhoto = [
  {
   imageUrl: '/about-images/Ivanova.png',
   title: 'Завлеки собеседника — 3 простых правила от «Осторожно Новости»',
   date: '10 апреля 2025',
  },
  {
   id: 2,
   imageUrl: '/about-images/Ivanova.png',
   title: 'Завлеки собеседника — 3 простых правила от «Осторожно Новости»',
   date: '10 апреля 2025',
  },
  {
   id: 3,
   imageUrl: '/about-images/Ivanova.png',
   title: 'Завлеки собеседника — 3 простых правила от «Осторожно Новости»',
   date: '10 апреля 2025',
  },
 ];

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
    handleFetch(`/api/experts/${activeCategory.id}`)
      .then((data) => {
        setExpertsData(data.results.filter(expert => expert && expert.catalog_id == activeCategory.id).map(expert => ({
          ...expert,
          photo: expert.image,
          name: expert.full_name
        })));
      })
      .catch(console.error);
  }
}, [activeCategory]);

useEffect(() => {
  if (activeCategory.id) {
    handleFetch(`/api/documents/${activeCategory.id}`)
      .then((data) => {
        setDocumentsData(data.results.map(doc => ({ ...doc, createdAt: new Date(doc.createdAt) })));
      })
      .catch(console.error);
  }
}, [activeCategory]);

 console.log(expertsData);
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
        <TeachersList titleList={titleExpertList} teachers={expertsData} />
       </div>
      </section>
     </>
    )}
    <DocumentsSection documents={documentsData} />
    <SectionListCard title={'Видео-материалы'} documents={documentSection} />
    <SectionListCard title={'Фотогалерея'} documents={documentSectionPhoto} />
   </main>
  </div>
 );
}
