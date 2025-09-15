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
          name="child_lastname"
          id="child_lastname"
          className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
          required
        />
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
            name="child_firstname"
            id="child_firstname"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            required
          />
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
            name="child_middlename"
            id="child_middlename"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
          />
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
            name="child_birthday"
            id="child_birthday"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            required
          />
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