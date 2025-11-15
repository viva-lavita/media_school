"use client"

import styles from './PopUpAuth.module.css'
import { usePopUpAuth } from "@/app/context/PopUpContextAuth";
import { montserrat } from "@/lib/fonts";

export default function PopUpAuth() {
  const { isPopUpOpen, setIsPopUpOpen, title, subtitle } = usePopUpAuth();

  if (!isPopUpOpen) return null;

  return (
    <div
      onClick={() => setIsPopUpOpen(false)}
      className={styles.popUpBackground}
    >
      <div
        className={`${styles.popUpWrapper} relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={`absolute cursor-pointer top-1 right-1`}
          onClick={() => setIsPopUpOpen(false)}
          aria-label="Закрыть"
        >
          <img src="/images/cross-pop-up.svg" alt=""/>
        </button>

        <div className={`text-center flex flex-col gap-5`}>
          <h2 className="text-lg-popup">{title}</h2>
          {subtitle && <p className="text-sm-popup">{subtitle}</p>}
          <div className={styles.popupLine}></div>
        </div>
      </div>
    </div>
  )
}
