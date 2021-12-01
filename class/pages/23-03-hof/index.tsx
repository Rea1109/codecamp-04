// import { MouseEvent } from "react";

export default function HofPage() {
  const onClickChild = (index: number) => () => {
    // event.target instanceof Element && console.log(event.target.id);
    console.log(index);
  };
  return (
    <>
      <h1>HOF 연습 페이지</h1>
      <div>
        {["철수", "영희", "훈이"].map((el, index) => (
          <div key={el} id={el} onClick={onClickChild(index)}>
            {el}
          </div>
        ))}
      </div>
    </>
  );
}
