'use client';
import { Montserrat } from 'next/font/google'
import Link from "next/link";
import styles from "./Header.module.css"
import { useState, useEffect } from 'react';
import { montserrat } from '@/lib/fonts'

export default function Header() {
  const [pageWidth, setPageWidth] = useState(360);

  useEffect(() => {
    const handleResize = () => setPageWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <header className={`${montserrat.className} ${styles.header} text-base flex items-center justify-between mx-auto`}>
        <img src="/images/logo.svg" alt="logo" className={styles.logo}/>
        <nav className={`${pageWidth <= 1024 ? 'hidden' : ''} flex items-center`}>
          <ul className="flex gap-7 h-5">
            <li><Link href="/about">О проекте</Link></li>
            <li><Link href="/news">Новости</Link></li>
            <li><Link href="/catalog">Каталог материалов</Link></li>
            <li><Link href="/qa">Вопрос-ответ</Link></li>
            <li><Link href="/contacts">Контакты</Link></li>
          </ul>
        </nav>
        <div className={`flex items-center ${pageWidth > 360 ? 'gap-10' : 'gap-7'}`}>
          <div className={`${pageWidth > 360 ? 'notHidden' : 'hidden'} flex items-center gap-10`}>
            <img src="/header-images/search.svg" alt="search" className="size-9"/>
            <div className="flex gap-5">
              <img src="/header-images/vk-button.png" alt="Вконтакте"  className="size-11.5"/>
              <img src="/header-images/ok-button.png" alt="Одноклассники"  className="size-11.5"/>
            </div>
          </div>
          <button className={`${styles.btn} flex items-center h-9 py-2 px-4`}>
            Личный кабинет
          </button>
          <img src="/header-images/menu.svg" alt="menu"/>
        </div>
      </header>
  );
}
