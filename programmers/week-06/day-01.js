// ref code
function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost.filter((el) => !reserve.includes(el)).sort((a, b) => a - b);
  reserve = reserve.filter((el) => !losted.includes(el)).sort((a, b) => a - b);

  let result = n - lost.length;

  lost.forEach((el) => {
    if (reserve.includes(el - 1)) {
      result++;
      reserve.splice(reserve.indexOf(el - 1), 1);
    } else if (reserve.includes(el + 1)) {
      result++;
      reserve.splice(reserve.indexOf(el + 1), 1);
    }
  });

  return result;
}
