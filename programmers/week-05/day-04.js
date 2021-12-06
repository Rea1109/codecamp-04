//피보나치
function solution(n) {
  let fibonacci = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibonacci[i] =
      ((fibonacci[i - 2] % 1234567) + (fibonacci[i - 1] % 1234567)) % 1234567;
  }

  return fibonacci[n];
}

// ref code
function solution(n) {
  let prev = 0; // 0번째 피보나치 수의 결과
  let next = 1; // 1번째 피보나치 수의 결과
  let sum = prev + next; // 0 + 1 = 1;
  
  const result = new Array(n - 1)
                  .fill(1)
                  .reduce( el => {
                      sum = (prev + el) % 1234567
                      prev = el
                      next = sum;
                      
                      return sum;
                  }, sum)
  return result;
}
