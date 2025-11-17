'use client'
import ChildData from "@/app/components/Child-data/Child-data";
import ParentData from "@/app/components/Parent-data/Parent-data";
import {montserrat} from "@/lib/fonts";
import styles from './account.module.css'
import {useEffect} from "react";
import PasswordChange from "@/app/components/PasswordChange/PasswordChange";

export default function AccountPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function getUsersMe() {
      try {
        const res = await fetch(`/api1/users/me`);
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.error('Ошибка:', err);
      }
    }

    void getUsersMe();
  }, []);
  return  (
    <div className={`${styles.accountPage} flex`}>
      <form action="/account" method="post" className={`${styles.accountPageData} flex box-border flex-col 
      shrink basis-0 grow-1 bg-light-green border border-green`}>
        <fieldset>
          <legend className={`${montserrat.className} font-normal text-base leading-[130%] mb-4`}>
            Данные родителя/законного представителя ученика
          </legend>
          <ParentData
            direction="column"
            imgUrl="/images/pencil.svg"
            userField={{}}
            userReqStarByDate={{}}
            handleFocus={() => {}}
            handleChange={() => {}}
            handleBlur={() => {}}
            clearField={() => {}}
            setIsFormValid={() => {}}
            dataRequired={false}
          />
        </fieldset>
        <fieldset>
          <legend className={`${montserrat.className} ${styles.childData} font-normal text-base leading-[130%] mb-4`}>
            Данные ученика
          </legend>
          <ChildData
            direction="column"
            imgUrl="/images/pencil.svg"
            userField={{}}
            userReqStarByDate={{}}
            handleFocus={() => {}}
            handleChange={() => {}}
            handleBlur={() => {}}
            clearField={() => {}}
            setIsFormValid={() => {}}
            dataRequired={false}/>
        </fieldset>
        <button type="button" className={`${montserrat.className} font-medium text-base leading-[100%] py-3.5 px-6 bg-green w-[197px] 
        self-center`}>
          Сохранить
        </button>
      </form>
      <PasswordChange delete_profile={true}/>
    </div>
  )
}