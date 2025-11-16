import styles from './DocumentsSection.module.css';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] });

import {
 faFileWord,
 faFilePdf,
 faFileText,
 faImage,
 faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FileItem({ file }) {
 const iconsByExtension = {
  doc: { icon: faFileWord, color: '#007bff', label: 'doc' },
  docx: { icon: faFileWord, color: '#007bff', label: 'docx' },
  pdf: { icon: faFilePdf, color: '#dc3545', label: 'pdf' },
  txt: { icon: faFileText, color: '#6c757d', label: 'txt' },
  jpg: { icon: faImage, color: '#28a745', label: 'jpg' },
  jpeg: { icon: faImage, color: '#28a745', label: 'jpeg' },
  png: { icon: faImage, color: '#28a745', label: 'png' },
  default: { icon: faFileAlt, color: '#6c757d', label: 'file' },
 };

 const extension = (file.extension || '').toLowerCase();
 const iconData = iconsByExtension[extension] || iconsByExtension['default'];

 return (
  <div className={styles.fileRow}>
   <div className={styles.nameContainer}>
    <FontAwesomeIcon
     icon={iconData.icon}
     size="lg"
     style={{ color: iconData.color }}
    />
    <span className={`${montserrat.className} ${styles.fileName}`}>
     {file.description}
    </span>
   </div>
   <div className={styles.propertyContainer}>
    <span className={`${montserrat.className} ${styles.fileDate}`}>
     {file.created_at
      ? new Intl.DateTimeFormat('ru-RU').format(new Date(file.created_at))
      : ''}
    </span>
    <span className={`${montserrat.className} ${styles.fileFormat}`}>
     Формат {iconData.label}
    </span>
    <a
     href={file.fileUrl}
     download
     className={`${montserrat.className} ${styles.downloadLink}`}
    >
     Скачать
    </a>
   </div>
  </div>
 );
}
