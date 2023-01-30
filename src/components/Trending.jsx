
import "../styles/components/trending.css";

const Trending = () => {
  return (
    <div className="trending-container">
      <div className="trend-caption">
        <div className="trend-text">
          <h2>Trending</h2>
        </div>
        <div className="trend-button">
          <button type="button">View All</button>
        </div>
      </div>

      <div className="trend-img1">
        <div className="img1"></div>
        <div className="img2"></div>
        <div className="img3"></div>
        <div className="img4"></div>
        <div className="img5"></div>
      </div>
      <div className="trend-img2">
        <div className="img1"></div>
        <div className="img2"></div>
        <div className="img3"></div>
        <div className="img4"></div>
        <div className="img5"></div>
      </div>
    </div>
  );
};

export default Trending;
