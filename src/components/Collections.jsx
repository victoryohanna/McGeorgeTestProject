import "../styles/components/collections.css";

const Collections = () => {
  return (
    <div className="collection-container">
      <div className="top-collections">
        <div>
          <h1>Top Collections</h1>
        </div>
        <span>24hrs Volume</span>
        <div className="collections">
          <div className="averta">Averta</div>
          <soan>Item Name</soan>
        </div>

        <button className="btn-explore">Explore</button>
      </div>
      <div className="top-sellers">
        <div>
          <h1>Top Sellers</h1>
        </div>
        <span>Ranking</span>
        <div className="sellers">
          <div className="averta">Averta</div>
        </div>

        <button className="btn-discover">Discover</button>
      </div>
    </div>
  );
};

export default Collections;
