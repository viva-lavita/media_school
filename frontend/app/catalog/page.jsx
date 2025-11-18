'use client';
import { comfortaa } from '@/lib/fonts';
import styles from './layoutCatalog.module.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import TeachersList from '../about/components/TeachersList';
import handleFetch from '../utils/fetchErrorHandle';
import DocumentsSection from './components/DocumentsSection';
import SectionListCard from './components/ListCard';
import { PopUpCatalogProvider } from './PopUpCatalog';
import PopUpCatalog from './PopUpCatalog';
import CategoryDropdown from './components/CategoryDropdown';
import DescriptionSectionCatalog from './components/DescriptionSectionCatalog';

export default function LayoutPage() {
 const titleExpertList = 'Наставники';
 const [categories, setCategories] = useState([]);
 const [activeCategory, setActiveCategory] = useState({});
 const [expertsData, setExpertsData] = useState([]);
 const [documentsData, setDocumentsData] = useState([]);
 const [videosData, setVideosData] = useState([]);
 const [photosData, setPhotosData] = useState([]);
 const searchParams = useSearchParams();
 const API_URL = process.env.NEXT_PUBLIC_API_URL;

 useEffect(() => {
  handleFetch(`${API_URL}/content/catalogs/`)
   .then((data) => {
    setCategories(data.results || []);
    if (data.results && data.results.length > 0) {
     setActiveCategory(data.results[0]);
    }
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
     const reverseMap = {
      blogging: 'Блогинг',
      videotaping: 'Видеосъемка',
      'videotaping-uas': 'Видеосъемка с помощью БАС',
      'video-editing': 'Монтаж видео',
      photographing: 'Фотографирование',
      'photo-processing': 'Обработка фото',
      storytelling: 'Сторителлинг',
      interviewing: 'Интервьюирование',
      longread: 'Лонгрид',
     };
     const categoryName = reverseMap[categoryParam];
     if (categoryName) {
      const found = data.results.find((cat) => cat.name === categoryName);
      if (found) setActiveCategory(found);
     }
    }
   })
   .catch(console.error);
 }, [searchParams.toString()]);
 useEffect(() => {
  if (activeCategory.id) {
   handleFetch(`${API_URL}/content/experts/${activeCategory.id}`)
    .then((data) => {
     if (data && data.results) {
      setExpertsData(
       data.results
        .filter((expert) => expert && expert.catalog_id == activeCategory.id)
        .map((expert) => ({
         ...expert,
         photo: expert.image,
         name: expert.full_name,
        }))
      );
     } else {
      setExpertsData([]);
     }
    })
    .catch(console.error);
  }
 }, [activeCategory]);

 useEffect(() => {
  if (activeCategory.id) {
   handleFetch(
    `${API_URL}/content/documents/?catalog=${activeCategory.id}&page=1&limit=10`
   )
    .then((data) => {
     setDocumentsData(data);
    })
    .catch(console.error);
  }
 }, [activeCategory]);
 console.log(documentsData);
 useEffect(() => {
  if (activeCategory.id) {
   handleFetch(`${API_URL}/content/videos/?catalog=${activeCategory.id}`)
    .then((data) => {
     setVideosData(data.results);
    })
    .catch(console.error);
  }
 }, [activeCategory]);

 useEffect(() => {
  if (activeCategory.id) {
   handleFetch(`${API_URL}/content/photos/?catalog=${activeCategory.id}`)
    .then((data) => {
     setPhotosData(
      data.results.map((item) => ({
       ...item,
       imageUrl: item.images[0]?.image || '',
       photoCount: item.images.length,
       isVideo: false,
      }))
     );
    })
    .catch(console.error);
  }
 }, [activeCategory]);

 console.log(videosData);
 return (
  <PopUpCatalogProvider>
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
    <div className={styles.dropdown}>
     <CategoryDropdown
      categories={categories}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
     />
    </div>
    <main className={styles.mainCatalog}>
     {activeCategory && (
      <>
       <div className={styles.imgWrapper}>
        <img
         className={styles.imgPreview}
         src={activeCategory.image}
         alt={`Картинка ${activeCategory.name}`}
        />
       </div>

       <section className={styles.description}>
        <div className={styles.descriptionText}>
         <DescriptionSectionCatalog
          title={activeCategory.title}
          description={activeCategory.description}
         />
        </div>

        {expertsData && expertsData.length > 0 && (
         <div className={styles.descriptionExperts}>
          <TeachersList titleList={titleExpertList} teachers={expertsData} />
         </div>
        )}
       </section>
      </>
     )}
     {documentsData &&
      documentsData.results &&
      documentsData.results.length > 0 && (
       <DocumentsSection
        documents={documentsData}
        categoryId={activeCategory.id}
       />
      )}
     {videosData && videosData.length > 0 && (
      <SectionListCard title={'Видео-материалы'} documents={videosData} />
     )}
     {photosData && photosData.length > 0 && (
      <SectionListCard title={'Фотогалерея'} documents={photosData} />
     )}
    </main>
    <PopUpCatalog />
   </div>
  </PopUpCatalogProvider>
 );
}
