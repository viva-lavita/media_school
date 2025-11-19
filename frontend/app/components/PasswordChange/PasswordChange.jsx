import styles from "@/app/account/account.module.css";
import {comfortaa, montserrat} from "@/lib/fonts";
import CreatePassword from "@/app/components/CreatePassword/CreatePassword";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function PasswordChange({ delete_profile, delete_id }) {
  const router = useRouter();
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
  async function deleteProfile() {
    if (!delete_id) {
      alert("Ошибка: нет ID пользователя");
      return;
    }

    const yes = confirm("вы уверены, что хотите удалить аккаунт?")
    if (!yes) return;

    try {
      const res = await fetch(`/local_api/delete-profile/${delete_id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Не удалось удалить аккаунт");
      }

      router.replace("/");

    } catch (err) {
      console.error("Ошибка удаления:", err);
      alert("Не удалось удалить аккаунт");
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
        <button className={`${montserrat.className} font-medium text-base leading-[100%] py-3.5 px-6 bg-green w-[197px] 
        self-center`}>
          Сменить пароль
        </button>
        {delete_profile && <p onClick={deleteProfile} className={`self-center cursor-pointer ${montserrat.className} mt-20 font-medium text-base leading-[100%] text-red`}>
          Удалить профиль
        </p>}
      </div>
    </div>
  )
}