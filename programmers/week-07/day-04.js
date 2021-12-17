const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  new_id = new_id.toLowerCase();

  let answer = "";
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) {
      answer += new_id[i];
    }
  }

  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }

  if (answer[0] === ".") {
    answer = answer.substr(1);
  }

  function removeLastDot() {
    if (answer[answer.length - 1] === ".") {
      answer = answer.slice(0, answer.length - 1);
    }
  }
  removeLastDot();

  if (answer === "") {
    answer = "a";
  }

  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    removeLastDot();
  }

  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer[answer.length - 1]);
  }

  return answer;
}

// 메서드 이용

const filter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  new_id = new_id.toLowerCase();

  let answer = new_id.split("").filter((str) => filter.includes(str));

  answer = answer.filter(
    (str, i) => (str === "." && answer[i + 1] !== ".") || str !== "."
  );
  if (answer[0] === ".") {
    answer.splice(0, 1); // answer.shift()
  }

  const removeLastDat = () => {
    if (answer[answer.length - 1] === ".") {
      answer.splice(answer.length - 1, 1); // answer.pop()
    }
  };
  removeLastDat();

  if (answer.length === 0) {
    answer = ["a"];
  }

  if (answer.length > 15) {
    answer = answer.slice(0, 15);
    removeLastDat();
  }

  if (answer.length <= 2) {
    const add = new Array(3 - answer.length).fill(answer[answer.length - 1]);
    answer = answer.concat(add);
  }

  return answer.join("");
  // console.log(answer)
}
