import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const FunctionalLifecycleRef = () => {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // 의존성 배열 , 배열안에 있는 값이 바뀌면 useEffect가 다시 실행된다
  // 의존성 배열이 없으면 컴포넌트에 뭐 하나라도 바뀌면 다시 실행

  // componentDidMount와 동일
  useEffect(() => {
    console.log("마운트됨");
    inputRef.current?.focus();

    // componentWillUnmount와 동일
    return () => {
      console.log("끝났음");
    };
  }, []);

  // componentDidupdate와 비슷 (render 후에도 실행, 이후 뭔가 변경되어도 실행
  useEffect(() => {
    console.log("수정됨");
  });

  const onClickMove = () => {
    router.push("/");
  };

  const onClickCounter = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <div>현재카운트 : {count}</div>
      <button onClick={onClickCounter}>+</button>
      <button onClick={onClickMove}>페이지이동</button>
    </>
  );
};

export default FunctionalLifecycleRef;
