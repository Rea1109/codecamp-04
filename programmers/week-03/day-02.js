//자연수 뒤집어 배열로 만들기
function solution(n) {
  var answer = [];
  String(n)
    .split("")
    .map((cha) => {
      answer.unshift(Number(cha));
    });
  return answer;
}

//나누어떨어지는 숫자배열
function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((num) => num % divisor === 0);
  if (answer.length === 0) answer.push(-1);
  return answer.sort((a, b) => a - b);
}

function solution(arr, divisor) {
  var answer = arr.filter((num) => num % divisor === 0);
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
