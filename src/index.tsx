import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

var Switch = React.createClass({
  getInitialState: function() {
    return {
      time: "night"
    };
  },
  handleClick: function() {
    if (this.state.time === "night") {
      this.setState({ time: "day" });
    } else {
      this.setState({ time: "night" });
    }
  },
  render: function() {
    return (
      <div className="Switch" data-time={this.state.time}>
        <Toggle onClick={this.handleClick} time={this.state.time} />
      </div>
    );
  }
});

var Toggle = React.createClass({
  render: function() {
    return (
      <div
        onClick={this.props.onClick}
        data-time={this.props.time}
        className="Toggle"
      >
        <Button />
      </div>
    );
  }
});

var Button = React.createClass({
  render: function() {
    return <div className="Button" />;
  }
});

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div id="switch">
        <Switch />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
