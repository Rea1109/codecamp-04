// 다트게임
const bouns = ["S", "D", "T"];

function solution(dartResult) {
  let answer = [];
  let score = "";

  dartResult.split("").forEach((el) => {
    if (!isNaN(el)) {
      score += el;
    } else if (bouns.includes(el)) {
      //Math.pow() 문자열 타입 숫자이면 자동으로 숫자로 변환 계산
      if (el === "D") score = Math.pow(score, 2);
      if (el === "T") score = Math.pow(score, 3);

      answer.push(Number(score));
      score = "";
    } else {
      if (el === "#") {
        answer[answer.length - 1] *= -1;
      } else {
        answer[answer.length - 1] *= 2;
        if (answer.length > 1) {
          answer[answer.length - 2] *= 2;
        }
      }
    }
  });

  return answer.reduce((el, cu) => {
    return el + cu;
  });
}
