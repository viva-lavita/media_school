import styles from './About.module.css';
import {montserrat} from "@/lib/fonts";

export default function TeacherCard({ teacher }) {
 return (
  <div className={styles.teacherCard}>
   <div className={styles.teacherPhoto}>
    {teacher.photo && (
     <img src={teacher.photo} alt="photo" />
    )}
   </div>
   <div className={styles.teacherDetails}>
    <h3 className={`${montserrat.className} ${styles.teacherName}`}>{teacher.name}</h3>
    <p className={`${montserrat.className}`}>{teacher.position}</p>
   </div>
  </div>
 );
}
