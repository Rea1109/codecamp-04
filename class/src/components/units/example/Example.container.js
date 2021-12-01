import ExampleUI from "./Example.presenter";
function Example(props) {
  return <ExampleUI isEdit={props.isEdit} />;
}

export default Example;
