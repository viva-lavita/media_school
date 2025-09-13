import styles from "./RadioButton.module.css";

export default function RadioButtons({ showCompleted, setShowCompleted }) {
  return (
    <div className="flex space-x-7">
      <label className={styles.customRadio}>
        <input
          type="radio"
          name="contestStatus"
          checked={!showCompleted}
          onChange={() => setShowCompleted(false)}
        />
        <span className={styles.radioBtn}></span>
        <span className={`{styles.textStyle} ${!showCompleted ? 'text-black' : 'text-grey-2'}`}>
          Текущие
        </span>
      </label>
      <div className="verticalLine"></div>
      <label className={styles.customRadio}>
        <input
          type="radio"
          name="contestStatus"
          checked={showCompleted}
          onChange={() => setShowCompleted(true)}
        />
        <span className={styles.radioBtn}></span>
        <span className={`{styles.textStyle} ${showCompleted ? 'text-black' : 'text-grey-2'}`}>
          Завершенные
        </span>
      </label>
    </div>
  );
}
