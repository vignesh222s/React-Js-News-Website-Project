import React, { Component } from "react";
import { Drawer } from "antd";
import Dr from "./dr";
import "./LTnews.css";
import axios from "axios";
class Header extends Component {
  state = {
    persons: [],
    edit: false,
    visible: false,
    editdata: {}
  };

  componentDidMount() {
    axios.get(`./news.json`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  editdata = e => {
    this.setState({
      visible: true,
      edit: true,
      editdata: e
    });
  };

  render() {
    let users = this.state.persons.map(item => {
      return (
        <div className="container">
          <div className="product">
            <div className="product-image">
              <img src={item.img} />
            </div>
            <div className="product-action">
              <button type="button" onClick={this.editdata.bind(this, item)}>
                Read news
              </button>

              <Drawer
                title=""
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                width={380}
              >
                <Dr
                  closemodal={this.handleOk}
                  edit={this.state.edit}
                  editdata={this.state.editdata}
                />
              </Drawer>
            </div>
          </div>{" "}
        </div>
      );
    });

    return (
      <div
        className=""
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
