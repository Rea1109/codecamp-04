import { useState } from "react";

export default function CounterStatePage() {
  const [qqq, setQqq] = useState("0");

  function change() {
    setQqq(Number(qqq) + 1);
  }

  return (
    <>
      <div>{qqq}</div>
      <button onClick={change}>+</button>
    </>
  );
}
