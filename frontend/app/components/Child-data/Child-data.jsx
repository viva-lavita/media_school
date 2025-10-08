import {montserrat} from "@/lib/fonts";
import styles from "@/app/registration/Registration.module.css";
import ButtonImage from "@/app/components/Button-Image/Button-Image";

export default function ChildData({dataRequired, imgUrl, direction}) {
  return (
    <div className={`flex flex-col gap-3`}>
      <div className={`relative`}>
        <input
          placeholder="Фамилия"
          type="text"
          name="child_last_name"
          id="child_lastname"
          className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
          required
        />
        <label className={`visually-hidden`} htmlFor="child_lastname">Фамилия</label>
        {dataRequired && (
          <span
            className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-22 top-3 text-red-500`}
          >
          *
        </span>
        )}
        <ButtonImage imgUrl={imgUrl}/>
      </div>
      <div className={`${styles.registrationFormInputCouple}
       ${direction === "column"
        ? "min-[769px]:max-[1025px]:flex-col"
        : "min-[769px]:max-[1025px]:flex-row"}  flex gap-3`}>
        <div className={`flex basis-0 grow relative`}>
          <input
            placeholder="Имя"
            type="text"
            name="child_first_name"
            id="child_firstname"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            required
          />
          <label className={`visually-hidden`} htmlFor="child_firstname">Имя</label>
          {dataRequired && (
            <span
              className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-12.5 top-3 text-red-500`}
            >
          *
        </span>
          )}
          <ButtonImage imgUrl={imgUrl}/>
        </div>
        <div className={`flex basis-0 grow relative`}>
          <input
            placeholder="Отчество"
            type="text"
            name="child_patronymic_name"
            id="child_middlename"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
          />
          <label className={`visually-hidden`} htmlFor="child_middlename">Отчество</label>
          <ButtonImage imgUrl={imgUrl}/>
        </div>
      </div>
      <div className={`${styles.registrationFormInputCouple}
       ${direction === "column"
        ? "min-[769px]:max-[1025px]:flex-col"
        : "min-[769px]:max-[1025px]:flex-row"}  flex gap-3`}>
        <div className={`flex basis-0 grow relative`}>
          <input
            placeholder="Дата рождения"
            type="text"
            name="child_date_of_birth"
            id="child_birthday"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            required
          />
          <label className={`visually-hidden`} htmlFor="child_birthday">Дата рождения</label>
          {dataRequired && (
            <span
              className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-33 top-3 text-red-500`}
            >
          *
        </span>
          )}
          <ButtonImage imgUrl={imgUrl}/>
        </div>
        <div className={`flex basis-0 grow relative`}>
          <input
            placeholder="Школа"
            type="text"
            name="child_school"
            id="child_school"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            required
          />
          <label className={`visually-hidden`} htmlFor="child_school">Школа</label>
          {dataRequired && (
            <span
              className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-17 top-3 text-red-500`}
            >
          *
        </span>
          )}
          <ButtonImage imgUrl={imgUrl}/>
        </div>
      </div>
      <div className={`relative`}>
        <input
          placeholder="Класс"
          type="text"
          name="child_classroom"
          id="child_classroom"
          className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
          required
        />
        <label className={`visually-hidden`} htmlFor="child_classroom">Класс</label>
        {dataRequired && (
          <span
            className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-15.5 top-3 text-red-500`}
          >
          *
        </span>
        )}
        <ButtonImage imgUrl={imgUrl}/>
      </div>
    </div>
  )
}