const FRUITS = [
  { number: 1, title: "레드향" }, // <div>1 레드향</div>
  { number: 2, title: "샤인머스켓" }, // <div>2 샤인머스켓</div>
  { number: 3, title: "산청딸기" }, // <div>3 산청딸기</div>
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

export default function FruitsPage() {
  // const aaa = [<div>1.레드향</div>, <div>2.샤인머스켓</div>, <div>3.산청딸기</div>]
  // const fruits = FRUITS.map((el) => (
  //     <div>{el.number} {el.title}</div>
  // ))

  const top5 = FRUITS.filter((el) => el.number <= 5);

  console.log(top5);

  return (
    <div>
      {FRUITS.map((el) => (
        <div key={el.number}>
          {el.number} {el.title}
        </div>
      ))}
      <div>
        <h3>top 5</h3>
        {top5.map((el) => (
          <div key={el.number}>{el.title}</div>
        ))}
      </div>
      <table border="1">
        <th>테이블</th>
        <th>만들기</th>
        <tr>
          {/* 첫번째줄 */}
          <td>1row-1column</td>
          <td>1row-2column</td>
        </tr>
        <tr>
          {/* 두번째줄 */}
          <td>2row-1coloumn</td>
          <td>2row-2column</td>
        </tr>
      </table>

      <input type="checkbox" checked="true" />
      <input type="checkbox" checked="true" />
      <input type="checkbox" checked="true" />
    </div>
  );
}
