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
   <div class="flex flex-col gap-2 relative"
    onClick={handleCardClick}
    style={{ cursor: photoCount !== undefined ? 'pointer' : 'default' }}
   >
    <figure class="flex flex-col gap-3">
     <div class="w-full h-[300px] overflow-hidden">
      {isVideo ? (
       <iframe
        class="w-full h-full object-cover object-center"
        src={videoUrl}
        allowFullScreen
        title={title}
       />
      ) : (
       <img
        class="w-full h-full object-cover object-center"
        src={images && images.length > 0 ? images[0].image : imgSrc}
        alt={title}
        onError={handleImgError}
       />
      )}
     </div>
     <figcaption className={`${montserrat.className} ${styles.category}`}>
      {categoryName.toUpperCase()}
     </figcaption>
    </figure>
    <div class="flex flex-col gap-2">
     <p className={`${montserrat.className} ${styles.title}`}>{title}</p>
    </div>
    <p
     className={`${montserrat.className} ${styles.date}`}
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
