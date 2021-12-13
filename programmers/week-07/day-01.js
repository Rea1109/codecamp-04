// 3진법 뒤집기
function solution(n) {
  n = n.toString(3).split("").reverse().join("");

  return parseInt(n, 3);
}
// 여러개의 수 최소 공배수 구하기
function solution(arr) {
  const biggest = Math.max(...arr);
  let sum = biggest;

  while (true) {
    let check = true;

    for (let i = 0; i < arr.length; i++) {
      if (sum % arr[i] !== 0) {
        check = false;
        break;
      }
    }

    if (check) {
      return sum;
    }

    sum += biggest;
  }
}
