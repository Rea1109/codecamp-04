interface IChild1 {
  count: number;
  onClickCounter: () => void;
}

export default function Child1(props: IChild1) {
  return (
    <>
      <div>Child1 Count : {props.count}</div>
      <button onClick={props.onClickCounter}>+</button>
    </>
  );
}
