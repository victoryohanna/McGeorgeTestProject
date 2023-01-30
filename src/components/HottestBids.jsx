import "../styles/components/hottestBids.css";

const Hottest = () => {
  return (
    <div className="hottest-container">
      <div className="info-title">
        <div className="info-text">
          <h1>Hottest Bids</h1>
        </div>
        <div className="info-timer">
          <input type="text" />
        </div>
      </div>
      <div className="info-body">
        <div className="hottestbid">
          <div className="bids">
            <div className="averta">Averta</div>
          </div>
          <div className="bids">
            <div className="averta">Averta</div>
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
