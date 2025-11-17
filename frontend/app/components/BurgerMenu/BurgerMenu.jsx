'use client'
import styles from "./BurgerMenu.module.css";
import Link from "next/link";
import {montserrat} from "@/lib/fonts";

export default function BurgerMenu({ isOpen, setIsOpen}) {

  return (
    <div className={`relative`}>
      <div className={`${isOpen ? `${styles.burgerMenu} absolute z-10 bg-white flex justify-between` : 'hidden'}`}>
        <div className={`flex flex-col justify-between`}>
          <Link onClick={()=>setIsOpen(false)} href="/">
            <img
              src="/images/logo.svg"
              alt="logo"
              className={`w-[74px] h-[64px] cursor-pointer`} />
          </Link>
          <nav
            onClick={()=>setIsOpen(false)}
            className={`${montserrat.className} font-medium text-base leading-[100%] flex items-center`}>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about">О проекте</Link></li>
              <li><Link href="/news">Новости</Link></li>
              <li><Link href="/catalog">Каталог материалов</Link></li>
              <li><Link href="/qa">Вопрос-ответ</Link></li>
              <li><Link href="/contacts">Контакты</Link></li>
            </ul>
          </nav>
          <div className={`${styles.burgerLinksMedia} gap-5`}>
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
                className="size-11"
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
                className="size-11"
              />
            </a>
          </div>
        </div>
        <button onClick={()=>setIsOpen(false)} className={`absolute top-3 right-3 cursor-pointer`} aria-label='закрыть'>
          <img src="/header-images/burger-close.svg" alt=""/>
        </button>
        <button aria-label={'Поиск'}>
          <img src="/header-images/search.svg" alt="" className={`${styles.burgerMenuSearch} absolute size-9`} />
        </button>
      </div>
    </div>

  )
}