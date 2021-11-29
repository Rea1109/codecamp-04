import { useState } from "react";

const StatePrevPage = () => {
  const [count, setCount] = useState(0);

  const onClickCount = () => {
    // 1. 화살표 함수
    // setCount((prev) => prev + 1);

    // 2. 그냥 함수
    // setCount(function (prev) {
    //   console.log(prev);
    //   return prev + 1;
    // });

    // 3. 화살표 함수에서 매개변수 바꾸기
    setCount((num) => {
      console.log(num);
      return num + 1;
    });
  };

  return (
    <>
      <div>현재 카운트 {count}</div>
      <button onClick={onClickCount}>+</button>
    </>
  );
};

export default StatePrevPage;
