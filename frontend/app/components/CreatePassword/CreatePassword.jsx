'use client'

import {montserrat} from "@/lib/fonts";
import {useEffect, useState} from "react";

export default function CreatePassword({ userField, handleChange, setIsFormValid }) {
  const safeUserField = userField || {};

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*!])[A-Za-z\d@#$%&*!]{8,}$/.test(safeUserField.password || '');
  const passwordMatch = (safeUserField.password || '') === (safeUserField.re_password || '');

  useEffect(() => {
    if(typeof setIsFormValid === 'function') {
      setIsFormValid(prev => ({ ...(prev || {}), password: passwordValid, re_password: passwordMatch }));

    }
  }, [passwordValid, passwordMatch]);

  return (
    <div className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2 flex flex-col gap-3`}>
      <div className={`flex flex-col gap-1`}>
        <label
          className={`${montserrat.className} font-normal text-sm leading-[100%]} ${!passwordValid ? 
            'text-red' : 'text-grey-2'}`}
          htmlFor="password">
          Пароль должен содержать не&nbsp;менее 8&nbsp;символов, используйте латиницу,
          спецсимволы (@#$%&*!), заглавные и&nbsp;прописные буквы, цифры
        </label>
        <div className={`relative`}>
          <input
            placeholder="Пароль"
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="parent_password"
            className="w-full h-[41px] border border-green bg-white py-3 px-4 focus:outline-none"
            onChange={(e) => handleChange('password', e)}
            value={safeUserField.password}
            required
          />
          <label className={`visually-hidden`} htmlFor="parent_password">Пароль</label>
          <button className={`cursor-pointer`} onClick={() => {setShowPassword((prev) => !prev)}} type="button">
            <img className={`absolute top-3 right-4`}
                 src={showPassword ? "/images/eye.svg" : "/images/eye-off.svg"}
                 alt="глаз просмотра"
            />
          </button>
        </div>
      </div>
      <div className={`${!passwordMatch ? 'relative mb-2' : 'hidden'}`}>
        <p className={`absolute text-red`}>Пароли не совпадают</p>
      </div>
      <div className={`relative`}>
        <input
          placeholder="Повторите пароль"
          type={showRepeatPassword ? 'text' : 'password'}
          name="re_password"
          id="parent_passwordRepeat"
          className="w-full h-[41px] border border-green bg-white py-3 px-4 focus:outline-none"
          onChange={(e) => handleChange('re_password', e)}
          value={safeUserField.re_password}
          required
        />
        <label className={`visually-hidden`} htmlFor="parent_passwordRepeat">Повторите пароль</label>
        <button className={`cursor-pointer`} onClick={() => {setShowRepeatPassword((prev) => !prev)}} type="button">
          <img className={`absolute top-3 right-4`}
               src={showRepeatPassword ? "/images/eye.svg" : "/images/eye-off.svg"}
               alt="глаз просмотра"
          />
        </button>
      </div>
    </div>
  )
}