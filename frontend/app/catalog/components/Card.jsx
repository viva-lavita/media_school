import { useState, useRef } from 'react';
import { montserrat } from '@/lib/fonts';
import styles from './Card.module.css';

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
 const [imgSrc, setImgSrc] = useState(imageUrl);
 const [showPhotoModal, setShowPhotoModal] = useState(false);
 const [currentImageIndex, setCurrentImageIndex] = useState(0);

 const handleCardClick = () => {
  if (photoCount !== undefined) {
   setShowPhotoModal(true);
  }
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
       src={imgSrc}
       alt={title}
       onError={handleImgError}
      />
     )}
    </div>
    <h2 className={`${montserrat.className} ${styles.masterClass}`}>
     {categoryName}
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
   {showPhotoModal && (
    <div className={styles.modal} onClick={() => setShowPhotoModal(false)}>
     <div
      className={styles.modalContent}
      onClick={(e) => e.stopPropagation()}
      style={{
       width: '90%',
       height: '90%',
       maxWidth: '1200px',
       maxHeight: '800px',
      }}
     >
      <button
       className={styles.closeButton}
       onClick={() => setShowPhotoModal(false)}
       style={{ fontSize: '32px', padding: '10px 20px' }}
      >
       ×
      </button>
      <div
       style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
       }}
      >
       <button
        onClick={() =>
         setCurrentImageIndex((prev) =>
          prev > 0 ? prev - 1 : images.length - 1
         )
        }
        style={{ marginRight: '20px', fontSize: '32px', padding: '10px 20px' }}
       >
        ‹
       </button>
       <img
        src={images[currentImageIndex].image}
        alt={`Photo ${currentImageIndex + 1}`}
        style={{
         maxWidth: '900px',
         maxHeight: '600px',
         objectFit: 'contain',
         cursor: 'pointer',
        }}
        onClick={() =>
         setCurrentImageIndex((prev) =>
          prev < images.length - 1 ? prev + 1 : 0
         )
        }
       />
       <button
        onClick={() =>
         setCurrentImageIndex((prev) =>
          prev < images.length - 1 ? prev + 1 : 0
         )
        }
        style={{ marginLeft: '20px', fontSize: '32px', padding: '10px 20px' }}
       >
        ›
       </button>
      </div>
     </div>
    </div>
   )}
  </>
 );
}
