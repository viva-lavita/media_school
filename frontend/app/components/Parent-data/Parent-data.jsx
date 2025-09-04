import {montserrat} from "@/lib/fonts";
import styles from "@/app/Registration/Registration.module.css";

export default function ParentData({dataRequired, imgUrl, direction}) {
  return (
    <div className={`flex flex-col gap-3`}>
      <div className={`relative`}>
        <input
          placeholder="Фамилия"
          type="text"
          name="parent_lastname"
          id="parent_lastname"
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
        <img className={`absolute top-4.5 right-4`}
             src={imgUrl ? imgUrl : "/images/cross.svg"}
             alt="крестик"
        />
      </div>
      <div className={`${styles.registrationFormInputCouple} 
      ${direction === "column"
        ? "min-[769px]:max-[1025px]:flex-col"
        : "min-[769px]:max-[1025px]:flex-row"} 
        flex gap-3`}>
        <div className={`flex basis-0 grow relative`}>
          <input
            placeholder="Имя"
            type="text"
            name="parent_firstname"
            id="parent_firstname"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            required
          />
          {dataRequired && (
            <span
              className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-12.5 top-3 
              text-red-500`}
            >
          *
        </span>
          )}
          <img className={`absolute top-4.5 right-4`}
               src={imgUrl ? imgUrl : "/images/cross.svg"}
               alt="крестик"
          />
        </div>
        <div className={`flex basis-0 grow relative`}>
          <input
            placeholder="Отчество"
            type="text"
            name="parent_middlename"
            id="parent_middlename"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
          />
          <img className={`absolute top-4.5 right-4`}
               src={imgUrl ? imgUrl : "/images/cross.svg"}
               alt="крестик"
          />
        </div>
      </div>
      <div className={`${styles.registrationFormInputCouple} 
      ${direction === "column"
        ? "min-[769px]:max-[1025px]:flex-col"
        : "min-[769px]:max-[1025px]:flex-row"} 
         flex gap-3`}>
        <div className={`flex basis-0 grow relative`}>
          <input
            placeholder="Дата рождения"
            type="text"
            name="parent_birthday"
            id="parent_birthday"
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
          <img className={`absolute top-4.5 right-4`}
               src={imgUrl ? imgUrl : "/images/cross.svg"}
               alt="крестик"
          />
        </div>
        <div className={`flex basis-0 grow relative`}>
          <input
            placeholder="Email"
            type="text"
            name="parent_email"
            id="parent_email"
            className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
            required
          />
          {dataRequired && (
            <span
              className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-14.5 top-3 text-red-500`}
            >
          *
        </span>
          )}
          <img className={`absolute top-4.5 right-4`}
               src={imgUrl ? imgUrl : "/images/cross.svg"}
               alt="крестик"
          />
        </div>
      </div></div>
  )
}