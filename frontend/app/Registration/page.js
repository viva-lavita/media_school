import styles from './Registration.module.css'
import {comfortaa} from "@/lib/fonts";
import {montserrat} from "@/lib/fonts";

export default function RegistrationPage() {
  return (
    <div className={styles.registration}>
      <div className={`${styles.registrationImg} flex basis-0 grow`}>
        <img
          src="/images/full-length-man.png"
          alt="full-length man"
          style={{minWidth: '685px'}}
        />
      </div>
      <div className={`${styles.registrationFormWrapper} box-border flex flex-col basis-0 grow bg-light-green 
      border-green border`}>
        <div className={`flex flex-col text-center gap-4`}>
          <h1 className={`${comfortaa.className} ${styles.registrationFormTitle} font-bold`}>Регистрация</h1>
          <h2 className={`${montserrat.className} ${styles.registrationFormWarning} font-normal`}>Внимание!
            Регистрацию нового пользователя может осуществить только родитель или&nbsp;законный
            представитель ученика Медиашколы.
          </h2>
        </div>
        <form action="/register" method="post" className={`${styles.registrationForm} flex flex-col`}>
          <fieldset className={`flex flex-col`}>
            <legend className={`${montserrat.className} font-normal text-base leading-[130%] mb-4`}>
              Данные родителя/законного представителя ученика
            </legend>
            <div className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2 flex flex-col gap-3`}>
              <div className={`relative`}>
                <input
                  placeholder="Фамилия"
                  type="text"
                  name="parent_lastname"
                  id="parent_lastname"
                  className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
                  required
                />
                <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-22 top-3 
                text-red-500`}>
              *
              </span>
                <img className={`absolute top-4.5 right-4`}
                     src="/images/cross.svg"
                     alt="крестик"
                />
              </div>
              <div className={`${styles.registrationFormInputCouple} flex gap-3`}>
                <div className={`flex basis-0 grow relative`}>
                  <input
                    placeholder="Имя"
                    type="text"
                    name="parent_firstname"
                    id="parent_firstname"
                    className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
                    required
                  />
                  <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-12.5 
                  top-3 text-red-500`}>
                    *
                  </span>
                  <img className={`absolute top-4.5 right-4`}
                       src="/images/cross.svg"
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
                       src="/images/cross.svg"
                       alt="крестик"
                  />
                </div>
              </div>
              <div className={`${styles.registrationFormInputCouple} flex gap-3`}>
                <div className={`flex basis-0 grow relative`}>
                  <input
                    placeholder="Дата рождения"
                    type="text"
                    name="parent_birthday"
                    id="parent_birthday"
                    className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
                    required
                  />
                  <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-33 
                  top-3 text-red-500`}>
                    *
                  </span>
                  <img className={`absolute top-4.5 right-4`}
                       src="/images/cross.svg"
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
                  <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-14.5 
                  top-3 text-red-500`}>
                    *
                  </span>
                  <img className={`absolute top-4.5 right-4`}
                       src="/images/cross.svg"
                       alt="крестик"
                  />
                </div>
              </div>
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
                    name="parent_password"
                    id="parent_password"
                    className="w-full h-[41px] border border-green bg-white py-3 px-4 focus:outline-none"
                    required
                  />
                  <img className={`absolute top-4.5 right-4`}
                       src="/images/eye.svg"
                       alt="глаз просмотра"
                  />
                </div>
              </div>
              <div className={`relative`}>
                <input
                  placeholder="Повторите пароль"
                  type="text"
                  name="parent_passwordRepeat"
                  id="parent_passwordRepeat"
                  className="w-full h-[41px] border border-green bg-white py-3 px-4 focus:outline-none"
                  required
                />
                <img className={`absolute top-4.5 right-4`}
                     src="/images/eye.svg"
                     alt="глаз просмотра"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className={`flex flex-col`}>
            <legend className={`${montserrat.className} font-normal text-base leading-[130%] mb-4`}>
              Данные ученика
            </legend>
            <div className={`${montserrat.className} font-normal text-sm leading-[100%] text-grey-2 flex flex-col gap-3`}>
              <div className={`relative`}>
                <input
                  placeholder="Фамилия"
                  type="text"
                  name="child_lastname"
                  id="child_lastname"
                  className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
                  required
                />
                <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-22 top-3 
                text-red-500`}>
              *
              </span>
                <img className={`absolute top-4.5 right-4`}
                     src="/images/cross.svg"
                     alt="крестик"
                />
              </div>
              <div className={`${styles.registrationFormInputCouple} flex gap-3`}>
                <div className={`flex basis-0 grow relative`}>
                  <input
                    placeholder="Имя"
                    type="text"
                    name="child_firstname"
                    id="child_firstname"
                    className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
                    required
                  />
                  <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-12.5 
                  top-3 text-red-500`}>
                    *
                  </span>
                  <img className={`absolute top-4.5 right-4`}
                       src="/images/cross.svg"
                       alt="крестик"
                  />
                </div>
                <div className={`flex basis-0 grow relative`}>
                  <input
                    placeholder="Отчество"
                    type="text"
                    name="child_middlename"
                    id="child_middlename"
                    className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
                  />
                  <img className={`absolute top-4.5 right-4`}
                       src="/images/cross.svg"
                       alt="крестик"
                  />
                </div>
              </div>
              <div className={`${styles.registrationFormInputCouple} flex gap-3`}>
                <div className={`flex basis-0 grow relative`}>
                  <input
                    placeholder="Дата рождения"
                    type="text"
                    name="child_birthday"
                    id="child_birthday"
                    className="w-full h-[49px] border border-green bg-white py-3 px-4 focus:outline-none"
                    required
                  />
                  <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-33 
                  top-3 text-red-500`}>
                    *
                  </span>
                  <img className={`absolute top-4.5 right-4`}
                       src="/images/cross.svg"
                       alt="крестик"
                  />
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
                  <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-17 
                  top-3 text-red-500`}>
                    *
                  </span>
                  <img className={`absolute top-4.5 right-4`}
                       src="/images/cross.svg"
                       alt="крестик"
                  />
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
                <span className={`${montserrat.className} font-normal text-lg leading-[140%] absolute left-15.5 top-3 
                text-red-500`}>
              *
              </span>
                <img className={`absolute top-4.5 right-4`}
                     src="/images/cross.svg"
                     alt="крестик"
                />
              </div>
              <div className={`${montserrat.className} flex flex-col gap-3 font-normal text-sm leading-[100%] text-black`}>
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="rules"
                    className={styles.checkbox}
                    required/>
                  <span>Ознакомлен с&nbsp;Правилами использования сайта.</span>
                </label>

                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="personal_data"
                    className={styles.checkbox}
                    required
                  />
                  <span>
                    Согласен с&nbsp;Положением обработки и&nbsp;хранения персональных данных
                    (сюда также&nbsp;включены нормы, связанные с&nbsp;обработкой и&nbsp;хранением данных
                    несовершеннолетних).
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          <div className={`${styles.registrationAccept} flex gap-3`}>
            <button className={`${montserrat.className}  font-medium text-base leading-[100%] flex basis-0 grow 
            bg-green border border-green py-3 px-6 justify-center `}>Зарегестрироваться</button>
            <button className={`${montserrat.className} font-medium text-base leading-[100%] flex basis-0 grow 
            bg-white border border-green py-3 px-6 justify-center `}>
              Отменить
            </button>
          </div>
          <div className={`${montserrat.className} flex text-wrap font-medium text-base leading-[100%] justify-center`}>
            <p>Уже&nbsp;есть&nbsp;аккаунт? <span className={`underline text-dark-green`}>Войти в&nbsp;личный кабинет</span></p>
          </div>
        </form>

      </div>

    </div>
  )
}