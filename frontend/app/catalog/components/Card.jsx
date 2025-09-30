import { useState } from 'react';
import { montserrat } from '@/lib/fonts';
import styles from './Card.module.css';

export default function Card({ imageUrl, videoUrl, title, date }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgSrc, setImgSrc] = useState(imageUrl);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleImgError = () => {
    setImgSrc('/images/avatar.png'); // Default image
  };

  return (
    <div className={styles.card}>
      <div className={styles.mediaContainer}>
        <video
          className={styles.media}
          src={videoUrl}
          poster={imgSrc}
          controls={isPlaying}
          autoPlay={isPlaying}
        />
        {!isPlaying && videoUrl && (
          <button className={styles.playButton} onClick={handlePlayClick}>
            ▶
          </button>
        )}
      </div>
      <h2 className={`${montserrat.className} ${styles.masterClass}`}>МАСТЕР-КЛАСС</h2>
      <h3 className={`${montserrat.className} ${styles.titleCard}`}>{title}</h3>
      <p className={`${montserrat.className} ${styles.dateCard}`}>{date}</p>
    </div>
  );
};
