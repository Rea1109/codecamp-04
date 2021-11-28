//숫자문자열과 영단어
function solution(s) {
  let word = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let temp = "";
  let change = "";

  if (isNaN(s)) {
    s.split("").forEach((cha) => {
      if (isNaN(cha)) {
        temp += cha;
        if (word.includes(temp)) {
          change += word.indexOf(temp);
          temp = "";
        }
      } else {
        change += cha;
      }
    });
  } else {
    return Number(s);
  }

  return Number(change);
}
