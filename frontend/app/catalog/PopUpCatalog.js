"use client"

import { createContext, useContext, useState } from 'react';
import { montserrat } from '@/lib/fonts';
import styles from './components/Card.module.css';
import CommentForm from '../news/[id]/components/CommentForm';
import newsStyles from '../news/Onenews.module.css';

const PopUpCatalogContext = createContext();

export function PopUpCatalogProvider({ children }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [cardData, setCardData] = useState(null);

  return (
    <PopUpCatalogContext.Provider value={{ isPopUpOpen, setIsPopUpOpen, cardData, setCardData }}>
      {children}
    </PopUpCatalogContext.Provider>
  )
}

export function usePopUpCatalog() {
  return useContext(PopUpCatalogContext);
}

export default function PopUpCatalog() {
  const { isPopUpOpen, setIsPopUpOpen, cardData } = usePopUpCatalog();

  if (!isPopUpOpen || !cardData) return null;

  return (
    <div
      onClick={() => setIsPopUpOpen(false)}
      className={` ${styles.popUpBackgroundCatalog} fixed inset-0 flex items-center justify-center z-50`}
    >
      <div
        className="bg-white p-6 mx-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
          <button className="text-gray-500 hover:text-gray-700 text-xl"
            onClick={() => setIsPopUpOpen(false)}
            aria-label="Закрыть"
          >
            ✕
          </button>
        </div>

        <div className={styles.card}>
          {/* {cardData.videoUrl ? (
            <video className={styles.media} src={cardData.videoUrl} controls></video>
          ) : (
            <img className={styles.media} src={cardData.imageUrl} alt="Preview"/>
          )} */}
          <h2 className={`${montserrat.className} ${styles.masterClass}`}>МАСТЕР-КЛАСС</h2>
          <h3 className={`${montserrat.className} ${styles.titleCard}`}>{cardData.title}</h3>
          <p className={`${montserrat.className} ${styles.dateCard}`}>{cardData.date}</p>
        </div>

        <CommentForm itemId={cardData.id} itemType="catalog" />
      </div>
    </div>
  )
}