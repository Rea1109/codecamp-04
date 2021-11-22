import Router from "next/router";
import { Component, createRef } from "react";
import MyComponent from "../../src/components/units/classcomponent";

interface IState {
  count: number;
}

export default class MyLifecycleRefPage extends Component {
  inputRef = createRef<HTMLInputElement>();
  state: IState = {
    count: 0,
  };

  componentDidMount() {
    console.log("마운트됨");
    this.inputRef.current?.focus();
  }

  componentDidUpdate() {
    console.log("수정됨");
    // console.log(this);
  }

  componentWillUnmount() {
    console.log("끝났음");
  }

  onClickCounter = () => {
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
    // this.inputRef.current?.focus();
  };

  onClickMove = () => {
    Router.push("/");
  };

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <div>현재카운트 : {this.state.count}</div>
        <button onClick={this.onClickCounter}>+</button>
        <button onClick={this.onClickMove}>페이지이동</button>
        <MyComponent count={this.state.count} />
      </>
    );
  }
}
