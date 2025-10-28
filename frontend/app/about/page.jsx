'use client';
import AboutProjectSection from "./components/AboutProjectSection";
import styles from './components/About.module.css';
import Advantages from "../components/Advantages/Advantages";
import WhatAreWeStudyingSection from "../components/WhatAreWeStudyingSection/WhatAreWeStudyingSection";
import Experts from "../components/Experts/Experts";

export default function About() {
  return (
    <div className={styles.wrap}>
     <AboutProjectSection />
     <Advantages />
     <WhatAreWeStudyingSection />
    </div>
  );
};
