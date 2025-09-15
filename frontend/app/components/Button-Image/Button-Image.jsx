export default function ButtonImage({imgUrl}) {
  return (
    <button aria-label={imgUrl ? "Скрыть или показать данные" : "убрать"}>
      <img className={`absolute top-4.5 right-4`}
           src={imgUrl ? imgUrl : "/images/cross.svg"}
           alt=""
      />
    </button>
  )
}