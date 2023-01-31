import "../styles/components/hottestBids.css";
import { IoFlameSharp } from "react-icons/io5";
import { RxEyeOpen } from "react-icons/rx";

const Hottest = () => {
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
        <div className="hottestbids-left">
          <div className="left-items1">
            <div className="averta">Averta</div>
            <div className="bids-text">
              <span>CrowdSurfers</span>
              <p>
                <RxEyeOpen /> (405K)
              </p>
            </div>
          </div>
          <div className="left-items2">
            <div className="flem-icon">
              <IoFlameSharp />
            </div>
            <div className="bids-text">
              <span>0.98 ETH</span>
            </div>
          </div>
        </div>
        <div className="hottestbids-right">
          <div className="right-items1">
            <div className="averta">Averta</div>
            <div className="bids-text">
              <span>MRKS</span>
              <p>
                <RxEyeOpen /> (222K)
              </p>
            </div>
          </div>
          <div className="right-items2">
            <div className="flem-icon">
              <IoFlameSharp />
            </div>
            <div className="bids-text">
              <span>0.325 ETH</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hottestbids">
        <div className="hottestbids-left">
          <div className="left-items1">
            <div className="averta">Averta</div>
            <div className="bids-text">
              <span>CrowdSurfers</span>
              <p>
                <RxEyeOpen /> (405K)
              </p>
            </div>
          </div>
          <div className="left-items2">
            <div className="flem-icon">
              <IoFlameSharp />
            </div>
            <div className="bids-text">
              <span>0.98 ETH</span>
            </div>
          </div>
        </div>
        <div className="hottestbids-right">
          <div className="right-items1">
            <div className="averta">Averta</div>
            <div className="bids-text">
              <span>MRKS</span>
              <p>
                <RxEyeOpen /> (222K)
              </p>
            </div>
          </div>
          <div className="right-items2">
            <div className="flem-icon">
              <IoFlameSharp />
            </div>
            <div className="bids-text">
              <span>0.325 ETH</span>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-hottest">
        <button type="button">Explore</button>
      </div>
    </div>
  );
};

export default Hottest;
