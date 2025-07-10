import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    subsets: ['latin', 'cyrillic'],
    weight: ['500'],
    style: ['normal'],
})

export default function Header() {
  return (
      <header className={`${montserrat.className} text-base flex w-350 justify-between py-2.25 mx-auto`}>
        <img src="/images/logo.svg" alt=""/>
        <nav className="flex items-center">
          <ul className="flex gap-7 h-5">
            <li>О проекте</li>
            <li>Новости</li>
            <li>Каталог материалов</li>
            <li>Вопрос-ответ</li>
            <li>Контакты</li>
          </ul>
        </nav>
        <div className="flex items-center gap-10">
          <img src="/header-images/search.svg" alt="" className="size-9"/>
          <div className="flex gap-5">
              <img src="/header-images/vk-button.png" alt=""  className="size-11.5"/>
              <img src="/header-images/ok-button.png" alt=""  className="size-11.5"/>
          </div>
            <button className="py-3 px-6" style={{ background: "#DEEDAB" }}>
                Личный кабинет
            </button>
        </div>
      </header>
  );
}
