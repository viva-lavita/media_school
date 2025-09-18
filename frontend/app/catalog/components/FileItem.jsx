import { montserrat } from '@/lib/fonts';
import styles from './DocumentsSection.module.css';

export default function FileItem({ file }) {
 const iconsByExtension = {
  doc: '\uD83D\uDCC4',
  docx: '\uD83D\uDCC4',
  pdf: '\uD83D\uDDCE',
  txt: '\uD83D\uDDD2',
  jpg: '\uD83D\uDFBC',
  jpeg: '\uD83D\uDFBC',
  png: '\uD83D\uDFBC',
  default: '\uD83D\uDCDA',
 };
 const extension = (file.extension || '').toLowerCase();
 const icon = iconsByExtension[extension] || iconsByExtension['default'];

 return (
<div className={styles.fileRow}>
  <div className={styles.nameContainer}>
    <span className={`${montserrat.className} ${styles.fileName}`}>{icon} {file.name}</span>
  </div>
  <div className={styles.propertyContainer}>
    <span className={`${montserrat.className} ${styles.fileDate}`}>{new Intl.DateTimeFormat('ru-RU').format(file.createdAt)}</span>
    <span className={`${montserrat.className} ${styles.fileFormat}`}>Формат {file.format}</span>
    <a href="#" download className={`${montserrat.className} ${styles.downloadLink}`}>Скачать</a>
  </div>
</div>
 );
}
