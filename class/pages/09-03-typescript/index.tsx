export default function TypescriptPage() {
  // any
  let an: any;
  an = 123;
  an = "asdf";
  console.log(an);

  // 문자타입 - 타입추론
  let aaa = "안녕하세요";
  aaa = "asdf";
  console.log(aaa);

  // 문자타입
  let bbb: string;
  bbb = "asdf";
  bbb = "반갑습니다.";
  console.log(bbb);

  // 숫자타입
  const ccc: number = 5;
  console.log(ccc);

  // 배열타입
  // let ddd: number[] = [1, 2, 3, 4, 5, 6];
  // let eee: string[] = ["ab", "bc"];
  // let fff: number[] | string[]; //union type
  // fff = ["a", "b"];
  // let ggg: (number | string)[] = [1, "b", 23, "asdf"];

  // 객체타입
  interface IProfile {
    name: string;
    age: number | string;
    school: string;
  }

  const profile: IProfile = {
    name: "철수",
    age: 3,
    school: "다람쥐초등학교",
  };

  profile.age = "8살";

  return <div>타입스크립트 연습</div>;
}
