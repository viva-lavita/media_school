import TeacherCard from "./TeacherCard";
import styles from './About.module.css';
import {montserrat} from "@/lib/fonts";

export default function TeachersList({ teachers }) {
  return (
    <div className={styles.teachersList}>
      <p className={`${montserrat.className} ${styles.teacherListHeader}`}>Основатели проекта "Медиашкола"</p>
      {teachers.map((teacher, index) => (
        <TeacherCard  key={index} teacher={teacher} />
      ))}
    </div>
  );
};
