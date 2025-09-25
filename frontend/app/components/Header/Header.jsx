'use client';
import Link from "next/link";
import styles from "./Header.module.css"
import { montserrat } from '@/lib/fonts'

export default function Header() {

  return (
      <header className={`${montserrat.className} ${styles.header} text-base flex items-center justify-between mx-auto`}>
        <img src="/images/logo.svg" alt="logo" className={styles.logo}/>
        <nav className={`${styles.headerList} flex items-center`}>
          <ul className="flex gap-7 h-5">
            <li><Link href="/about">О проекте</Link></li>
            <li><Link href="/news">Новости</Link></li>
            <li><Link href="/catalog">Каталог материалов</Link></li>
            <li><Link href="/qa">Вопрос-ответ</Link></li>
            <li><Link href="/contacts">Контакты</Link></li>
          </ul>
        </nav>
        <div className={`${styles.headerActions} flex items-center`}>
          <div className={`${styles.headerSocialMedia} flex items-center gap-10`}>
            <button aria-label={'Поиск'}>
              <img src="/header-images/search.svg" alt="" className="size-9"/>
            </button>
            <div className="flex gap-5">
              <a href="#" aria-label="ВКонтакте">
                <img
                  src="/header-images/vk-button.png"
                  alt=""
                  tabIndex={0}
                  className="size-11.5" />
              </a>

              <a href="#" aria-label="Одноклассники">
                <img
                  src="/header-images/ok-button.png"
                  alt=""
                  tabIndex={0}
                  className="size-11.5" />
              </a>
            </div>
          </div>
          <button className={`${montserrat.className} ${styles.btn} font-medium text-base leading-[100%] flex items-center`}>
            <Link href={'/account'}>Личный кабинет</Link>
          </button>
          <button aria-label={'Меню'} className={`${styles.headerMenu}`}>
            <img src="/header-images/menu.svg" alt=""/>
          </button>
        </div>
      </header>
  );
}
