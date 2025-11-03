"use client"

import {montserrat} from "@/lib/fonts";
import styles from "@/app/registration/Registration.module.css";
import ButtonImage from "@/app/components/Button-Image/Button-Image";
import {useContext, useEffect, useState} from "react";
import PageWidthContext from "@/app/context/PageWidthProvider";

export default function ParentData({
                                     dataRequired = false,
                                     userField = {},
                                     userReqStarByDate = {},
                                     handleFocus = () => {},
                                     handleChange = () => {},
                                     handleBlur = () => {},
                                     clearField = () => {},
                                     setIsFormValid = () => {},
                                     imgUrl,
                                     direction
                                   }) {
  const safeUserField = userField || {};
  const safeUserReqStarByDate = userReqStarByDate || {};

  const lastNameValid = safeUserField['Фамилия']?.trim() !== '';
  const firstNameValid = /^[а-яА-ЯЁё-]+$/.test(safeUserField['Имя']?.trim() || '');
  const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(safeUserField.Email?.trim() || '');

  const dateValid = (() => {
    const str = safeUserField['Дата рождения']?.trim();
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
    if (typeof setIsFormValid === 'function') {
      setIsFormValid(prev => ({
        ...prev,
        ['last_name'] : lastNameValid,
        ['first_name'] : firstNameValid,
        ['email'] : emailValid,
        ['date_of_birth'] : dateValid
      }))
    }
  }, [lastNameValid, firstNameValid, emailValid, dateValid])

  const { pageWidth } = useContext(PageWidthContext);

  return (
    <div className={`${!lastNameValid ? 'pt-4' : ''} flex flex-col gap-3`}>
      <div className={`relative`}>
        <label className={`${!lastNameValid ? `${montserrat.className} font-normal text-sm leading-[100%] absolute 
        top-[-18px] text-red` : 'hidden'}`} htmlFor="parent_lastname">
          Поле должно быть заполненным
        </label>
        <input
          placeholder="Фамилия"
          type="text"
          name="last_name"
          id="parent_lastname"
          className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
          onBlur={(e) => handleBlur('Фамилия', e)}
          onChange={(e) => handleChange('Фамилия', e)}
          onFocus={() => handleFocus('Фамилия')}
          value={safeUserField['Фамилия']}
          required
        />
        {dataRequired && safeUserReqStarByDate['Фамилия'] && (
          <span
            className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-22 top-3 text-red-500`}
          >
          *
        </span>
        )}
        <ButtonImage onClick={() => clearField('Фамилия')} imgUrl={imgUrl}/>
      </div>
      <div className={`${styles.registrationFormInputCouple} ${firstNameValid ? '' : 'pt-6'}
      ${direction === "column"
        ? "min-[769px]:max-[1025px]:flex-col"
        : "min-[769px]:max-[1025px]:flex-row"} 
        flex gap-3 relative`}>
        <div className={`flex basis-0 grow relative`}>
          <label htmlFor="parent_firstname"
                 className={`${firstNameValid ? 'hidden' : '${montserrat.className} font-normal ' +
                   'text-sm leading-[100%] absolute text-wrap bottom-14 text-red'}`}>
            Допустимые буквенные символы А&#8288;-&#8288;Я
          </label>
          <input
            placeholder="Имя"
            type="text"
            name="first_name"
            id="parent_firstname"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            onBlur={(e) => handleBlur('Имя', e)}
            onChange={(e) => handleChange('Имя', e)}
            onFocus={() => handleFocus('Имя')}
            value={safeUserField['Имя']}
            required
          />
          {dataRequired && safeUserReqStarByDate['Имя'] && (
            <span
              className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-12.5 top-3 
              text-red-500`}
            >
          *
        </span>
          )}
          <ButtonImage onClick={() => clearField('Имя')} imgUrl={imgUrl}/>
        </div>
        <div className={`flex basis-0 grow relative`}>
          <input
            placeholder="Отчество"
            type="text"
            name="patronymic_name"
            id="parent_middlename"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            onChange={(e) => handleChange('Отчество', e)}
            value={safeUserField["Отчество"]}
          />
          <ButtonImage onClick={() => clearField('Отчество')} imgUrl={imgUrl}/>
        </div>
      </div>
      <div className={`${styles.registrationFormInputCouple} ${pageWidth <= 585 ? 
        dateValid ? '' : 'pt-6'  
        : dateValid && emailValid ? '' : 'pt-6'
      }
      ${direction === "column"
        ? "min-[769px]:max-[1025px]:flex-col"
        : "min-[769px]:max-[1025px]:flex-row"} 
         flex gap-3 relative`}>
        <div className={`flex basis-0 grow relative`}>
          <label htmlFor="parent_birthday"
                 className={`${dateValid ? 'hidden' : '${montserrat.className} font-normal ' +
                   'text-sm leading-[100%] absolute text-wrap bottom-14 text-red'}`}>
            Допустимый формат даты дд.мм.гггг
          </label>
          <input
            placeholder="Дата рождения"
            type="text"
            name="date_of_birth"
            id="parent_birthday"
            className={`w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none`}
            onBlur={(e) => handleBlur('Дата рождения', e)}
            onChange={(e) => handleChange('Дата рождения', e)}
            onFocus={() => handleFocus('Дата рождения')}
            value={safeUserField['Дата рождения']}
            required
          />
          {dataRequired && safeUserReqStarByDate['Дата рождения'] && (
            <span
              className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-33 top-3 text-red-500`}
            >
          *
        </span>
          )}
          <ButtonImage onClick={() => clearField('Дата рождения')} imgUrl={imgUrl}/>
        </div>
        <div className={`${!emailValid && (pageWidth <= 585) ? 'mt-4' : ''} flex basis-0 grow relative`}>
          <label htmlFor="parent_email" className={`${emailValid ? 'hidden' : '${montserrat.className} font-normal ' +
            'text-sm leading-[100%] absolute text-nowrap bottom-14 text-red'}`}>
            Неверный email
          </label>
          <input
            placeholder="Email"
            type="text"
            name="email"
            id="parent_email"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            onBlur={(e) => handleBlur('Email', e)}
            onChange={(e) => handleChange('Email', e)}
            onFocus={() => handleFocus('Email')}
            value={safeUserField.Email}
            required
          />
          {dataRequired && safeUserReqStarByDate['Email'] && (
            <span
              className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-14.5 top-3 text-red-500`}
            >
          *
        </span>
          )}
          <ButtonImage onClick={() => clearField('Email')} imgUrl={imgUrl}/>
        </div>
      </div>
    </div>
  )
}