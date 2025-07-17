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
              <div className={`${pageWidth >= 1400 ? 'mr-[5%]':''} flex flex-col justify-between`}>
                  <div className={`font-semibold text-lg flex flex-col gap-2`}>
                      <p>+7 3822 71-67-69</p>
                      <p>perspectiva@education70.ru</p>
                  </div>
                  <p className={`font-normal text-sm`}>© 2025 МАОУ Школа «Перспектива» г. Томск</p>
              </div>
              <div className={`${pageWidth >= 1400 ? 'mr-[13%]':''} ${pageWidth >= 768 && pageWidth < 1024 ? 'ml-[7.75%]':''} 
               ${pageWidth >= 1024 && pageWidth < 1400 ? 'mr-[14%]':''} font-medium text-base flex flex-col gap-2 `}>
                  <nav>
                      <ul>
                          <li><Link href="/about">О проекте</Link></li>
                          <li><Link href="/news">Новости</Link></li>
                          <li><Link href="/catalog">Каталог материалов</Link></li>
                          {pageWidth !== null && (
                          <div className={`${pageWidth > 1399 ? 'hidden' : ''}`}>
                              <li><Link href="/news">Вопрос-ответ</Link></li>
                              <li><Link href="/catalog">Контакты</Link></li>
                          </div>
                          )}
                      </ul>
                  </nav>
              </div>
              {pageWidth !== null && pageWidth > 1399 && (
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
          <div className={`${styles.footerBottom} ${pageWidth < 768 ? 'flex-col':''} ${pageWidth <= 360 ? 'gap-2 w-80' : ''} mx-auto flex 
          ${montserrat.className}`}>
            <div className={`flex ${styles.footerAbout} ${pageWidth >= 768 && pageWidth < 1024 ? 'gap-2' : ''} gap-1`}>
              <p className={`${pageWidth >= 1024 && pageWidth < 1400 ? 'mr-[2.4%] w-[301px]':''} shrink-0 font-normal text-sm`}>
                © 2025 МАОУ Школа {pageWidth <= 360 || (pageWidth >= 1024 && pageWidth < 1400) ? <br/> : ''} «Перспектива» г. Томск
              </p>
              <p className={`w-[145px] flex items-end 
              shrink-0 text-sm font-normal`}>Designed by Freepik</p>
            </div>
            <p className={`${inter.className} ${pageWidth >= 768 && pageWidth < 1024 ? 'ml-[5.6%]' : ''}
             ${pageWidth >= 1400 ? 'ml-[15.5%]':''} text-xs font-medium flex items-center gap-2`}>
              Сделано в
              <img src="/footer-images/logo.svg" alt="1t" className="w-[28.8px] h-6 inline-block" />
              <img src="/footer-images/union.svg" alt="Союз рф" className="w-[70px] h-[10.5px] inline-block" />
              | TEAMCODE
            </p>
          </div>
      </div>
  );
}
