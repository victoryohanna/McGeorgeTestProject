import "../styles/components/collections.css";
import { SiDatabricks, SiAddthis } from "react-icons/si";
import { IoFlameSharp } from "react-icons/io5";
import NFTsTopCollections from './topCollections';
import NFTsTopSellers from './topSellers';

const Collections = () => {
  const topCollections = NFTsTopCollections;
  const topSellers = NFTsTopSellers;
  return (
    <div className="collection-container">
      <div className="top-collections">
        <div className="collection-text">
          <h1>Top Collections</h1>
          <span>24hrs Volume</span>
        </div>
        <div className="collections">
          {
            topCollections.map((item, index)=>{
              return(
                <div className="collction-items" key={index}>
            <div className="averta-item1">
              <div className="averta">Averta</div>
              <div>
                <span>{item.name}</span>
                <p>{item.value}</p>
              </div>
            </div>
            <div className="averta-item2">
              <div className="databricks">
                <SiDatabricks />
              </div>
              <span>{item.qnty}</span>
            </div>
            <div className="averta-item3">
              <span>{item.figure}%</span>
            </div>
          </div>
              )
            })
          }
          <button className="btn-explor">Explore</button>
        </div>
      </div>
      <div className="top-sellers">
        <div className="seller-text">
          <h1>Top Sellers</h1>
          <span>Ranking</span>
        </div>
        <div className="sellers">
          {
            topSellers.map((item, index)=>{
              return(
                <div className="collction-items" key={index}>
            <div className="averta-item1">
              <div className="averta">Averta</div>
              <div>
                <span>{item.name}</span>
                <p>{item.value}</p>
              </div>
            </div>
            <div className="averta-item2">
              <div className="databricks">
                <IoFlameSharp />
              </div>
              <span>{item.status}</span>
            </div>
            <div className="averta-item3">
              <span>
                <SiAddthis />
              </span>
            </div>
          </div>
              )
            })
          }
          
          <button className="btn-discover">Discover</button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
