import "../styles/components/auctions.css";
import { IoFlameSharp } from "react-icons/io5";

import {
  slide1,
  slide2,
  slide3,
  slide4,
  slide9,
  slide10,
  slide11,
  slide12,
} from "./index";

const Auctions = () => {
  return (
    <div className="auctions-container">
      <div className="auction-caption">
        <div className="auction-text">
          <h1>Live Auctions</h1>
          <h1 className="lame"><IoFlameSharp/></h1>
        </div>
        <div className="auction-button">
          <button>View All</button>
        </div>
      </div>
      <div className="auction-img1">
        <div className="img1">
          <img src={slide9} alt="" />
        </div>
        <div className="img2">
          <img src={slide10} alt="" />
        </div>
        <div className="img3">
          <img src={slide11} alt="" />
        </div>
        <div className="img4">
          <img src={slide12} alt="" />
        </div>
        {/* <div className="img5"></div> */}
      </div>
      <div className="auction-img2">
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
        {/* <div className="img5"></div> */}
      </div>
    </div>
  );
};

export default Auctions;
