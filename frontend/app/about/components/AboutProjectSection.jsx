import TeachersList from './TeachersList';
import styles from './About.module.css';
import { comfortaa } from '@/lib/fonts';
import { montserrat } from '@/lib/fonts';
import DescriptionSection from './DescriptionSection';

export default function AboutProjectSection() {
 const TEACHERS_DATA = [
  {
   id: 1,
   name: 'Мартынова Елизовета Алексеевна',
   position: 'Тренер по голосу и речи',
   photo: '/about-images/Martunova.png',
  },
  {
   id: 2,
   name: 'Ненашев Максим Федорович',
   position: 'Оператор Первого канала',
   photo: '/about-images/Nenashev.png',
  },
  {
   id: 3,
   name: 'Иванова Оксана Анатольевна',
   position: 'Ведущая канала К23',
   photo: '/about-images/Ivanova.png',
  },
 ];

 const description = {
  title: 'Сначала это был небольшой кружок журналистики...',
  paragraph1: `Медиашкола появилась в как ответ на растущую потребность в практичном,
       честном и современном медиаобразовании. Идея создать школу родилась у
       участников кружка журналистики, которые хотели объединить теорию и живую
       практику — без скучных лекций и оторванных от жизни заданий. Сначала это
       был небольшой курс на базе. Мы собирались вечерами, учились снимать,
       монтировать, писать тексты, говорить в камеру и слышать друг друга.
       Интерес к проекту рос — как и мы сами.`,
  paragraph2: `    За первый год мы провели 5 потоков, обучили 20 учеников и поняли:
       медиашкола — это не просто курсы, это сообщество. Сообщество, где можно
       ошибаться и учиться, где ты не один, где твой голос важен. Интерес к
       проекту рос — как и мы сами. За первый год мы провели 5 потоков, обучили
       20 учеников и поняли: медиашкола — это не просто курсы, это сообщество.
       Сообщество, где можно ошибаться и учиться, где ты не один, где твой голос
       важен.`,
 };
const titleListTeachers = 'Основатели проекта "Медиашкола"';
 return (
  <main>
   <section className={styles.projectInfo}>
    <h2 className={`${comfortaa.className} ${styles.titleAbout}`}>О проекте</h2>
    <div className={styles.textBlock}>
     <DescriptionSection title={description.title} paragraph1={description.paragraph1} paragraph2={description.paragraph2}  />
     <div className={styles.founders}>
      {<TeachersList titleList={titleListTeachers} teachers={TEACHERS_DATA} />}
     </div>
    </div>
    <img src="/about-images/main.svg" alt="main" />
   </section>
  </main>
 );
}
