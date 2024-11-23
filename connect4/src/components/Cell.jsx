export default function Cell({value, highlight}) {
  let cellClass = "rounded-full w-3/4 aspect-square transition duration-300 ease-in-out";

  const colors = {
    red: "bg-red-500",
    blue: "bg-blue-500",
  };

  if (value === "") {
    cellClass += " bg-white";
  } else {
    cellClass += " " + colors[value];
  }
  if (highlight) {
    cellClass += " outline outline-8 outline-yellow-200";
  } else {
    cellClass += " outline-none";
  }

  return <div className="flex items-center justify-center bg-gray-200 aspect-square">
    <div className={cellClass}></div>
  </div>;
};