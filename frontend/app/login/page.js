'use client'

import { useState } from 'react';
import Link from "next/link";
import styles from './Login.module.css'
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";
import { useRouter } from 'next/navigation';
import ButtonImage from "@/app/components/Button-Image/Button-Image";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/local_api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginData.email, password: loginData.password } ),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Ошибка входа');
      } else {
        router.push('/');
        window.location.reload();
      }
    } catch (err) {
      setError('Ошибка сети');
    } finally {
      setLoading(false);
    }
  };

  const [userLoginStar, setUserLoginStar] = useState({
    'email': false,
    'password': false,
  });

  function fieldStar(field, visible) {
    setUserLoginStar(prev => ({
      ...prev,
      [field]: visible,
    }));
  }

  function handleFocus(field) {
    fieldStar(field, false);
  }

  function handleChange(field, e) {
    const value = e.target.value;
    setLoginData(prev => ({ ...prev, [field]: value }));
    const isEmpty = value === '';
    fieldStar(field, isEmpty);
  }

  function handleBlur(field, e) {
    const isEmpty = e.target.value === '';
    fieldStar(field, isEmpty);
  }

  function clearField(field) {
    setLoginData(prev => ({ ...prev, [field]: '' }));
    fieldStar(field, true);
  }

  return (
    <div className={`${styles.loginContainer} flex justify-center m-auto`}>
      <div className={`${styles.loginImage} flex basis-0 grow`}></div>
      <div className={`${styles.loginContent} flex flex-col bg-light-green border-green border`}>
        <div className={`${styles.loginTitleContainer} flex flex-col items-center`}>
          <h1 className={`${comfortaa.className} ${styles.loginTitle} font-bold`}>Вход</h1>
          <div className={`${montserrat.className} flex text-wrap font-medium text-base leading-[100%] text-center`}>
            <p>Нет&nbsp;аккаунта? <span className={`underline text-dark-green`}>
              <Link href="/registration">Зарегистрироваться</Link>
            </span>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={`${styles.loginForm} flex flex-col`}>
          <div className={`${styles.login} flex flex-col`}>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full border border-green bg-white py-3 px-4 focus:outline-none"
                name="email"
                placeholder="Логин"
                value={loginData.email}
                onChange={(e) => handleChange('email', e)}
                onFocus={() => handleFocus('email')}
                onBlur={(e) => handleBlur('email', e)}
                required
              />
              {userLoginStar.email &&
                <span
                  className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-17.5 top-3
                  text-red-500`}
                >
                  *
                </span>
              }
              <ButtonImage onClick={() => clearField('email')}/>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="h-[43px] w-full border border-green bg-white py-3 px-4 focus:outline-none"
                name="password"
                placeholder="Пароль"
                value={loginData.password}
                onChange={(e) => handleChange('password', e)}
                onFocus={() => handleFocus('password')}
                onBlur={(e) => handleBlur('password', e)}
                required
              />
              {userLoginStar.password &&
                <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-20.5 top-2 text-red-500`}>
                  *
                </span>
              }

              <button className={`cursor-pointer`} onClick={() => {setShowPassword((prev) => !prev)}} type="button">
                <img className={`absolute top-3.5 right-4`}
                     src={showPassword ? "/images/eye.svg" : "/images/eye-off.svg"}
                     alt="глаз просмотра"
                />
              </button>
            </div>
          </div>
          <div className={`flex gap-3`}>
            <button
              type="submit"
              disabled={loading}
              className={`${montserrat.className} font-medium text-base leading-[100%] flex basis-0 grow
            bg-green border border-green py-3 px-6 justify-center `}>{loading ? 'Вход...' : 'Войти'}
            </button>
            <button
              type="reset"
              onClick={() => { setLoginData({email: '', password: ''}); setError(''); }}
              className={`${montserrat.className}  font-medium text-base leading-[100%] flex basis-0 grow
            bg-white border border-green py-3 px-6 justify-center `}>
              Отменить
            </button>
          </div>
        </form>
        <div className={`${montserrat.className} flex text-wrap font-medium text-base leading-[100%] justify-center`}>
          <p>Забыли пароль?
            <span className={`underline text-dark-green`}>
              <Link href="/password-recovery">
                Восстановить
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
