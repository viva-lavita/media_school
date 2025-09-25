import { montserrat } from '@/lib/fonts';
import styles from './Card.module.css';

export default function Card({ imageUrl, videoUrl, title, date }) {
    
  return (
    <div className={styles.card}>
      {videoUrl ? (
        <video className={styles.media} src={videoUrl} controls></video>
      ) : (
        <img  className={styles.media} src={imageUrl} alt="Preview"/>
      )}
      <h2 className={`${montserrat.className} ${styles.masterClass}`}>МАСТЕР-КЛАСС</h2>
      <h3 className={`${montserrat.className} ${styles.titleCard}`}>{title}</h3>
      <p className={`${montserrat.className} ${styles.dateCard}`}>{date}</p>
    </div>
  );
};