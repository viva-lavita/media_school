import ChildData from "@/app/components/Child-data/Child-data";
import ParentData from "@/app/components/Parent-data/Parent-data";
import CreatePassword from "@/app/components/CreatePassword/CreatePassword";
import {montserrat} from "@/lib/fonts";
import {comfortaa} from "@/lib/fonts";
import styles from './account.module.css'

export default function AccountPage() {
  return  (
    <div className={`${styles.accountPage} flex`}>
      <form action="/account" method="post" className={`${styles.accountPageData} flex box-border flex-col 
      shrink basis-0 grow-1 bg-light-green border border-green`}>
        <fieldset>
          <legend className={`${montserrat.className} font-normal text-base leading-[130%] mb-4`}>
            Данные родителя/законного представителя ученика
          </legend>
          <ParentData direction={'column'} imgUrl={'/images/pencil.svg'} />
        </fieldset>
        <fieldset>
          <legend className={`${montserrat.className} ${styles.childData} font-normal text-base leading-[130%] mb-4`}>
            Данные ученика
          </legend>
          <ChildData direction={'column'} imgUrl={'/images/pencil.svg'} />
        </fieldset>
        <button type="button" className={`${montserrat.className} font-medium text-base leading-[100%] py-3.5 px-6 bg-green w-[197px] 
        self-center`}>
          Сохранить
        </button>
      </form>
      <div className={`${styles.accountPageData} ${styles.accountPagePasswordChange} flex flex-col basis-0 grow-1 bg-light-green border border-green`}>
        <div className={`flex flex-col gap-4`}>
          <h1 className={`${comfortaa.className} font-bold text-lg leading-[100%]`}>Смена пароля</h1>
          <CreatePassword />
        </div>
        <div className={`flex flex-col justify-between h-full`}>
          <button className={`${montserrat.className} font-medium text-base leading-[100%] py-3.5 px-6 bg-green w-[197px] 
        self-center`}>
            Сменить пароль
          </button>
          <p className={`self-center ${montserrat.className} font-medium text-base leading-[100%] text-red`}>
            Удалить профиль
          </p>
        </div>
      </div>
    </div>
  )
}