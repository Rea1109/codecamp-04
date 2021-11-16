//문자열 내 p와 y의 개수
function solution(s) {
  let pCount = 0;
  let yCount = 0;

  for (let cha of s.toLowerCase()) {
    if (cha === "p") pCount++;
    if (cha === "y") yCount++;
  }

  return pCount === yCount;
}

function solution(s) {
  const check = {};
  const answer = s
    .toLowerCase()
    .split("")
    .forEach((str) => {
      check[str] === undefined ? (check[str] = 1) : (check[str] += 1);
    });
  return check.p == check.y;
}

// 이상한 문자 만들기
function solution(s) {
  var answer = "";

  s.split(" ").map((str, idx) => {
    if (idx > 0) answer += " ";

    for (let i = 0; i < str.length; i++) {
      i % 2 === 0
        ? (answer += str[i].toUpperCase())
        : (answer += str[i].toLowerCase());
    }
  });
  return answer;
}

function solution(s) {
  const answer = s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((cha, i) => {
          return i % 2 === 0 ? cha.toUpperCase() : cha.toLowerCase();
        })
        .join("");
    })
    .join(" ");

  return answer;
}
