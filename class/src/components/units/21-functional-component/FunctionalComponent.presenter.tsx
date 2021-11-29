interface IParmeter {
  count?: number;
}

export default function FunctionalComponentUI(props: IParmeter) {
  return <div>{props.count}</div>;
}
