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
 '/login': ' / Личный кабинет',
 '/account': ' / Личный кабинет'
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

  const handleLogout = async () => {
    try {
      const response = await fetch('/local_api/auth/logout/', { method: 'POST' });
      if (response.ok) {
        window.location.href = '/';
      } else {
        console.error('Error logging out:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

 return (
  <nav className={`${montserrat.className} ${styles.nav}`}>
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
   {(pathname === '/account') && (
    <button onClick={handleLogout} className={styles.logoutButton}>
     <img src="/images/out.svg" alt="Выход" className={styles.logoutIcon} />
     Выход из профиля
    </button>
   )}
  </nav>
 );
}
