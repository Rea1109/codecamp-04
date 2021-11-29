export default function MapElPage() {
  // 1. 기본방법 (화살표함수)
  //   ["철수", "영희", "훈이"].map((el, idx) => {
  //     console.log("el :", el);
  //     console.log("index :", idx);
  //     return `${el}어런이`;
  //   });

  // 2. 기본방법 (그냥함수)
  //   ["철수", "영희", "훈이"].map(function (el, idx) {
  //     console.log("el :", el);
  //     console.log("index :", idx);
  //     return `${el}어런이`;
  //   });

  // 3. 매개변수 바꿔보기
  //   ["철수", "영희", "훈이"].map((val, i) => {
  //     console.log("val :", val);
  //     console.log("i :", i);
  //     return `${val}어런이`;
  //   });

  // 4.
  ["철수", "영희", "훈이"].map((index, el) => {
    console.log("index :", index);
    console.log("el :", el);
    return `${index}어런이`;
  });

  return <></>;
}
