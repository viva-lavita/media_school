import TeacherCard from "./TeacherCard";
import styles from './About.module.css';
import {montserrat} from "@/lib/fonts";

export default function TeachersList({ teachers, titleList }) {
  return (
    <div className={styles.teachersList}>
      <p className={`${montserrat.className} ${styles.teacherListHeader}`}>{titleList}</p>
      {teachers.map((teacher, index) => (
        <TeacherCard  key={index} teacher={teacher} />
      ))}
    </div>
  );
};
