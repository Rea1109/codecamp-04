// ref code
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }
    const word = lower.includes(s[i]) ? lower : upper;
    let index = word.indexOf(s[i]) + n;

    if (index >= 26) {
      index -= 26;
    }

    console.log(s[i], word, index);
    answer += word[index];
  }

  return answer;
}

function solution(s, n) {
  let answer = s
    .split("")
    .map((str) => {
      if (str === " ") {
        return str;
      }

      const word = lower.includes(str) ? lower : upper;
      let index = word.indexOf(str) + n;

      if (index >= 26) {
        index -= 26;
      }
      return word[index];
    })
    .join("");

  return answer;
}

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    let index = s[i].charCodeAt() + n;
    if (index > 122 || (index > 90 && index - n < 97)) {
      // Z(90) z(122) 이상 예외처리
      index -= 26;
    }
    console.log(s[i], index, String.fromCharCode(index));
    answer += String.fromCharCode(index);
  }
  return answer;
}
