/* eslint-disable no-unused-vars */
// 1. 문자
function getString(arg: string): string {
  return arg;
}
const result1 = getString("철수");

// 2. 숫자
function getNumber(arg: number): number {
  return arg;
}
const result2 = getNumber(8);

// 3. 모두(any)
function getAny(arg: any): any {
  return arg;
}
const result31 = getAny(8);
const result32 = getAny("asdf");
const result33 = getAny(true);

// 4. 모두(generic)
function getGeneric<T>(arg: T): T {
  return arg;
}
const result41 = getGeneric(8);
const result42 = getGeneric("hello");
const result43 = getGeneric(false);

// 5. 모두(any) - 응용
function getReverse(arg1: any, arg2: any, arg3: any): any[] {
  return [arg3, arg2, arg1];
}
const result51 = getReverse("철수", "다람쥐초", 8);
const result52 = getReverse("영희", 123, 1325125);

// 6. 모두(generic) - 응용
// prettier-ignore
function getReverseT<T1,T2,T3>(arg1:T1,arg2:T2,arg3:T3): [T3,T2,T1] {
    return[arg3,arg2,arg1]
}
const result61 = getReverseT("철수", "공룡초", 9);
const result62 = getReverseT(13, "영희", "토끼초");

// 7. 모두(generic) - 축약
// prettier-ignore
function getReverseTUV<T,U,V>(arg1:T,arg2:U,arg3:V): [V,U,T] {
    return[arg3,arg2,arg1]
}
const result71 = getReverseTUV("철수", "공룡초", 9);
const result72 = getReverseTUV(13, "영희", "토끼초");
