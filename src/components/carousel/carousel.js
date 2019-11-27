import React from "react";
import "./carousel.css";
import axios from "axios";
import LTnews from "../LTnews/LTnews";
export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      currentIndex: 0,
      translateValue: 0
    };
  }
  componentDidMount() {
    axios.get(`./db.json`).then(res => {
      const images = res.data;
      this.setState({ images });
    });
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div>
        <div className="slider" style={{ width: "100%" }}>
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: "transform ease-out 0.45s"
            }}
          >
            {this.state.images.map((image, i) => (
              <Slide key={i} image={image.img} style={{ width: "100%" }} />
            ))}
          </div>

          <LeftArrow goToPrevSlide={this.goToPrevSlide} />

          <RightArrow goToNextSlide={this.goToNextSlide} />
        </div>
        <LTnews />
      </div>
    );
  }
}

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%"
  };
  return <div className="slide" style={styles}></div>;
};

const LeftArrow = props => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
};

const RightArrow = props => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
};
