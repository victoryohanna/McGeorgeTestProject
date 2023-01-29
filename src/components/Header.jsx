import "../styles/components/header.css";
import { FaTwitter, FaAndroid } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <div className="box-1">
        <div className="text-section">
          <div className="social-media">
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaAndroid />
            </span>
          </div>
          Discover, collect, create & sell extraodinary NFTs
        </div>
        <div className="button-section">
          <button className="btn-explore">Explore</button>
          <button className="btn-create">Create</button>
        </div>
        <span className="nfts-total">256,000,000 NFTs</span>
      </div>
      <div className="box-2">
        <img src="" alt="nft" />
      </div>
    </div>
  );
};

export default Header;
