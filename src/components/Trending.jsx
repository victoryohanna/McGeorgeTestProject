
import "../styles/components/trending.css";

import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';

import slide5 from '../assets/images/slide5.jpg';
import slide6 from '../assets/images/slide6.jpg';
import slide7 from '../assets/images/slide7.png';
import slide8 from '../assets/images/slide8.jpg';

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
      <div className="trend-img1 slide-left">
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
      <div className="trend-img2 slide-right">
        {/* <div className="img1">
          <img src="" alt=""></img>
        </div> */}
        <div className="img2">
          <img src={slide5} alt="" />
        </div>
        <div className="img3">
          <img src={slide6} alt="" />
        </div>
        <div className="img4">
          <img src={slide7} alt="" />
        </div>
        <div className="img5">
          <img src={slide8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Trending;
