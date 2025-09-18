import {montserrat} from "@/lib/fonts";

export default function CreatePassword() {
  return (
    <div className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2 flex flex-col gap-3`}>
      <div className={`flex flex-col gap-1`}>
        <label
          className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2`}
          htmlFor="password">
          Пароль должен содержать не&nbsp;менее 8&nbsp;символов, используйте латиницу,
          спецсимволы (@#$%&*!), заглавные и&nbsp;прописные буквы, цифры
        </label>
        <div className={`relative`}>
          <input
            placeholder="Пароль"
            type="text"
            name="password"
            id="parent_password"
            className="w-full h-[41px] border border-green bg-white py-3 px-4 focus:outline-none"
            required
          />
          <img className={`absolute top-3 right-4`}
               src="/images/eye.svg"
               alt="глаз просмотра"
          />
        </div>
      </div>
      <div className={`relative`}>
        <input
          placeholder="Повторите пароль"
          type="text"
          name="re_password"
          id="parent_passwordRepeat"
          className="w-full h-[41px] border border-green bg-white py-3 px-4 focus:outline-none"
          required
        />
        <img className={`absolute top-3 right-4`}
             src="/images/eye.svg"
             alt="глаз просмотра"
        />
      </div>
    </div>
  )
}