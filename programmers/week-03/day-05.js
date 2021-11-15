//정수 제곱근 판별
function solution(n) {
  var answer = 0;
  for (let i = 1; i * i <= n; i++) {
    i * i === n ? (answer = Math.pow(i + 1, 2)) : (answer = -1);
  }
  return answer;
}
