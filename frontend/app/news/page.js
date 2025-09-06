"use client";
import { useEffect, useState } from "react";
import styles from "./News.module.css";
import { comfortaa, montserrat } from "@/lib/fonts";
import TabButtons from "./components/TabButtons";
import RadioButtons from "./components/RadioButtons";
import NewsCard from "./components/NewsCard";
import Pagination from "./components/Pagination";

import { newsData, announcementsData, contestsData } from "./data";

export default function NewsPage() {
  const [pageWidth, setPageWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(9);
  const [currentTab, setCurrentTab] = useState("news");
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setPageWidth(width);
      if (width <= 1024) {
        setNewsPerPage(8);
      } else {
        setNewsPerPage(9);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setCurrentPage(1);
  };

  // Filter contests based on showCompleted state
  const filteredContests = contestsData.filter((item) => {
    const parts = item.date_end.split(".");
    const formattedDateEnd = `${parts[2]}-${parts[1]}-${parts[0]}`;
    const dateEnd = new Date(formattedDateEnd);
    const currentDate = new Date();
    return showCompleted ? currentDate > dateEnd : currentDate <= dateEnd;
  });

  const currentData =
    currentTab === "news"
      ? newsData
      : currentTab === "announcements"
      ? announcementsData
      : filteredContests;

  const indexOfLastItem = currentPage * newsPerPage;
  const indexOfFirstItem = indexOfLastItem - newsPerPage;
  const currentItems = currentData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(currentData.length / newsPerPage);

  return (
    <>
      <div className={styles.newsContainer}>
        <div className={styles.newsAll}>
          <div className={`${styles.announcements} flex flex-col gap-7`}>
            <h1 className={`${comfortaa.className} ${styles.aboutLearning}`} style={{ paddingBottom: "9px" }}>
              Новости, анонсы и конкурсы
            </h1>
            <TabButtons currentTab={currentTab} handleTabChange={handleTabChange} />
            {currentTab === "contests" && (
              <RadioButtons showCompleted={showCompleted} setShowCompleted={setShowCompleted} />
            )}
            <div className={styles.newsCard}>
              {currentItems.map((item, index) => (
                <NewsCard key={index} item={item} index={index} currentTab={currentTab} />
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
    </>
  );
}
