import { useState } from 'react';
import styles from './CategoryDropdown.module.css';
import { montserrat } from '@/lib/fonts';

export default function CategoryDropdown({ categories, activeCategory, setActiveCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (category) => {
    setActiveCategory(category);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={`${styles.dropdownButton} ${montserrat.style}`} onClick={handleToggle}>
        <span>{activeCategory?.name || 'Выберите категорию'}</span>
        <img
          src="/catalog-images/arrow.svg"
          alt="arrow"
          className={`${styles.arrow} ${isOpen ? styles.open : ''}`}
        />
      </button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {categories.map((category) => (
            <li
              key={category.id}
              className={`${styles.dropdownItem} ${activeCategory?.id === category.id ? styles.active : ''}`}
              onClick={() => handleSelect(category)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
