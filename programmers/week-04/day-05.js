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

  result.push(Math.max(...nmArr));
  result.push((n * m) / result[0]);

  return result;
}

//유클리드 호제법
function solution(n, m) {
  let a = m; //큰수
  let b = n; //작은수
  let r = 0; // a%b 값

  while (a % b > 0) {
    r = a % b;
    a = b; //큰수에 작은수를 할당
    b = r; //작은수에 나머지 값 할당
  }
  return [b, (n * m) / b];
}
