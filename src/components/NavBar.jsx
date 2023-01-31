import "../styles/components/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left-items">
        <div className="nav-logo">
          <div className="nav-averta"></div>
          <h2>DStage</h2>
        </div>
        <div className="nav-searchbar">
          <input type="text" placeholder="Search Collections, NFTs or Seller" />
        </div>
      </div>
      <div className="right-items">
        <div className="nav-menu">
          <ul>
            <li>Explore</li>
            <li>Rewards</li>
            <li>P2P</li>
          </ul>
        </div>
        <div className="btn-nav">
          <button type="button">Connect</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
