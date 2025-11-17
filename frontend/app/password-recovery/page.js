import styles from './password-recovery.module.css'
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";

export default function PasswordRecoveryPage() {
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
        <form className={`${styles.passwordRecoveryForm} flex flex-col w-full`}>
          <div className="w-full relative">
            <input
              type="text"
              id="login"
              className="w-full border border-green bg-white py-3 px-4 focus:outline-none"
              name="login"
              placeholder="Введите электронную почту"
            />
            <img className={`absolute top-4.5 right-4`}
                 src="/images/cross.svg"
                 alt="крестик"
            />
          </div>
          <div className={`${styles.passwordRecoveryFormButtons} flex gap-3`}>
            <button className={`${montserrat.className} font-medium text-base leading-[100%] flex basis-0 grow 
            bg-green border border-green py-3 px-6 justify-center `}>Отправить</button>
            <button className={`${montserrat.className} font-medium text-base leading-[100%] flex basis-0 grow 
            bg-white border border-green py-3 px-6 justify-center `}>
              Отменить
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
