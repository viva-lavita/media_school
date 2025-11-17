import styles from "@/app/account/account.module.css";
import {comfortaa, montserrat} from "@/lib/fonts";
import CreatePassword from "@/app/components/CreatePassword/CreatePassword";
import {useState} from "react";

export default function PasswordChange({ delete_profile }) {
  const [userField, setUserField] = useState({
    'password': '',
    're_password': ''
  });
  const [isFormValid, setIsFormValid] = useState({
    'password': false,
    're_password': false,
  });
  function handleChange(field, e) {
    const value = e.target.value;
    setUserField(prev => ({ ...prev, [field]: value }));
    console.log(userField);
  }
  return (
    <div className={`${styles.accountPageData} flex flex-col basis-0 grow-1 bg-light-green border border-green`}>
      <div className={`flex flex-col gap-4`}>
        <h1 className={`${comfortaa.className} font-bold text-lg leading-[100%]`}>Смена пароля</h1>
        <CreatePassword
          userField={userField}
          handleChange={handleChange}
          setIsFormValid={setIsFormValid} />
      </div>
      <div className={`flex flex-col justify-between h-full`}>
        <button className={`${montserrat.className} font-medium text-base leading-[100%] py-3.5 px-6 bg-green w-[197px] 
        self-center`}>
          Сменить пароль
        </button>
        {delete_profile && <p className={`self-center ${montserrat.className} mt-20 font-medium text-base leading-[100%] text-red`}>
          Удалить профиль
        </p>}
      </div>
    </div>
  )
}