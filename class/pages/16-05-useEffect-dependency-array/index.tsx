import { useEffect, useState } from "react";

const UseEffectDependencyArrayPage = () => {
  console.log("랜더링시작");

  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("최초 한번 실행됨 왜? 의존성 배열이 비어있으니깐");
  // }, []);

  useEffect(() => {
    console.log(
      "최초 한번 실행되고 , 무언가 변경될때마다 실행됨 왜? 의존성 배열 자체를 인자로 안넣어줬으니깐"
    );
  });

  // useEffect(() => {
  //   console.log(
  //     "최초에도 실행되고, count가 변경되면 재실행 왜? 의존성 배열에 count를 넣었으니깐"
  //   );
  // }, [count]);

  // 랜더링 두번됨 왜? state가 재 설되었으니깐 랜더링 또 되거든
  // useEffect(() => {
  //   setCount(100);
  // }, []);

  // 무한 루프 무한랜더링
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  const onClickCounter = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <>
      <div>현재카운트 : {count}</div>
      <button onClick={onClickCounter}>+</button>
    </>
  );
};

export default UseEffectDependencyArrayPage;
