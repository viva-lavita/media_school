'use client';

import { useState } from 'react';
import { montserrat } from '@/lib/fonts';
import styles from './Card.module.css';
import { usePopUpCatalog } from '../PopUpCatalog';

export default function Card({
 imageUrl,
 videoUrl,
 title,
 date,
 categoryName,
 photoCount,
 images,
 isVideo = true,
}) {
 const { setIsPopUpOpen, setCardData } = usePopUpCatalog();

 const [imgSrc, setImgSrc] = useState(imageUrl);

 const handleCardClick = () => {
  setCardData({
   imageUrl,
   videoUrl,
   title,
   date,
   categoryName,
   photoCount,
   images,
   isVideo,
  });
  setIsPopUpOpen(true);
 };

 const handleImgError = () => {
  setImgSrc('/images/avatar.png');
 };

 return (
  <>
   <div
    className={styles.card}
    onClick={handleCardClick}
    style={{ cursor: photoCount !== undefined ? 'pointer' : 'default' }}
   >
    <div className={styles.mediaContainer}>
     {isVideo ? (
      <iframe
       className={styles.media}
       src={videoUrl}
       allowFullScreen
       title={title}
      />
     ) : (
      <img
       className={styles.media}
       src={images && images.length > 0 ? images[0].image : imgSrc}
       alt={title}
       onError={handleImgError}
      />
     )}
    </div>
    <h2 className={`${montserrat.className} ${styles.masterClass}`}>
     {categoryName.toUpperCase()}
    </h2>
    <h3 className={`${montserrat.className} ${styles.titleCard}`}>{title}</h3>
    <p
     className={`${montserrat.className} ${styles.dateCard}`}
     style={{ display: 'flex', justifyContent: 'space-between' }}
    >
     <span>{date}</span>
     {photoCount !== undefined && (
      <span className={styles.photoCount}>{photoCount} фото</span>
     )}
    </p>
   </div>
  </>
 );
}
