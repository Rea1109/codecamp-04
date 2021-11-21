// 최대공약수와 최소공배수
function solution(n, m) {
  let nArr = [];
  let mArr = [];
  let nmArr = [];
  let result = [];

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      nArr.push(i);
    }
  }

  for (let i = 0; i <= m; i++) {
    if (m % i === 0) {
      mArr.push(i);
    }
  }

  for (let item of nArr) {
    if (mArr.indexOf(item) !== -1) nmArr.push(item);
  }

  result.push(nmArr.sort((a, b) => a - b).pop());
  result.push((n * m) / result[0]);

  return result;
}
