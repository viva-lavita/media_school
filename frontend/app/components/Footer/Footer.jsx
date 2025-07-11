export default function Footer() {
  return (
      <div className="w-screen h-53.5" style={{ backgroundColor: "#F6FFDE" }}>
          <footer className="flex w-[1400px] pt-10 pb-4 mx-auto h-full justify-between">
              <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                      <p>+7 3822 71-67-69</p>
                      <p>perspectiva@education70.ru</p>
                  </div>
                  <p>© 2025 МАОУ Школа «Перспектива» г. Томск</p>
              </div>
              <div className="flex flex-col gap-2 mr-[13%]">
                  <p>О проекте</p>
                  <p>Новости</p>
                  <p>Каталог материалов</p>
              </div>
              <div className="flex flex-col justify-between mr-[15%]">
                  <div className="flex flex-col gap-2">
                      <p>Вопрос-ответ</p>
                      <p>Контакты</p>
                  </div>
                  <p>Designed by Freepik</p>
              </div>
              <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                      <p>Пользовательское соглашение</p>
                      <p>Политика конфиденциальности</p>
                  </div>
                  <p>Сделано в ... | TEAMCODE</p>
              </div>
          </footer>
      </div>
  );
}
