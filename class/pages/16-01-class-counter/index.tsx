import { Component } from "react";
import MyComponent from "../../src/components/units/classcomponent";

interface IState {
  count: number;
}

export default class MyCounterPage extends Component {
  state: IState = {
    count: 0,
  };

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <>
        <div>현재카운트 : {this.state.count}</div>
        <button onClick={this.onClickCounter}>+</button>
        <MyComponent count={this.state.count} />
      </>
    );
  }
}
