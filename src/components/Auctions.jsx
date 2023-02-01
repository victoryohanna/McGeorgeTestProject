import "../styles/components/auctions.css";

import slide9 from '../assets/images/slide9.png';
import slide10 from '../assets/images/slide10.png';
import slide11 from '../assets/images/slide11.png';
import slide12 from '../assets/images/slide12.png';

import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';

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
        <div className="img1" >
          <img src={slide9} alt="" />
        </div>
        <div className="img2">
          <img src={slide10} alt="" />
        </div>
        <div className="img3">
          <img src={slide11} alt="" />
        </div>
        <div className="img4">
          <img src={slide12} alt="" />
        </div>
        {/* <div className="img5"></div> */}
      </div>
      <div className="auction-img2">

        <div className="img1">
          <img src={slide1} alt="" />
        </div>
        <div className="img2">
          <img src={slide2} alt="" />
        </div>
        <div className="img3">
          <img src={slide3} alt="" />
        </div>
        <div className="img4">
          <img src={slide4} alt="" />
        </div>
        {/* <div className="img5"></div> */}
      </div>
    </div>
  );
};

export default Auctions;
