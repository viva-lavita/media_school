export default function ButtonImage({imgUrl, onClick}) {
  return (
    <button
      onClick={onClick}
      className={imgUrl === "/images/eye.svg"  ? 'cursor-pointer' : ''}
      type="button"
      aria-label={imgUrl === "/images/eye.svg"
      ? "Скрыть или показать данные"
      : imgUrl === "/images/pencil.svg"
        ? "Отредактировать"
        : "убрать"}>
      <img className={`cursor-pointer absolute top-4.5 right-4`}
           src={imgUrl ? imgUrl : "/images/cross.svg"}
           alt=""
      />
    </button>
  )
}