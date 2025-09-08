import { comfortaa, montserrat } from '@/lib/fonts';
import styles from './About.module.css';

export default function DescriptionSection({ text }) {
 return (
  <div className={styles.textContent}>
   <p className={`${comfortaa.className} ${styles.subtitleAbout}`}>
    <strong>{text.title}</strong>
   </p>
   <p className={montserrat.className}>{text.paragraph1}</p>
   <p className={montserrat.className}>{text.paragraph1}</p>
  </div>
 );
}
