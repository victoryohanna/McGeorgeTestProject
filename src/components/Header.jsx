import "../styles/components/header.css";
import { FaTwitter, FaAndroid } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import { SiVuetify } from "react-icons/si";
import { HiArrowLongRight, HiArrowLongLeft } from "react-icons/hi2";
import image1 from "../assets/images/Rectangle1.png";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-box">
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
      <div className="right-box">
        <div className="img-section">
          <div className="img-container">
            <img src={image1} alt="nft" />
          </div>
          <div className="info-views">
            <div className="rx-eye">
              <RxEyeOpen />
              <span> (450K)</span>
            </div>
            <div className="si-vue">
              <SiVuetify /> <span>0.908 ETH</span>
            </div>
          </div>
          <div className="img-text">
            <h3>Project Woof</h3>
            <p>
              The world's first NFT for dogs. Created as a medium for dogs to
              feel human wothout the pressure of society
            </p>
          </div>
        </div>
        <div className="nav-section">
          <ul className="pagination">
            <li className="page1">
              <span>1 </span>
            </li>
            <li className="page2">
              <span>2 </span>
            </li>
            <li className="page3">
              <span>3 </span>
            </li>
            <li className="page4">
              <span>4 </span>
            </li>
          </ul>

          <div className="nav-button">
            <button type="button">Previous</button>
            <button type="button">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
