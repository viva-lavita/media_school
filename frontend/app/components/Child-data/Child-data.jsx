"use client"

import {montserrat} from "@/lib/fonts";
import styles from "@/app/registration/Registration.module.css";
import ButtonImage from "@/app/components/Button-Image/Button-Image";
import {useEffect, useState} from "react";

export default function ChildData({dataRequired, userField, userReqStarByDate, handleFocus, handleChange, handleBlur,
                                    clearField, setIsFormValid, imgUrl, direction}) {

  const childLastnameValid = userField['Ребёнок_Фамилия']?.trim() !== '';
  const childNameValid = /^[а-яА-ЯЁё-]+$/.test(userField['Ребёнок_Имя']?.trim() || '');
  const childSchoolValid = userField['Школа']?.trim() !== '';
  const childClassValid = userField['Класс']?.trim() !== '';
  const childDataValid = (() => {
    const str = userField['Ребёнок_Дата рождения']?.trim();
    if (!str) return false;

    const regex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/;
    if(!regex.test(str)) return false;

    const [day, month, year] = str.split('.').map(Number);
    const date = new Date(year, month - 1, day);
    return (
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day
    );
  })();

  useEffect(() => {
    setIsFormValid(prev => ({
      ...prev,
      ['child_last_name'] : childLastnameValid,
      ['child_first_name'] : childNameValid,
      ['child_date_of_birth'] : childDataValid,
      ['school'] : childSchoolValid,
      ['classroom'] : childClassValid,
    }))
  }, [childLastnameValid, childNameValid, childDataValid, childSchoolValid, childClassValid])

  return (
    <div className={`flex flex-col gap-3`}>
      <div className={`relative`}>
        <input
          placeholder="Фамилия"
          type="text"
          name="child_last_name"
          id="child_lastname"
          className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
          onBlur={(e) => handleBlur('Ребёнок_Фамилия', e)}
          onChange={(e) => handleChange('Ребёнок_Фамилия', e)}
          onFocus={() => handleFocus('Ребёнок_Фамилия')}
          value={userField["Ребёнок_Фамилия"]}
          required
        />
        <label className={`visually-hidden`} htmlFor="child_lastname">Фамилия</label>
        {dataRequired && userReqStarByDate['Ребёнок_Фамилия'] && (
          <span
            className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-22 top-3 text-red-500`}
          >
          *
        </span>
        )}
        <ButtonImage onClick={() => clearField('Ребёнок_Фамилия')} imgUrl={imgUrl}/>
      </div>
      <div className={`${styles.registrationFormInputCouple}
       ${direction === "column"
        ? "min-[769px]:max-[1025px]:flex-col"
        : "min-[769px]:max-[1025px]:flex-row"}  flex gap-3`}>
        <div className={`flex basis-0 grow relative`}>
          <input
            placeholder="Имя"
            type="text"
            name="child_first_name"
            id="child_firstname"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            onBlur={(e) => handleBlur('Ребёнок_Имя', e)}
            onChange={(e) => handleChange('Ребёнок_Имя', e)}
            onFocus={() => handleFocus('Ребёнок_Имя')}
            value={userField["Ребёнок_Имя"]}
            required
          />
          <label className={`visually-hidden`} htmlFor="child_firstname">Имя</label>
          {dataRequired && userReqStarByDate['Ребёнок_Имя'] && (
            <span
              className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-12.5 top-3 text-red-500`}
            >
          *
        </span>
          )}
          <ButtonImage onClick={() => clearField('Ребёнок_Имя')} imgUrl={imgUrl}/>
        </div>
        <div className={`flex basis-0 grow relative`}>
          <input
            placeholder="Отчество"
            type="text"
            name="child_patronymic_name"
            id="child_middlename"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            onChange={(e) => handleChange('Ребёнок_Отчество', e)}
            value={userField["Ребёнок_Отчество"]}
          />
          <label className={`visually-hidden`} htmlFor="child_middlename">Отчество</label>
          <ButtonImage onClick={() => clearField('Ребёнок_Отчество')} imgUrl={imgUrl}/>
        </div>
      </div>
      <div className={`${styles.registrationFormInputCouple}
       ${direction === "column"
        ? "min-[769px]:max-[1025px]:flex-col"
        : "min-[769px]:max-[1025px]:flex-row"}  flex gap-3`}>
        <div className={`flex basis-0 grow relative`}>
          <input
            placeholder="Дата рождения"
            type="text"
            name="child_date_of_birth"
            id="child_birthday"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            onBlur={(e) => handleBlur('Ребёнок_Дата рождения', e)}
            onChange={(e) => handleChange('Ребёнок_Дата рождения', e)}
            onFocus={() => handleFocus('Ребёнок_Дата рождения')}
            value={userField["Ребёнок_Дата рождения"]}
            required
          />
          <label className={`visually-hidden`} htmlFor="child_birthday">Дата рождения</label>
          {dataRequired && userReqStarByDate['Ребёнок_Дата рождения'] && (
            <span
              className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-33 top-3 text-red-500`}
            >
          *
        </span>
          )}
          <ButtonImage onClick={() => clearField('Ребёнок_Дата рождения')} imgUrl={imgUrl}/>
        </div>
        <div className={`flex basis-0 grow relative`}>
          <input
            placeholder="Школа"
            type="text"
            name="child_school"
            id="child_school"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            onBlur={(e) => handleBlur('Школа', e)}
            onChange={(e) => handleChange('Школа', e)}
            onFocus={() => handleFocus('Школа')}
            value={userField["Школа"]}
            required
          />
          <label className={`visually-hidden`} htmlFor="child_school">Школа</label>
          {dataRequired && userReqStarByDate['Школа'] && (
            <span
              className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-17 top-3 text-red-500`}
            >
          *
        </span>
          )}
          <ButtonImage onClick={() => clearField('Школа')} imgUrl={imgUrl}/>
        </div>
      </div>
      <div className={`relative`}>
        <input
          placeholder="Класс"
          type="text"
          name="child_classroom"
          id="child_classroom"
          className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
          onBlur={(e) => handleBlur('Класс', e)}
          onChange={(e) => handleChange('Класс', e)}
          onFocus={() => handleFocus('Класс')}
          value={userField["Класс"]}
          required
        />
        <label className={`visually-hidden`} htmlFor="child_classroom">Класс</label>
        {dataRequired && userReqStarByDate['Класс'] && (
          <span
            className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-15.5 top-3 text-red-500`}
          >
          *
        </span>
        )}
        <ButtonImage onClick={() => clearField('Класс')} imgUrl={imgUrl}/>
      </div>
    </div>
  )
}