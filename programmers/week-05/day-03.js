// 폰켓몬
function solution(nums) {
  let a = new Set(nums);
  let b = [...a];

  return nums.length / 2 > b.length ? b.length : nums.length / 2;
}
