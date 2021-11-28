//모의고사
function solution(answers) {
  let check = { one: 0, two: 0, three: 0 };
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let result = [];

  answers.map((el, idx) => {
    if (el === one[idx % 5]) check.one = check.one + 1;
    if (el === two[idx % 8]) check.two = check.two + 1;
    if (el === three[idx % 10]) check.three = check.three + 1;
  });
  let max = Math.max(...[check.one, check.two, check.three]);

  if (max === check.one) result.push(1);
  if (max === check.two) result.push(2);
  if (max === check.three) result.push(3);

  return result;
}
