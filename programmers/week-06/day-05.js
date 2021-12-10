// ref code
function solution(board, moves) {
  let basket = [];
  let result = 0;

  moves.forEach((move, i) => {
    let check = false;

    board.forEach((location) => {
      const doll = location[move - 1];

      if (!check) {
        if (doll !== 0) {
          location[move - 1] = 0;

          if (basket[basket.length - 1] === doll) {
            result += 2;
            basket.splice(basket.length - 1, 1);
          } else {
            basket.push(doll);
          }
          check = true;
        }
      }
    });
  });
  return result;
}
