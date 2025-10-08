import { useState, useRef } from 'react';
import { montserrat } from '@/lib/fonts';
import styles from './Card.module.css';

export default function Card({ imageUrl, videoUrl, title, date, categoryName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgSrc, setImgSrc] = useState(imageUrl);
  const videoRef = useRef(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setIsPlaying(true);
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
    </div>
  );
};
