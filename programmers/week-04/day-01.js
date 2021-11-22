// 하샤드 수
function solution(x) {
  let sum = 0;

  String(x)
    .split("")
    .map((cha) => {
      sum += Number(cha);
    });

  return x % sum === 0;
}

function mento(x) {
  const sum = x
    .toString()
    .split("")
    .reduce((a, b) => {
      return Number(a) + Number(b);
    }, 0);
}
