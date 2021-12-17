import { useState, useMemo, useCallback } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너 랜더링 됩니다.");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  const randomValue = useMemo(() => Math.random(), []);
  console.log(randomValue);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  const onclickCountState = useCallback(() => {
    setCountState((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>======================</div>
      <div>이것은 컨테이너 입니다.</div>

      <div>카운트(let):{countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1</button>

      <div>카운트(state):{countState}</div>
      <button onClick={onclickCountState}>카운트(state) +1</button>

      <div>======================</div>
      <MemoizationPresenterPage countState={countState} />
    </>
  );
}
