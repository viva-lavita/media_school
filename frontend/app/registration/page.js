"use client";

import { useState } from "react";
import Link from "next/link";
import styles from './Registration.module.css'
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";
import ParentData from "@/app/components/Parent-data/Parent-data";
import ChildData from "@/app/components/Child-data/Child-data";
import CreatePassword from "@/app/components/CreatePassword/CreatePassword";

export default function RegistrationPage() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      re_password: formData.get("re_password"),
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      patronymic_name: formData.get("patronymic_name"),
      date_of_birth: formData.get("date_of_birth"),
      child: {
        first_name: formData.get("child_first_name"),
        last_name: formData.get("child_last_name"),
        patronymic_name: formData.get("child_patronymic_name"),
        date_of_birth: formData.get("child_date_of_birth"),
        school: formData.get("child_school"),
        classroom: formData.get("child_classroom"),
      },
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.detail || "Ошибка регистрации");

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };

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
              <ParentData />
              <CreatePassword />
            </div>
          </fieldset>

          <fieldset className={`flex flex-col`}>
            <legend className={`${montserrat.className} font-normal text-base leading-[130%] mb-4`}>
              Данные ученика
            </legend>
            <div className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2 flex flex-col gap-3`}>
              <ChildData />
              <div className={`${montserrat.className} flex flex-col gap-3 font-normal text-sm leading-[100%] text-black`}>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="rules"
                    className={styles.checkbox}
                    required/>
                  <span>Ознакомлен с&nbsp;Правилами использования сайта.</span>
                </label>

                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="personal_data"
                    className={styles.checkbox}
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
            <button type="submit" className={`${montserrat.className}  font-medium text-base leading-[100%] flex basis-0 grow 
            bg-green border border-green py-3 px-6 justify-center `}>Зарегестрироваться</button>
            <button type="reset" className={`${montserrat.className} font-medium text-base leading-[100%] flex basis-0 grow 
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