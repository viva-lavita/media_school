import { montserrat } from "@/lib/fonts";
import styles from "./TabButtons.module.css";

export default function TabButtons({ currentTab, handleTabChange }) {
  return (
    <div className="flex justify-center space-x-[30px] text-grey-2">
      <button
        onClick={() => handleTabChange("news")}
        className={`${
          currentTab === "news" ? "border-b-2 border-dark-green" : ""
        } ${montserrat.className} w-[208px]`}
        style={{ paddingBottom: "9px" }}
      >
        Новости
      </button>
      <button
        onClick={() => handleTabChange("announcements")}
        className={`${
          currentTab === "announcements"
            ? "border-b-2 border-dark-green"
            : ""
        } ${montserrat.className} ${styles.tabStyle} w-[208px]`}
        style={{ paddingBottom: "9px" }}
      >
        Анонсы
      </button>
      <button
        onClick={() => handleTabChange("contests")}
        className={`${
          currentTab === "contests" ? "border-b-2 border-dark-green" : ""
        } ${montserrat.className} w-[208px]`}
        style={{ paddingBottom: "9px" }}
      >
        Конкурсы
      </button>
    </div>
  );
}
