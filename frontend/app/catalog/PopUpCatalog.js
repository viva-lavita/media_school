'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { montserrat } from '@/lib/fonts';
import styles from './components/Card.module.css';
import newsStyles from '../news/Onenews.module.css';
import Image from 'next/image';

const PopUpCatalogContext = createContext();

export function PopUpCatalogProvider({ children }) {
 const [isPopUpOpen, setIsPopUpOpen] = useState(false);
 const [cardData, setCardData] = useState(null);

 return (
  <PopUpCatalogContext.Provider
   value={{ isPopUpOpen, setIsPopUpOpen, cardData, setCardData }}
  >
   {children}
  </PopUpCatalogContext.Provider>
 );
}

export function usePopUpCatalog() {
 return useContext(PopUpCatalogContext);
}

export default function PopUpCatalog() {
 const { isPopUpOpen, setIsPopUpOpen, cardData } = usePopUpCatalog();
 const [currentImageIndex, setCurrentImageIndex] = useState(0);
 const [allImages, setAllImages] = useState([]);

 useEffect(() => {
  if (cardData && cardData.images) {
   setAllImages(cardData.images.map((img) => img.image || img));
   setCurrentImageIndex(0);
  }
 }, [cardData]);

 if (!isPopUpOpen || !cardData) return null;

 const handlePrevImage = () => {
  setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
 };

 const handleNextImage = () => {
  setCurrentImageIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
 };

 return (
  <div
   onClick={() => setIsPopUpOpen(false)}
   className={styles.popUpBackgroundCatalog}
  >
   <div
    className={`${styles.popUpContentCatalog} bg-white p-6 w-full h-auto`}
    onClick={(e) => e.stopPropagation()}
   >
    <button
     className={`${styles.closeButtonModal} text-gray-500 hover:text-gray-700 text-xl`}
     onClick={() => setIsPopUpOpen(false)}
     aria-label="Закрыть"
    >
     ✕
    </button>
    <div className={`${styles.popUpWrapCatalog}`}>
     <div className={styles.cardModal}>
      <h2 className={`${montserrat.className} ${styles.masterClass}`}>
       {cardData.categoryName}
      </h2>
      <div className={styles.infoModal}>
       <h3 className={`${montserrat.className} ${styles.titleCardModal}`}>
        {cardData.title}
       </h3>
       <p
        className={`${montserrat.className} ${styles.dateCard}`}
        style={{ display: 'flex', justifyContent: 'space-between' }}
       >
        <span>{cardData.date}</span>
       </p>
      </div>
      <div className={styles.infoModalCount}>
       <h4 className={`${montserrat.className} ${styles.galleryTitle}`}>
        Фотогалерея
       </h4>
       <p
        className={`${montserrat.className} ${styles.dateCard}`}
        style={{ display: 'flex', justifyContent: 'space-between' }}
       >
        {cardData.photoCount !== undefined && (
         <span className={styles.photoCount}>{cardData.photoCount} фото</span>
        )}
       </p>
      </div>

      {cardData.images && cardData.images.length > 0 && (
       <>
        <div className="mb-4"></div>

        <div className="relative mb-4">
         <img
          src={allImages[currentImageIndex]}
          alt={`Фото ${currentImageIndex + 1}`}
          className="w-full h-auto"
          style={{ maxHeight: '600px', objectFit: 'cover' }}
         />
         {allImages.length > 1 && (
          <div className={styles.imageNavigation}>
           <button
            onClick={handlePrevImage}
            className={styles.navButton}
           >
            ‹
           </button>
           <button
            onClick={handleNextImage}
            className={styles.navButton}
           >
            ›
           </button>
          </div>
         )}
        </div>

        <div className={`${styles.thumbnailsGrid}`}>
         {allImages.map((image, index) => (
          <img
           key={index}
           src={image}
           alt={`Миниатюра ${index + 1}`}
           className={`cursor-pointer border-2 ${
            index === currentImageIndex ? 'border-blue-500' : 'border-gray-300'
           }`}
           style={{ width: '244px', height: '164px', objectFit: 'cover' }}
           onClick={() => setCurrentImageIndex(index)}
          />
         ))}
        </div>
       </>
      )}
     </div>
    </div>
   </div>
  </div>
 );
}
