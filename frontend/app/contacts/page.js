'use client'

import styles from './Contacts.module.css'
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";
import {useEffect, useState} from "react";
import YMap from "@/app/components/Map/YMap";

export default function ContactsPage () {
  const [contactsData, setContactsData] = useState({
    "address": "",
    "phone_number": "",
    "contact_email": "",
    "school_website": "",
    "school_photo": "",
    "social_vk": "",
    "social_ok": "",
    "latitude": null,
    "longitude": null
  });
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    async function getContacts() {
      try {
        const res = await fetch(`${API_URL}/contacts/`);
        const data = await res.json();
        setContactsData(data);
      } catch (err) {
        console.error('Ошибка:', err);
      }
    }

    void getContacts();
  }, []);

  return (
    <div className={`flex flex-col justify-between`}>
      <div className={`${styles.contactsContainer}`}>
        <div className={`${styles.contactsContent}`}>
          <div className={`${styles.contactsContainerAbout} flex flex-col basis-0 grow`}>
            <h1 className={`${comfortaa.className} ${styles.contactsTitle} font-bold leading-[100%]`}>Контакты</h1>
            <address className={`${styles.contactUs} flex flex-col`}>
              <div className={`${styles.contactInfo} flex flex-col`}>
                <span className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Адрес:</span>
                <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>Томская область, г.&nbsp;Томск, ул. Никитина, д.&nbsp;6</p>
              </div>
              <div className={`${styles.contactInfoTelEmail} flex`}>
                <div className={`${styles.contactInfo} flex flex-col`}>
                  <span className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Телефон:</span>
                  <a href='tel:+73822716769' className={`${montserrat.className} font-normal text-lg leading-[140%]`}>
                    +7&nbsp;3822&nbsp;71-67-69
                  </a>
                </div>
                <div className={`${styles.contactInfo} flex flex-col`}>
                  <span className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Почта:</span>
                  <a href='mailto:perspectiva@education70.ru' className={`${montserrat.className} font-normal text-lg leading-[140%]`}>perspectiva@education70.ru</a>
                </div>
              </div>
              <div className={`${styles.contactInfo} flex flex-col`}>
                <span className={`${montserrat.className} font-normal text-base leading-[130%] text-grey-2`}>Сайт школы:</span>
                <p className={`${montserrat.className} font-normal text-lg leading-[140%]`}>perspectiva70.gosuslugi.ru</p>
              </div>
            </address>
            <div className="flex gap-5">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://vk.com/perspectivatsk"
                aria-label="ВКонтакте"
              >
                <img
                  src="/header-images/vk-button.png"
                  alt=""
                  className="size-11.5" />
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://ok.ru/group/70000001092892"
                aria-label="Одноклассники"
              >
                <img
                  src="/header-images/ok-button.png"
                  alt=""
                  className="size-11.5" />
              </a>
            </div>
          </div>
          <div className={`flex basis-0 grow justify-center`}>
            <img
              src="/images/imageSchool.png"
              alt="Школа Перспектива"
              className={styles.contactsImage}
              tabIndex={0}
            />
          </div>
        </div>
      </div>
      {contactsData.latitude && contactsData.longitude ? <YMap
        latitude={contactsData.latitude}
        longitude={contactsData.longitude}
        className={styles.contactsMap}/>

      : <p>Загрузка...</p>}

    </div>
  )
}
