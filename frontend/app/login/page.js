'use client'

import { useState } from 'react';
import styles from './Login.module.css'
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Ошибка входа');
      } else {
        router.push('/');
      }
    } catch (err) {
      setError('Ошибка сети');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={`${styles.loginContainer} flex justify-center m-auto`}>
      <div className={`${styles.loginImage} flex basis-0 grow`}></div>
      <div className={`${styles.loginContent} flex flex-col bg-light-green border-green border`}>
        <div className={`${styles.loginTitleContainer} flex flex-col items-center`}>
          <h1 className={`${comfortaa.className} ${styles.loginTitle} font-bold`}>Вход</h1>
          <div className={`${montserrat.className} flex text-wrap font-medium text-base leading-[100%] text-center`}>
            <p>Нет&nbsp;аккаунта? <span className={`underline text-dark-green`}>Зарегистрироваться</span></p>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-17.5 top-3 text-red-500`}>
              *
              </span>
              <button aria-label="убрать">
                <img className={`absolute top-4.5 right-4`}
                     src="/images/cross.svg"
                     alt=""
                />
              </button>
            </div>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="h-[43px] w-full border border-green bg-white py-3 px-4 focus:outline-none"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-19.5 top-2 text-red-500`}>
              *
            </span>
              <button aria-label="скрыть или показать данные">
                <img className={`absolute top-3.5 right-4`}
                     src="/images/eye.svg"
                     alt=""/>
              </button>
            </div>
          </div>
          <div className={`flex gap-3`}>
            <button
              type="submit"
              disabled={loading}
              className={`${montserrat.className} font-medium text-base leading-[100%] flex basis-0 grow 
            bg-green border border-green py-3 px-6 justify-center `}>{loading ? 'Вход...' : 'Войти'}</button>
            <button
              type="reset"
              onClick={() => { setEmail(''); setPassword(''); setError(''); }}
              className={`${montserrat.className}  font-medium text-base leading-[100%] flex basis-0 grow 
            bg-white border border-green py-3 px-6 justify-center `}>
              Отменить
            </button>
          </div>
        </form>
        <div className={`${montserrat.className} flex text-wrap font-medium text-base leading-[100%] justify-center`}>
          <p>Забыли пароль? <span className={`underline text-dark-green`}>Восстановить</span></p>
        </div>
      </div>
    </div>
  )
}