// 예산
function solution(d, budget) {
  let balance = budget;
  let result = 0;

  d.sort((a, b) => a - b).map((price) => {
    if (balance >= price) {
      balance -= price;
      result++;
    }
  });

  return result;
}
