// 하샤드 수
function solution(x) {
  let sum = 0;

  String(x)
    .split("")
    .map((cha) => {
      sum += Number(cha);
    });

  return x % sum === 0 ? true : false;
}
