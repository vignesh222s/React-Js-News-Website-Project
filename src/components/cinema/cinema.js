import React, { Component } from "react";
import axios from "axios";
class Header extends Component {
  state = {
    persons: []
  };
  componentDidMount() {
    axios.get(`./cinema.json`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  render() {
    let users = this.state.persons.map(product => {
      return (
        <div className="container">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="product">
                  <div className="product-image">
                    <img src={product.img} />
                  </div>
                  <h4 className="product-name">{product.body}</h4>
                </div>{" "}
              </div>
              <div className="flip-card-back">
                <h4>CINEMA NEWS</h4>
                <p>{product.body}</p>
              </div>
            </div>
          </div>
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
