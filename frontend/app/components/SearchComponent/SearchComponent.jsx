'use client'

import styles from './SearchComponent.module.css'
import { useSearch } from '@/app/context/SearchContext';
import ButtonImage from "@/app/components/Button-Image/Button-Image";
import {useState} from "react";

export default function SearchComponent() {
  const { isOpen, closeSearch } = useSearch();
  const [isValue, setIsValue] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  async function handleSearch() {
    try {
      const res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/announcements/?search=${searchValue}`, {
        headers: { "Content-Type": "application/json" },
        method: "GET",
      })
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  if (!isOpen) return null;
  return (
    <div className={`${styles.searchWrapper} bg-white`}>
      <div className={`${styles.searchBlock}`}>
        <div className={`${styles.searchBlockWrapper} flex w-full`}>
          <div className={`flex flex-1 items-center gap-[30px]`}>
            <div className={`${styles.searchInputWrapper} relative flex w-full`}>
              <input
                className={`${styles.searchInput}`}
                placeholder={'ПОИСК'}
                onChange={(e) => {setSearchValue(e.target.value); setIsValue(!!e.target.value)}}
                value={searchValue}
                type="text"
              />
              <ButtonImage color={isValue} onClick={(e) => {
                setSearchValue('');
                setIsValue(!!e.target.value)
              }}/>
            </div>
            <button onClick={handleSearch} className={`${styles.searchButton} cursor-pointer`}>Найти</button>
          </div>
          <button aria-label={'закрыть'} onClick={closeSearch} className={`size-5 self-top cursor-pointer`}>
            <img src="/images/cross-search.svg" alt=""/>
          </button>
        </div>
        <div className={`${styles.searchBlockBorder} flex flex-1`}></div>
      </div>
      <div></div>
    </div>
  )
}