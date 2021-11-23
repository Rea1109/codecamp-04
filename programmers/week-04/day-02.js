//내적
function solution(a, b) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }
  return result;
}

function mento(a, b) {
  const answer = a.reduce((el, cu, i) => {
    return el + cu * b[i];
  }, 0);

  return answer;
}

//제일 작은수 제거
function solution(arr) {
  let temp = [...arr];
  let min = temp.sort((a, b) => b - a).pop();
  arr = arr.filter((el) => el !== min);
  return arr.length !== 0 ? arr : [-1];
}

function mento(arr) {
  let min = Math.min(...arr);
  arr = arr.filter((el) => el !== min);
  return arr.length !== 0 ? arr : [-1];
}
