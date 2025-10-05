import { useState, useRef } from 'react';
import { montserrat } from '@/lib/fonts';
import styles from './Card.module.css';

export default function Card({ imageUrl, videoUrl, title, date, categoryName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgSrc, setImgSrc] = useState(imageUrl);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    setShowModal(true);
  };

  const handleImgError = () => {
    setImgSrc('/images/avatar.png'); // Default image
  };

  return (
    <div className={styles.card}>
      <div className={styles.mediaContainer}>
        <video
          ref={videoRef}
          className={styles.media}
          src={videoUrl}
          poster={imgSrc}
          controls={isPlaying}
          autoPlay={isPlaying}
          muted
          crossOrigin="anonymous"
          preload="metadata"
        />
        {!isPlaying && videoUrl && (
          <button className={styles.playButton} onClick={handlePlayClick}>
            ▶
          </button>
        )}
      </div>
      <h2 className={`${montserrat.className} ${styles.masterClass}`}>{categoryName}</h2>
      <h3 className={`${montserrat.className} ${styles.titleCard}`}>{title}</h3>
      <p className={`${montserrat.className} ${styles.dateCard}`}>{date}</p>
      {showModal && (
        <div className={styles.modal} onClick={() => setShowModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowModal(false)}>×</button>
            <video
              src={videoUrl}
              controls
              autoPlay
              className={styles.modalVideo}
            />
          </div>
        </div>
      )}
    </div>
  );
};
