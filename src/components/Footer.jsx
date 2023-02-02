import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "../styles/components/footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="search-info">
          <div className="search">
            <div className="logo-section">
              <div className="logo"></div>
              <Link to="/">
                <h2>DStage</h2>
              </Link>
            </div>
            <p>Get all the latest updates regarding NFTs</p>
            <div className="search-bar">
              <form className="form">
                <input type="text" />
                <button type="button">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="quick-links">
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Use</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <div className="copyright">
          <span>&copy;2022 DStage All rights reserved</span>
        </div>
        <div className="social-links">
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaLinkedin />
          </span>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaYoutube />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
