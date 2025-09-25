import { comfortaa, montserrat } from '@/lib/fonts';
import styles from './About.module.css';

export default function DescriptionSection({ title, description }) {
 return (
  <div className={styles.textContent}>
   <p className={`${comfortaa.className} ${styles.subtitleAbout}`}>
    <strong>{title}</strong>
   </p>
   <p className={montserrat.className}>{description}</p>
  </div>
 );
}
