import AboutProjectSection from "./components/AboutProjectSection";
import styles from './components/About.module.css';
import DetailsSection from "./components/DetailsSection";

export default function About() {
  return (
    <div className={styles.wrap}>
     <AboutProjectSection />
     <DetailsSection />
    </div>
  );
};
