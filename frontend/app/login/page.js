import styles from './Login.module.css'
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";

export default function LoginPage() {
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
        <div className={`${styles.loginForm} flex flex-col`}>
          <div className={`${styles.login} flex flex-col`}>
            <div className="relative">
              <input
                type="text"
                id="login"
                className="w-full border border-green bg-white py-3 px-4 focus:outline-none"
                name="login"
                placeholder="Логин"
                required
              />
              <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-15.5 top-3 text-red-500`}>
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
                type="text"
                id="password"
                className="h-[43px] w-full border border-green bg-white py-3 px-4 focus:outline-none"
                name="password"
                placeholder="Пароль"
                required
              />
              <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-18.5 top-2 text-red-500`}>
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
            <button className={`${montserrat.className} font-medium text-base leading-[100%] flex basis-0 grow 
            bg-green border border-green py-3 px-6 justify-center `}>Войти</button>
            <button className={`${montserrat.className} font-medium text-base leading-[100%] flex basis-0 grow 
            bg-white border border-green py-3 px-6 justify-center `}>
              Отменить
            </button>
          </div>
        </div>
        <div className={`${montserrat.className} flex text-wrap font-medium text-base leading-[100%] justify-center`}>
          <p>Забыли пароль? <span className={`underline text-dark-green`}>Восстановить</span></p>
        </div>
      </div>
    </div>
  )
}