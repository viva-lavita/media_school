'use client'

import ChildData from "@/app/components/Child-data/Child-data";
import ParentData from "@/app/components/Parent-data/Parent-data";
import {montserrat} from "@/lib/fonts";
import styles from './account.module.css'
import { usePopUpAuth } from "@/app/context/PopUpContextAuth";
import {useEffect, useState} from "react";
import PasswordChange from "@/app/components/PasswordChange/PasswordChange";

export default function AccountPage() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { openPopUp } = usePopUpAuth();

  const [deleteId, setDeleteId] = useState(null);
  useEffect(() => {
    async function getUsersMe() {
      try {
        const res = await fetch(`/local_api/users/me`);
        const data = await res.json();
        setUserField({
          'Email': data.email,
          'Имя': data.first_name,
          'Фамилия': data.last_name,
          'Отчество': data.patronymic_name,
          'Дата рождения': normalizeDate(data.date_of_birth),
          'Ребёнок_Имя': data.child.first_name,
          'Ребёнок_Фамилия': data.child.last_name,
          'Ребёнок_Отчество': data.child.patronymic_name,
          'Ребёнок_Дата рождения': normalizeDate(data.child.date_of_birth),
          'Школа': data.child.school,
          'Класс': data.child.classroom,
        });
        setDeleteId(data.pk);
      } catch (err) {
        console.error('Ошибка:', err);
      }
    }

    void getUsersMe();
  }, []);

  const [userField, setUserField] = useState({
    'Фамилия': '',
    'Ребёнок_Фамилия': '',
    'Имя': '',
    'Ребёнок_Имя': '',
    'Отчество': '',
    'Ребёнок_Отчество': '',
    'Дата рождения': '',
    'Ребёнок_Дата рождения': '',
    'Email': '',
    'Школа': '',
    'Класс': '',
  });

  function handleChange(field, e) {
    const value = e.target.value;
    setUserField(prev => ({ ...prev, [field]: value }));
  }

  function normalizeDate(str) {
    if (!str) return null;
    const [year, month, day] = str.split('-');
    return `${day}.${month}.${year}`;
  }

  function handleSave() {
    const patchData = preparePatchData(userField);
    openPopUp("Данные сохранены");
    fetch(`/local_api/users/me`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patchData),
    }).then(res => res.json())
      .then(data => console.log('Success:', data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  function preparePatchData (fields) {
    return {
      first_name: fields['Имя'],
      last_name: fields['Фамилия'],
      patronymic_name: fields['Отчество'],
      date_of_birth: fields['Дата рождения']?.split('.').reverse().join('-'),
      child: {
        first_name: fields['Ребёнок_Имя'],
        last_name: fields['Ребёнок_Фамилия'],
        patronymic_name: fields['Ребёнок_Отчество'],
        date_of_birth: fields['Ребёнок_Дата рождения']?.split('.').reverse().join('-'),
        school: fields['Школа'],
        classroom: fields['Класс'],
      }
    }
  }
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
            userField={userField}
            userReqStarByDate={{}}
            handleFocus={() => {}}
            handleChange={handleChange}
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
            userField={userField}
            userReqStarByDate={{}}
            handleFocus={() => {}}
            handleChange={handleChange}
            handleBlur={() => {}}
            clearField={() => {}}
            setIsFormValid={() => {}}
            dataRequired={false}/>
        </fieldset>
        <button
          type="button"
          className={`${montserrat.className} font-medium text-base leading-[100%] py-3.5 px-6 bg-green w-[197px] 
        self-center`}
          onClick={handleSave}
        >
          Сохранить
        </button>
      </form>
      <PasswordChange delete_id={deleteId} delete_profile={true}/>
    </div>
  )
}