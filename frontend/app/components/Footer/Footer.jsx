'use client';
import { useState, useEffect } from 'react';
import { montserrat } from '@/lib/fonts'
import { inter } from '@/lib/fonts'
import Link from 'next/link'
import styles from './Footer.module.css'
import {usePopUp} from "@/app/context/PopUpContext";

export default function Footer() {
  const [pageWidth, setPageWidth] = useState(0);
  const {setIsPopUpOpen} = usePopUp();

  const [documents, setDocuments] = useState({
    user_agreement: '',
    privacy_policy: ''
  });
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDocuments() {
      try {
        const response = await fetch('/api/documents');
        const data = await response.json();
        setDocuments(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    void fetchDocuments();
  }, []);

  useEffect(() => {
    const handleResize = () => setPageWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) return <p>Загрузка файлов...</p>;
  if (!documents) return null;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  return (
      <footer className={`${styles.bg} gap-10 flex flex-col w-screen`}>
          <div className={`${montserrat.className} ${styles.fontColor} ${styles.footer} flex-wrap flex mx-auto h-full`}>
              <div className={`mr-[5%] flex flex-col justify-between`}>
                  <div className={`font-semibold text-lg flex flex-col gap-2`}>
                      <p>+7 3822 71-67-69</p>
                      <p>perspectiva@education70.ru</p>
                  </div>
              </div>
              <div className={`${styles.pageLinks}`}>
                <div className={`${montserrat.className} text-nowrap font-medium text-base leading-[100%]`}>
                  <nav>
                    <ul className={`flex flex-col gap-2`}>
                      <li><Link href="/about">О проекте</Link></li>
                      <li><Link href="/news">Новости</Link></li>
                      <li><Link href="/catalog">Каталог материалов</Link></li>
                      {pageWidth !== null && (
                        <div className={`${pageWidth > 1400 ? 'hidden' : 'flex flex-col gap-2'}`}>
                          <li><Link href="/qa">Вопрос-ответ</Link></li>
                          <li><Link href="/contacts">Контакты</Link></li>
                        </div>
                      )}
                    </ul>
                  </nav>
                </div>
                {pageWidth !== null && pageWidth <= 944 && (
                  <div className={`${montserrat.className} ${styles.terms} font-medium text-base leading-[100%] flex 
                  flex-col justify-between`}>
                    <nav>
                      <ul className={`flex flex-col gap-2`}>
                        <li>
                          <a
                            className={`cursor-pointer`}
                            href={`${API_URL}${documents.user_agreement}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={true}>
                            Пользовательское соглашение
                          </a>
                        </li>
                        <li>
                          <a
                            className={`cursor-pointer`}
                            href={`${API_URL}${documents.privacy_policy}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={true}>
                            Политика конфиденциальности
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
              {pageWidth !== null && pageWidth > 1400 && (
                  <div className="flex flex-col justify-between mr-[15%]">
                    <div className="text-base font-medium flex flex-col gap-2">
                      <nav>
                        <ul className={`${montserrat.className} flex flex-col gap-2 font-medium text-base leading-[100%]`}>
                          <li><Link href="/qa">Вопрос-ответ</Link></li>
                          <li><Link href="/contacts">Контакты</Link></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
              )}
            {pageWidth !== null && pageWidth > 944 && (
            <div className={`${montserrat.className} ${styles.terms} font-medium text-base leading-[100%] flex flex-col justify-between`}>
              <nav>
                <ul className={`flex flex-col gap-2`}>
                  <li>
                    <a
                      className={`cursor-pointer`}
                      href={`${API_URL}${documents.user_agreement}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={true}>
                      Пользовательское соглашение
                    </a>
                  </li>
                  <li>
                    <a
                      className={`cursor-pointer`}
                      href={`${API_URL}${documents.privacy_policy}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={true}>
                      Политика конфиденциальности
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            )}
          </div>
          <div className={`${styles.footerBottom}  ${pageWidth <= 360 ? 'gap-2 w-80' : ''} 
          mx-auto flex ${montserrat.className}`}>
            <div className={`flex ${styles.footerAbout} ${pageWidth >= 768 && pageWidth < 1024 ? 'gap-2' : ''} gap-1`}>
              <p className={`shrink-0 font-normal text-sm`}>
                © 2025 МАОУ Школа {pageWidth <= 360 || (pageWidth >= 1024 && pageWidth < 1401) ? <br/> : ''}
                «Перспектива» г. Томск
              </p>
              <button onClick={() => setIsPopUpOpen(true)} className={`cursor-pointer w-[145px] mb-[4px] flex items-end 
              shrink-0 text-sm font-normal`}>Designed by Freepik</button>
            </div>
            <p className={`${inter.className} ${styles.performer} ${pageWidth > 1400 ? 'ml-[15.5%]':''} text-xs font-medium 
            flex items-center gap-2`}>
              Сделано в
              <a
                href="https://1t.ru/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/footer-images/logo.svg" alt="1t" className="w-[28.8px] h-6 inline-block" />
              </a>
              <a
                href="https://союз.рф/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="/footer-images/union.svg" alt="Союз рф" className="w-[70px] h-[10.5px] inline-block" />
              </a>
              <a
                href="https://союз.рф/my/teams/2921529416099541128?name=TEAMCODE&space=622"
                target="_blank"
                rel="noopener noreferrer">
                | TEAMCODE
              </a>
            </p>
          </div>
      </footer>
  );
}
