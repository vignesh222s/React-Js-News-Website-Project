import React, { Component } from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      body: ""
    };
    this.baseState = this.state;
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentWillReceiveProps(newprops) {
    if (newprops.edit === true) {
      console.log("edit");
      this.setState(newprops.editdata);
    } else {
      this.setState(this.baseState);
    }
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <form>
          <p>{this.state.body}</p>
        </form>
      </div>
    );
  }
}
export default App;
