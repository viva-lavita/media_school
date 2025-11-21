import styles from "@/app/account/account.module.css";
import {comfortaa, montserrat} from "@/lib/fonts";
import CreatePassword from "@/app/components/CreatePassword/CreatePassword";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function PasswordChange({ uid, token }) {
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
  async function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid.password || !isFormValid.re_password) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/reset_password_confirm/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          uid,
          token,
          new_password: userField['password'],
          re_new_password: userField['re_password'],
        }),
      });
      if (!res.ok) {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
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
        <button type='submit' onClick={handleSubmit} className={`${montserrat.className} cursor-pointer font-medium text-base leading-[100%] py-3.5 px-6 bg-green w-[197px] 
        self-center`}>
          Сменить пароль
        </button>
      </div>
    </div>
  )
}