import React, { Component } from "react";
import axios from "axios";
class Header extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`./story.json`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    let users = this.state.persons.map(product => {
      return (
        <div className="container">
          <div className="product">
            <div className="product-image">
              <img src={product.img} />
            </div>
            <p className="product-name">{product.title}</p>
            <div className="product-action">
              <button type="button">
                <a href={product.body}>Read story</a>
              </button>
            </div>
          </div>{" "}
        </div>
      );
    });

    return (
      <div
        className="products-wrapper"
        style={{
          background:
            "linear-gradient(to bottom right,#20183F 40%,#5555ff 100%)"
        }}
      >
        <div
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="div"
          className="products"
        >
          {users}
        </div>
      </div>
    );
  }
}

export default Header;
