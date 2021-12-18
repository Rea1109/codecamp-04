const [leftNumbers, rightNumbers] = [
  [1, 4, 7],
  [3, 6, 9],
]; // 비구조화 할당

function solution(numbers, hand) {
  const current = {
    left: 10, // *
    right: 12, // #
  };

  const answer = numbers.map((num) => {
    if (leftNumbers.includes(num)) {
      current["left"] = num;
      return "L";
    } else if (rightNumbers.includes(num)) {
      current["right"] = num;
      return "R";
    } else {
      const centerObj = { ...current };

      Object.entries(centerObj).forEach((el) => {
        const hand = el[0];

        num = num === 0 ? 11 : num;
        let location = Math.abs(num - el[1]);

        if (location > 2) {
          location = Math.trunc(location / 3) + (location % 3);
        }

        centerObj[hand] = location;
      });

      if (centerObj["left"] === centerObj["right"]) {
        current[hand] = num;
        return hand === "right" ? "R" : "L";
      } else {
        if (centerObj["left"] > centerObj["right"]) {
          current["right"] = num;
          return "R";
        } else {
          current["left"] = num;
          return "L";
        }
      }
    }
  });

  return answer.join("");
}
