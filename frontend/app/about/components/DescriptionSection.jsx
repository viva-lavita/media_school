import { comfortaa, montserrat } from '@/lib/fonts';
import styles from './About.module.css';
import { formatText } from '@/app/utils/formatText';

export default function DescriptionSection({ title,paragraph1, paragraph2 }) {
  return (
    <div className={styles.textContent}>
      <p className={`${comfortaa.className} ${styles.subtitleAbout}`}>
        <strong>{title}</strong>
      </p>
      <div className={montserrat.className}>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      </div>
    </div>
  );
}
