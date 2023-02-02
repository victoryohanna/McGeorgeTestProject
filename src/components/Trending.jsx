import "../styles/components/trending.css";
import { IoFlameSharp } from "react-icons/io5";
import {AnimatedOnScroll} from "react-animated-css-onscroll";

import { 
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
} from "./index";

const Trending = () => {
  return (
    <div className="trending-container">
      <div className="trend-caption">
        <div className="trend-text">
          <h1>Trending</h1>
          <h1 className="lame">
            <IoFlameSharp />
          </h1>
        </div>
        <div className="trend-button">
          <button type="button">View All</button>
        </div>
      </div>
      <AnimatedOnScroll animationIn="slideInLeft">
      <div className="trend-img1 slide-left">
        <div className="img1">
          <img src={slide1} alt="" />
        </div>
        <div className="img2">
          <img src={slide2} alt="" />
        </div>
        <div className="img3">
          <img src={slide3} alt="" />
        </div>
        <div className="img4">
          <img src={slide4} alt="" />
        </div>
      </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationIn="slideInRight" >
      <div className="trend-img2 slide-right">
        <div className="img2">
          <img src={slide5} alt="" />
        </div>
        <div className="img3">
          <img src={slide6} alt="" />
        </div>
        <div className="img4">
          <img src={slide7} alt="" />
        </div>
        <div className="img5">
          <img src={slide8} alt="" />
        </div>
      </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default Trending;
