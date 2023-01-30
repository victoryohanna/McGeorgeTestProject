import "../styles/components/auctions.css";

const Auctions = () => {
  return (
    <div className="auctions-container">
      <div className="auction-caption">
        <div className="auction-text">
          <h2>Live Auctions</h2>
        </div>
        <div className="auction-button">
          <button>View All</button>
        </div>
      </div>
      <div className="auction-img1">
        <div className="img1"></div>
        <div className="img2"></div>
        <div className="img3"></div>
        <div className="img4"></div>
        <div className="img5"></div>
      </div>
      <div className="auction-img2">
        <div className="img1"></div>
        <div className="img2"></div>
        <div className="img3"></div>
        <div className="img4"></div>
        <div className="img5"></div>
      </div>
    </div>
  );
};

export default Auctions;
