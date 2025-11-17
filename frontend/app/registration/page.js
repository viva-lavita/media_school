"use client";

import { useState } from "react";
import Link from "next/link";
import styles from './Registration.module.css'
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";
import ParentData from "@/app/components/Parent-data/Parent-data";
import ChildData from "@/app/components/Child-data/Child-data";
import CreatePassword from "@/app/components/CreatePassword/CreatePassword";
import { usePopUpAuth } from "@/app/context/PopUpContextAuth";
import {useRouter} from "next/navigation";

export default function RegistrationPage() {
  const { openPopUp } = usePopUpAuth();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const data = {
      email: userField['Email'],
      password: userField['password'],
      re_password: userField['re_password'],
      first_name: userField['Имя'],
      last_name: userField['Фамилия'],
      patronymic_name: userField['Отчество'],
      date_of_birth: normalizeDate(userField['Дата рождения']),
      child: {
        first_name: userField['Ребёнок_Имя'],
        last_name: userField['Ребёнок_Фамилия'],
        patronymic_name: userField['Ребёнок_Отчество'],
        date_of_birth: normalizeDate(userField['Ребёнок_Дата рождения']),
        school: userField['Школа'],
        classroom: userField['Класс'],
      },
    };

    try {
      const res = await fetch("/local_api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.detail || "Ошибка регистрации");
      alert("Аккаунт зарегестрирован");
      openPopUp("Регистрация прошла успешно");
      router.replace('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  function normalizeDate(str) {
    if (!str) return null;
    const [day, month, year] = str.split('.');
    return `${year}-${month}-${day}`;
  }

  const [userReqStarByDate, setUserReqStarByDate] = useState({
    'Фамилия': false,
    'Ребёнок_Фамилия': false,
    'Имя': false,
    'Ребёнок_Имя': false,
    'Дата рождения': false,
    'Ребёнок_Дата рождения': false,
    'Email': false,
    'Школа': false,
    'Класс': false,
  });

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
    'password': '',
    're_password': '',
  });

  function fieldStar(field, visible) {
    setUserReqStarByDate(prev => ({
      ...prev,
      [field]: visible,
    }));
  }

  function handleFocus(field) {
    fieldStar(field, false);
  }

  function handleChange(field, e) {
    const value = e.target.value;
    const isEmpty = value === '';
    setUserField(prev => ({ ...prev, [field]: value }));
    fieldStar(field, isEmpty);
  }

  function handleBlur(field, e) {
    const isEmpty = e.target.value === '';
    fieldStar(field, isEmpty);
  }

  function clearField(field) {
    setUserField(prev => ({ ...prev, [field]: '' }));
    fieldStar(field, true);
  }

  const [isRulesChecked, setIsRulesChecked] = useState(false);
  const [isPersonal_dataChecked, setIsPersonal_dataChecked] = useState(false);

  const [isFormValid, setIsFormValid] = useState({
    'email': false,
    'password': false,
    're_password': false,
    'first_name': false,
    'last_name': false,
    'date_of_birth': false,
    'child_first_name': false,
    'child_last_name': false,
    'child_date_of_birth': false,
    'school': false,
    'classroom': false,
  });
  function validateForm() {
    return isFormValid['email'] && isFormValid['password'] && isFormValid['re_password'] && isFormValid['first_name']
      && isFormValid['last_name'] && isFormValid['date_of_birth'] && isFormValid['child_first_name']
      && isFormValid['child_last_name'] && isFormValid['child_date_of_birth'] && isFormValid['school']
      && isFormValid['classroom'] && isRulesChecked && isPersonal_dataChecked;
  }

  const isValid = validateForm();

  function handleReset() {
    setIsRulesChecked(false);
    setIsPersonal_dataChecked(false);
    setUserField({
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
      'password': '',
      're_password': '',
    })
    setIsFormValid({
      'email': false,
      'password': false,
      're_password': false,
      'first_name': false,
      'last_name': false,
      'date_of_birth': false,
      'child_first_name': false,
      'child_last_name': false,
      'child_date_of_birth': false,
      'school': false,
      'classroom': false,
    });
  }

  return (
    <div className={styles.registration}>
      <div className={`${styles.registrationImg} flex basis-0 grow`}></div>
      <div className={`${styles.registrationFormWrapper} box-border flex flex-col basis-0 grow bg-light-green
      border-green border`}>
        <div className={`flex flex-col text-center gap-4`}>
          <h1 className={`${comfortaa.className} ${styles.registrationFormTitle} font-bold`}>Регистрация</h1>
          <h2 className={`${montserrat.className} ${styles.registrationFormWarning} font-normal`}>Внимание!
            Регистрацию нового пользователя может осуществить только родитель или&nbsp;законный
            представитель ученика Медиашколы.
          </h2>
        </div>
        <form onSubmit={handleSubmit} className={`${styles.registrationForm} flex flex-col`}>
          <fieldset className={`flex flex-col`}>
            <legend className={`${montserrat.className} font-normal text-base leading-[130%] mb-4`}>
              Данные родителя/законного представителя ученика
            </legend>
            <div className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2 flex flex-col gap-3`}>
              <ParentData
                dataRequired={true}
                userField={userField}
                userReqStarByDate={userReqStarByDate}
                handleFocus={handleFocus}
                handleChange={handleChange}
                handleBlur={handleBlur}
                clearField={clearField}
                setIsFormValid={setIsFormValid}
              />
              <CreatePassword
                handleChange={handleChange}
                userField={userField}
                setIsFormValid={setIsFormValid}
              />
            </div>
          </fieldset>

          <fieldset className={`flex flex-col`}>
            <legend className={`${montserrat.className} font-normal text-base leading-[130%] mb-4`}>
              Данные ученика
            </legend>
            <div className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2 flex flex-col gap-3`}>
              <ChildData
                dataRequired={true}
                userField={userField}
                userReqStarByDate={userReqStarByDate}
                handleFocus={handleFocus}
                handleChange={handleChange}
                handleBlur={handleBlur}
                clearField={clearField}
                setIsFormValid={setIsFormValid}
              />
              <div className={`${montserrat.className} flex flex-col gap-3 font-normal text-sm leading-[100%] text-black`}>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="rules"
                    className={styles.checkbox}
                    checked={isRulesChecked}
                    onChange={() => setIsRulesChecked(!isRulesChecked)}
                    required/>
                  <span>Ознакомлен с&nbsp;Правилами использования сайта.</span>
                </label>

                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="personal_data"
                    className={styles.checkbox}
                    checked={isPersonal_dataChecked}
                    onChange={() => setIsPersonal_dataChecked(!isPersonal_dataChecked)}
                    required
                  />
                  <span>
                    Согласен с&nbsp;Положением обработки и&nbsp;хранения персональных данных
                    (сюда также&nbsp;включены нормы, связанные с&nbsp;обработкой и&nbsp;хранением данных
                    несовершеннолетних).
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          <div className={`${styles.registrationAccept} flex gap-3`}>
            <button type={isValid ? 'submit' : 'button'} className={`${montserrat.className} ${isValid ?
            'bg-green cursor-pointer':'bg-grey-3 cursor-not-allowed'} font-medium text-base leading-[100%]
            flex basis-0 grow border border-green py-3 px-6 justify-center`}>Зарегестрироваться</button>
            <button type="button" onClick={handleReset} className={`${montserrat.className} font-medium text-base leading-[100%] flex basis-0 grow
            bg-white border border-green py-3 px-6 justify-center `}>
              Отменить
            </button>
          </div>
          <div className={`${montserrat.className} flex text-wrap font-medium text-base leading-[100%] justify-center`}>
            <p>Уже&nbsp;есть&nbsp;аккаунт? <span className={`underline text-dark-green`}>
              <Link href="/account">Войти в&nbsp;личный кабинет</Link>
            </span>
            </p>
          </div>
        </form>
      </div>

    </div>
  )
}
