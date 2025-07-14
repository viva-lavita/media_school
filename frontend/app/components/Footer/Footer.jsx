'use client';
import { useState, useEffect } from 'react';
import { montserrat } from '@/lib/fonts'
import { inter } from '@/lib/fonts'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const [pageWidth, setPageWidth] = useState(360);

  useEffect(() => {
    const handleResize = () => setPageWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
      <div className={`${styles.bg} gap-10 flex flex-col w-screen`}>
          <footer className={`${montserrat.className} ${styles.fontColor} ${styles.footer} ${pageWidth >= 768 && 
          pageWidth < 1024 ? 'flex-wrap' : '' } flex mx-auto h-full`}>
              <div className="flex flex-col justify-between mr-[7.75%]">
                  <div className={`font-semibold text-lg flex flex-col gap-2`}>
                      <p>+7 3822 71-67-69</p>
                      <p>perspectiva@education70.ru</p>
                  </div>
              </div>
              <div className={`font-medium text-base flex flex-col gap-2 mr-[13%]`}>
                  <nav>
                      <ul>
                          <li><Link href="/about">О проекте</Link></li>
                          <li><Link href="/news">Новости</Link></li>
                          <li><Link href="/catalog">Каталог материалов</Link></li>
                          {pageWidth !== null && (
                          <div className={`${pageWidth > 1024 ? 'hidden' : ''}`}>
                              <li><Link href="/news">Вопрос-ответ</Link></li>
                              <li><Link href="/catalog">Контакты</Link></li>
                          </div>
                          )}
                      </ul>
                  </nav>
              </div>
              {pageWidth !== null && pageWidth > 1024 && (
                  <div className="flex flex-col justify-between mr-[15%]">
                    <div className="text-base font-medium flex flex-col gap-2">
                      <nav>
                        <ul>
                          <li><Link href="/news">Вопрос-ответ</Link></li>
                          <li><Link href="/catalog">Контакты</Link></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
              )}
            <div className={`flex flex-col justify-between ${pageWidth >= 768 && pageWidth < 1024 ? 'ml-[50%]' : '' }`}>
                  <div className="text-base font-medium flex flex-col gap-2">
                      <nav>
                          <ul>
                              <li><Link href="/terms">Пользовательское соглашение</Link></li>
                              <li><Link href="/privacy">Политика конфиденциальности</Link></li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </footer>
          <div className={`${pageWidth <= 360 ? 'flex-col gap-2 w-80 mx-auto' : ''} mx-auto flex ${montserrat.className}
          ${styles.footer}`}>
            <div className={`${pageWidth >= 768 && pageWidth < 1024 ? 'flex flex-col gap-2' : ''}`}>
              <p className={`font-normal text-sm`}>
                © 2025 МАОУ Школа {pageWidth <= 360 ? <br/> : ''} «Перспектива» г. Томск
              </p>
              <p className={`text-sm font-normal`}>Designed by Freepik</p>
            </div>
            <p className={`${inter.className} ${pageWidth >= 768 && pageWidth < 1024 ? '' : '' } text-xs font-medium flex items-center gap-2`}>
              Сделано в
              <img src="/footer-images/logo.svg" alt="1t" className="w-[28.8px] h-6 inline-block" />
              <img src="/footer-images/union.svg" alt="Союз рф" className="w-[70px] h-[10.5px] inline-block" />
              | TEAMCODE
            </p>
          </div>
      </div>
  );
}
