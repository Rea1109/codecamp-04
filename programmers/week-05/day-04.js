//피보나치
function solution(n) {
  let fibonacci = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibonacci[i] =
      ((fibonacci[i - 2] % 1234567) + (fibonacci[i - 1] % 1234567)) % 1234567;
  }

  return fibonacci[n];
}
