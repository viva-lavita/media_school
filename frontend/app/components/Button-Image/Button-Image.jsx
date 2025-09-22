export default function ButtonImage({imgUrl}) {
  return (
    <button type="button" aria-label={imgUrl === "/images/eye.svg"
      ? "Скрыть или показать данные"
      : imgUrl === "/images/pencil.svg"
        ? "Отредактировать"
        : "убрать"}>
      <img className={`absolute top-4.5 right-4`}
           src={imgUrl ? imgUrl : "/images/cross.svg"}
           alt=""
      />
    </button>
  )
}