//내적
function solution(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}

//제일 작은수 제거
function solution(arr) {
  let temp = [...arr];

  let num = temp.sort((a, b) => b - a).pop();

  arr = arr.filter((el) => el !== num);

  return arr.length !== 0 ? arr : [-1];
}
