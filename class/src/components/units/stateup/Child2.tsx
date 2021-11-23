interface IChild2 {
  count: number;
  onClickCounter: () => void;
}

export default function Child2(props: IChild2) {
  //   const [count, setCount] = useState(0);

  //   const onClickCounter = () => {
  //     setCount((prev) => prev + 1);
  //   };

  return (
    <>
      <div>Child2 Count : {props.count}</div>
      <button onClick={props.onClickCounter}>+</button>
    </>
  );
}
