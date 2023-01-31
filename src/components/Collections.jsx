import "../styles/components/collections.css";
import { SiDatabricks, SiAddthis } from "react-icons/si";
import { IoFlameSharp } from "react-icons/io5";

const Collections = () => {
  return (
    <div className="collection-container">
      <div className="top-collections">
        <div className="collection-text">
          <h1>Top Collections</h1>
          <span>24hrs Volume</span>
        </div>
        <div className="collections">
          <div className="collction-items">
            <div className="averta-item1">
              <div className="averta">Averta</div>
              <div>
                <span>Onigiri Pepes</span>
                <p>1654.45ETH</p>
              </div>
            </div>
            <div className="averta-item2">
              <div className="databricks">
                <SiDatabricks />
              </div>
              <span>0.20</span>
            </div>
            <div className="averta-item3">
              <span>+81.93%</span>
            </div>
          </div>
          <div className="collction-items">
            <div className="averta-item1">
              <div className="averta">Averta</div>
              <div>
                <span>Onigiri Pepes</span>
                <p>1654.45ETH</p>
              </div>
            </div>
            <div className="averta-item2">
              <div className="databricks">
                <SiDatabricks />
              </div>
              <span>0.20</span>
            </div>
            <div className="averta-item3">
              <span>+81.93%</span>
            </div>
          </div>
          <div className="collction-items">
            <div className="averta-item1">
              <div className="averta">Averta</div>
              <div>
                <span>Onigiri Pepes</span>
                <p>1654.45ETH</p>
              </div>
            </div>
            <div className="averta-item2">
              <div className="databricks">
                <SiDatabricks />
              </div>
              <span>0.20</span>
            </div>
            <div className="averta-item3">
              <span>+81.93%</span>
            </div>
          </div>
          <button className="btn-explor">Explore</button>
        </div>
      </div>
      <div className="top-sellers">
        <div className="seller-text">
          <h1>Top Sellers</h1>
          <span>Ranking</span>
        </div>
        <div className="sellers">
          <div className="collction-items">
            <div className="averta-item1">
              <div className="averta">Averta</div>
              <div>
                <span>Onigiri Pepes</span>
                <p>1654.45ETH</p>
              </div>
            </div>
            <div className="averta-item2">
              <div className="databricks">
                <IoFlameSharp />
              </div>
              <span>0.20</span>
            </div>
            <div className="averta-item3">
              <span>
                <SiAddthis />
              </span>
            </div>
          </div>
          <div className="collction-items">
            <div className="averta-item1">
              <div className="averta">Averta</div>
              <div>
                <span>Onigiri Pepes</span>
                <p>1654.45ETH</p>
              </div>
            </div>
            <div className="averta-item2">
              <div className="databricks">
                <IoFlameSharp />
              </div>
              <span>0.20</span>
            </div>
            <div className="averta-item3">
              <span>
                <SiAddthis />
              </span>
            </div>
          </div>
          <div className="collction-items">
            <div className="averta-item1">
              <div className="averta">Averta</div>
              <div>
                <span>Onigiri Pepes</span>
                <p>1654.45ETH</p>
              </div>
            </div>
            <div className="averta-item2">
              <div className="databricks">
                <IoFlameSharp />
              </div>
              <span>0.20</span>
            </div>
            <div className="averta-item3">
              <span>
                <SiAddthis />
              </span>
            </div>
          </div>
          <button className="btn-discover">Discover</button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
