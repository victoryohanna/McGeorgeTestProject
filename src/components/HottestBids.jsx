import "../styles/components/hottestBids.css";
import { IoFlameSharp } from "react-icons/io5";
import { RxEyeOpen } from "react-icons/rx";
import NFTsHottestBids from "./hottestbid";

const Hottest = () => {
  const hottestbid = NFTsHottestBids;
  return (
    <div className="hottestbids-container">
      <div className="info-title">
        <div className="info-text">
          <h1>Hottest Bids</h1>
        </div>
        <div className="info-timer">
          <label>
            <span id="day1">1day</span>
            <span>7days</span>
            <span>30days</span>
          </label>
        </div>
      </div>
      <div className="hottestbids">
        {hottestbid.map((item, index) => {
          return (
            <div className="hottestbids-wrap" key={index}>
              <div className="left-items1">
                <div className="averta">
                  <img src={item.averta} alt="" />
                </div>
                <div className="bids-text">
                  <span>{item.name}</span>
                  <p>
                    <RxEyeOpen /> {item.views}
                  </p>
                </div>
              </div>
              <div className="left-items2">
                <div className="flem-icon">
                  <IoFlameSharp />
                </div>
                <div className="bids-text">
                  <span>{item.value}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn-hottest">
        <button type="button">Explore</button>
      </div>
    </div>
  );
};

export default Hottest;
