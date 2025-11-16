import { comfortaa, montserrat } from '@/lib/fonts';
import styles from '../../about/components/About.module.css';
import { formatText } from '@/app/utils/formatText';

export default function DescriptionSectionCatalog({ title, description }) {
 return (
  <div className={styles.textContent}>
   <p className={`${comfortaa.className} ${styles.subtitleAbout}`}>
    <strong>{title}</strong>
   </p>
   <div className={montserrat.className}>{formatText(description)}</div>
  </div>
 );
}
