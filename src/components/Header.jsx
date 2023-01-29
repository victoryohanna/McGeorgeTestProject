import "../styles/components/header.css";
import { FaTwitter, FaAndroid } from "react-icons/fa";
import {RxEyeOpen} from 'react-icons/rx';
import {SiVuetify} from 'react-icons/si'
import {HiArrowLongRight, HiArrowLongLeft} from 'react-icons/hi'

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
        <div className="img-section">
          <div className="img-container">
          <img src="" alt="nft" />
          </div>
          
          <div className="info-views">
            <div className="rx-eye"><RxEyeOpen/>( 450K)</div>
            <div className="si-vue"><SiVuetify/> 0.908 ETH</div>
          </div>
          <div className="img-text">
            <h3>Project Woof</h3>
            <p>The world's first NFT for dogs. Created as a medium for dogs
              to feel human wothout the pressure of society
            </p>
          </div>
        </div>
        <div className="nav-section">
          <div className="left-arrow">
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
