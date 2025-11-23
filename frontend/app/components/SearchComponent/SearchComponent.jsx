'use client'

import styles from './SearchComponent.module.css'
import { useSearch } from '@/app/context/SearchContext';
import ButtonImage from "@/app/components/Button-Image/Button-Image";
import {useState} from "react";
import Link from "next/link";
import {montserrat} from "@/lib/fonts";

export default function SearchComponent() {
  const { isOpen, closeSearch } = useSearch();
  const [isValue, setIsValue] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [results, setResults] = useState([])


  async function handleSearch() {
    try {
      const urls = [
        `${process.env.NEXT_PUBLIC_API_URL}/events/announcements/?search=${searchValue}`,
        `${process.env.NEXT_PUBLIC_API_URL}/events/competitions/?search=${searchValue}`,
        `${process.env.NEXT_PUBLIC_API_URL}/events/news/?search=${searchValue}`
      ]
      const responses = await Promise.all(
        urls.map(url =>
          fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          })))
      const data = await Promise.all(responses.map(res => res.json()))

      const mergedResults = [
        ...(data[0].results || []).map(i => ({ ...i, type: "announcements" })),
        ...(data[1].results || []).map(i => ({ ...i, type: "contests" })),
        ...(data[2].results || []).map(i => ({ ...i, type: "news" })),
      ];

      setResults(mergedResults);
      console.log(mergedResults);
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
                setResults([]);
                setIsValue(!!e.target.value);
              }}/>
            </div>
            <button onClick={handleSearch} className={`${styles.searchButton} cursor-pointer`}>Найти</button>
          </div>
          <button aria-label={'закрыть'} onClick={()=>{closeSearch(); setResults([])}} className={`size-5 self-top cursor-pointer`}>
            <img src="/images/cross-search.svg" alt=""/>
          </button>
        </div>
        <div className={`${styles.searchBlockBorder} flex flex-1`}></div>
      </div>
      <div className={`${styles.listOfMatches}`}>
        {results && results.map(item => (
          <Link
            key={`${item.type}-${item.id}`}
            href={`/news/${item.id}?type=${item.type}`}
            className={`${styles.resultItem} ${montserrat.className} font-normal text-lg leading-[140%] cursor-pointer`}
          >
            <p onClick={()=>{closeSearch(); setResults([])}}>{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}