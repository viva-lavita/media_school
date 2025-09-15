import Image from 'next/image';
import styles from './Pagination.module.css';

export default function Pagination({ totalPages, currentPage, setCurrentPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${currentPage === 1 ? "opacity-0 cursor-not-allowed" : ""} pr-3`}
      >
        <Image src="/images/ArrowLeftBlack.svg" alt="" width={18} height={12} />
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={styles.currentNumber}
          style={{ border: currentPage === index + 1 ? "1.5px solid #3C4226" : "none" }}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""} pl-3`}
      >
        <Image src="/images/ArrowRightBlack.svg" alt="" width={18} height={12} />
      </button>
    </div>
  );
}
