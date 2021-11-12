import { useState } from "react";

export default function HelloStatePage() {
  const [qqq, setQqq] = useState("hello");

  function change() {
    setQqq("bye");
  }

  return (
    <>
      <div>{qqq}</div>
      <button onClick={change}>click</button>
    </>
  );
}
