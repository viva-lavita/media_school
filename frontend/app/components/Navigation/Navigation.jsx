'use client';
import { Montserrat } from 'next/font/google';
import styles from "./Navigation.module.css";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { usePageTitle } from '../../context/PageTitleContext';

const path = {
 '/': 'Главная',
 '/about': ' / О проекте',
 '/news': ' / Новости, анонсы и конкурсы',
 '/catalog': ' / Каталог материалов',
 '/qa': ' / Вопрос-ответ',
 '/contacts': ' / Контакты',
};

const montserrat = Montserrat({
    subsets: ['latin', 'cyrillic'],
    weight: ['400'],
    style: ['normal'],
})
export default function Navigation() {
 const pathname = usePathname();
 const { pageTitle } = usePageTitle();
  if (pathname === "/") return null;
 let crumbs = pathname.split('/').filter(Boolean);
 return (
  <nav className={`${montserrat.className}`}>
   <ol className={styles.breadcrumb}>
    <li className={styles.breadcrumbItem}>
     <Link href="/">Главная</Link>
    </li>

    {crumbs.map((crumb, index) => {
     const currentPath = '/' + crumb;

     if (index === crumbs.length - 1) {
      let lastCrumb = path[currentPath] || ' / ' + decodeURIComponent(crumb);
      if (pathname.startsWith('/news/') && pageTitle) {
       lastCrumb = ' / ' + pageTitle;
      }
      return (
       <li key={currentPath} className={`${styles.breadcrumbItem} ${styles.active}`}>
        {lastCrumb}
       </li>
      );
     }
     return (
      <li key={currentPath} className={styles.breadcrumbItem}>
       <Link href={currentPath}>{path[currentPath] || crumb}</Link>
      </li>
     );
    })}
   </ol>
  </nav>
 );
}
