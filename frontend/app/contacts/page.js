import styles from './Contacts.module.css'
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";

export default function ContactsPage () {
  return (
    <>
      <div className={`${styles.contactsContainer}`}>
        <div className={`${styles.contactsContainerAbout} flex flex-col basis-0 grow`}>
          <h1 className={`${comfortaa.className} ${styles.contactsTitle} font-bold leading-[100%]`}>Контакты</h1>
          <div className={`${styles.contactUs} flex flex-col`}>
            <div className={`${styles.contactInfo} flex flex-col`}>
              <span className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Адрес:</span>
              <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>Томская область, г.&nbsp;Томск, ул. Никитина, д.&nbsp;6</p>
            </div>
            <div className={`${styles.contactInfoTelEmail} flex`}>
              <div className={`${styles.contactInfo} flex flex-col`}>
                <span className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Телефон:</span>
                <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>+7&nbsp;3822&nbsp;71-67-69</p>
              </div>
              <div className={`${styles.contactInfo} flex flex-col`}>
                <span className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Почта:</span>
                <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>perspectiva@education70.ru</p>
              </div>
            </div>
            <div className={`${styles.contactInfo} flex flex-col`}>
              <span className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Сайт школы:</span>
              <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>perspectiva70.gosuslugi.ru</p>
            </div>
          </div>
          <div className="flex gap-5">
            <img src="/header-images/vk-button.png" alt="Вконтакте"  className="size-11.5"/>
            <img src="/header-images/ok-button.png" alt="Одноклассники"  className="size-11.5"/>
          </div>
        </div>
        <div className={`flex basis-0 grow`}>
          <img
            src="/images/imageSchool.png"
            alt="Школа Перспектива"
            className={styles.contactsImage}
          />
        </div>
      </div>
      <div className={styles.contactsMap}></div>
    </>
  )
}