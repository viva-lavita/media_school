"use client";

import { useState } from "react";
import styles from './password-recovery.module.css'
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";
import { usePopUpAuth } from "@/app/context/PopUpContextAuth";
import ButtonImage from "@/app/components/Button-Image/Button-Image";

export default function PasswordRecoveryPage() {
  const { openPopUp } = usePopUpAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate sending email
    openPopUp("Ссылка для восстановления отправлена", "Если указанный email зарегистрирован в системе, мы отправим на него письмо с инструкцией.");
  };

  function clearField() {
    setEmail("");
  }

  return (
    <div className={`${styles.passwordRecoveryWrapper} flex`}>
      <div className={`${styles.passwordRecoveryImg} flex basis-0 grow h-[404px]`}></div>
      <div className={`${styles.passwordRecoveryFormWrapper} flex flex-col justify-center items-center basis-0 grow
      bg-light-green border border-green`}>
        <div className={`flex flex-col gap-4`}>
          <h1 className={`${comfortaa.className} ${styles.passwordRecoveryTitle} text-center font-bold`}>
            Восстановление пароля
          </h1>
          <p className={`${montserrat.className} ${styles.passwordRecoveryAbout} text-center font-normal`}>
            На&nbsp;вашу электронную почту будет отправлена ссылка для&nbsp;восстановления пароля. Используйте её,
            чтобы&nbsp;изменить&nbsp;пароль.
          </p>
        </div>
        <form onSubmit={handleSubmit} className={`${styles.passwordRecoveryForm} flex flex-col w-full`}>
          <div className="w-full relative">
            <input
              type="email"
              id="login"
              className="w-full border border-green bg-white py-3 px-4 focus:outline-none"
              name="login"
              placeholder="Введите электронную почту"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <ButtonImage color={!!email} onClick={() => clearField()}/>
          </div>
          <div className={`${styles.passwordRecoveryFormButtons} flex gap-3`}>
            <button type="submit" className={`${montserrat.className} font-medium text-base leading-[100%] flex basis-0 grow
            bg-green border border-green py-3 px-6 justify-center `}>Отправить</button>
            <button onClick={()=> clearField()} type="button" className={`${montserrat.className} font-medium text-base leading-[100%] flex basis-0 grow
            bg-white border border-green py-3 px-6 justify-center `}>
              Отменить
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
