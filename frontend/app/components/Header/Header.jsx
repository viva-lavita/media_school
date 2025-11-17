'use client';
import Link from "next/link";
import styles from "./Header.module.css";
import { montserrat } from "@/lib/fonts";
import { useAuth } from "@/app/context/AuthContext";
import BurgerMenu from "@/app/components/BurgerMenu/BurgerMenu";
import {useState} from "react";

export default function Header() {
  const { user, loading } = useAuth();
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [searchComponentIsOpen, setSearchComponentIsOpen] = useState(false);

  return (
    <header
      className={`${montserrat.className} ${styles.header} text-base flex items-center justify-between mx-auto`}
    >
      <Link href="/">
        <img
            src="/images/logo.svg"
            alt="logo"
            className={`${styles.logo} cursor-pointer`} />
      </Link>

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
          <button onClick={()=> setSearchComponentIsOpen(true)} className={`cursor-pointer`} aria-label={'Поиск'}>
            <img src="/header-images/search.svg" alt="" className="size-9" />
          </button>
          <div className="flex gap-5">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://vk.com/perspectivatsk"
              aria-label="ВКонтакте"
            >
              <img
                src="/header-images/vk-button.png"
                alt=""
                tabIndex={0}
                className="size-11.5"
              />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://ok.ru/group/70000001092892"
              aria-label="Одноклассники"
            >
              <img
                src="/header-images/ok-button.png"
                alt=""
                tabIndex={0}
                className="size-11.5"
              />
            </a>
          </div>
        </div>

        {loading ? null : user ? (
          <Link href="/account" className="flex items-center gap-4">
            <span className={`${montserrat.className} font-normal text-sm leading-[100%]`}>
              {user.first_name} {user.last_name}
            </span>
            <img src="/images/avatar.png" alt="аватар" className="size-10" />
          </Link>
        ) : (
          <Link href="/login">
            <button
              className={`${montserrat.className} ${styles.btn} cursor-pointer font-medium text-base text-nowrap leading-[100%] flex items-center`}
            >
              Личный кабинет
            </button>
          </Link>
        )}

        <button aria-label={"Меню"} onClick={()=>setBurgerIsOpen(true)} className={`${styles.headerMenu} cursor-pointer`}>
          <img src="/header-images/menu.svg" alt="" />
        </button>
        <BurgerMenu isOpen={burgerIsOpen} setIsOpen={setBurgerIsOpen} />
      </div>
    </header>
  );
}
