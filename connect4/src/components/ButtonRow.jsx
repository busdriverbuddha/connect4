import Button from "./Button";

export default function ButtonRow({clickHandler, inactiveCols}) {
  const colIndices = [...Array(7).keys()];
  return <>
    {colIndices.map(
      index => <Button
        key={`button-${index}`}
        index={index}
        clickHandler={clickHandler}
        inactive={inactiveCols.includes(index)}
      />)}
  </>
  
}