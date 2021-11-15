//두개뽑아서 더하기
function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    // console.log(" ")
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        // console.log("numbers["+i+"]:"+numbers[i],"numbers["+j+"]"+numbers[j])
        if (answer.indexOf(numbers[i] + numbers[j]) === -1) {
          answer.push(numbers[i] + numbers[j]);
        }
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
