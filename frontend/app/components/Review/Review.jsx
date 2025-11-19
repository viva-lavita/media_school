'use client';

import { useEffect } from 'react';
import styles from './ReviewModal.module.css';
import { montserrat } from '@/lib/fonts';

export default function ReviewModal({ review, onClose, formatAge }) {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  if (!review) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        <button className={styles.close} onClick={onClose} aria-label="Закрыть">
          ✕
        </button>

        <div className={styles.content}>
          <img
            src={review.image}
            alt={`аватар ${review.full_name}`}
            className={styles.avatar}
          />

          <h3 className={`${montserrat.className} text-lg font-semibold`}>
            {review.full_name}, {formatAge(review.age)}
          </h3>
        </div>
        <p className={`${montserrat.className} text-base mt-4 leading-[140%]`}>
          {review.review}
        </p>

      </div>
    </div>
  );
}
