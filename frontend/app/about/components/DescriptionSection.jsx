import { comfortaa, montserrat } from '@/lib/fonts';
import styles from './About.module.css';
import { formatText } from '@/app/utils/formatText';

export default function DescriptionSection({ title, description }) {
 return (
  <div className={styles.textContent}>
   <p className={`${comfortaa.className} ${styles.subtitleAbout}`}>
    <strong>{title}</strong>
   </p>
   <div className={montserrat.className}>{formatText(description)}</div>
  </div>
 );
}
