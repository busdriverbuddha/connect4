export default function Button({index, clickHandler, inactive}) {
  let buttonDivClass = "flex items-center justify-center bg-gray-300";
  if (inactive) {
    buttonDivClass += " aspect-square";
  } else {
    buttonDivClass += " hover:bg-gray-100 active:bg-white aspect-square";
  }
  return <div
    id={`button-${index}`}
    onClick={inactive ? undefined : () => clickHandler(index)}
    className={buttonDivClass}
  >
    {inactive ? undefined : <span className="text-blue-500 text-2xl">▼</span>}
  </div>
}