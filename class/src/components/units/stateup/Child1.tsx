interface IChild1 {
  count: number;
}

export default function Child1(props: IChild1) {
  //   const [count, setCount] = useState(0);

  //   const onClickCounter = () => {
  //     setCount((prev) => prev + 1);
  //   };

  return (
    <>
      <div>Child1 Count : {props.count}</div>
      <button onClick={props.onClickCounter}>+</button>
    </>
  );
}
