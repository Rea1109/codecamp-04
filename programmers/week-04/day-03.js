// 행렬의 덧셈
function solution(arr1, arr2) {
  let result = [...arr1];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return result;
}

function mento(arr1, arr2) {
  let result = arr1.map((num1, i) => {
    return num1.map((num2, j) => {
      return num2 + arr2[i][j];
    });
  });
  return result;
}
