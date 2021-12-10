//import logo from './logo.svg';
import "./App.css";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
    };
  }

  render() {
    const increment = () => {
      this.setState({ data: this.state.data + 1 });
    };
    const decrement = () => {
      this.setState({ data: this.state.data - 1 });
    };
    return (
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <Data data={this.state.data} />
      </div>
    );
  }
}

class Data extends React.Component {
 
  componentDidMount() {
    console.log("component did mount");
  }
  componentWillReceiveProps() {
    console.log("component will receive props");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate() {
    console.log("component will update");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    return (
      <div>
        <h3>{this.props.data}</h3>
      </div>
    );
  }
}
