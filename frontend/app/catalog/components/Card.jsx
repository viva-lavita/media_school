"use client"

import { montserrat } from '@/lib/fonts';
import styles from './Card.module.css';
import { usePopUpCatalog } from "../PopUpCatalog";

export default function Card({ imageUrl, videoUrl, title, date, id }) {
  const { setIsPopUpOpen, setCardData } = usePopUpCatalog();

  const handleClick = () => {
    setCardData({ imageUrl, videoUrl, title, date, id });
    setIsPopUpOpen(true);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
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
