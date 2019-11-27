import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from "antd";
import axios from "axios";
import Emovie from "./emovie";
export default class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios.get(`./movie.json`).then(res => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <h2>Upcoming Tamilmovies </h2>

        <Slider {...settings}>
          {this.state.users.map(todo => (
            <div className="col-md-3">
              <Card
                hoverable
                style={{}}
                cover={<img alt="example" src={todo.img} />}
              >
                <h3>{todo.title} </h3>
              </Card>
            </div>
          ))}
        </Slider>

        <Emovie />
      </div>
    );
  }
}
