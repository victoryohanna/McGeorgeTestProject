
import "../styles/components/trending.css";
const Trending = ()=>{
    return(
        <div className="trending-container">
            <div className="trend-caption">
                <div className="caption-text">
                    <h2 >Trending</h2>
                    <button className="btn-view">View All</button>
                </div>
                <div className="trend-img">
                    <div className="img1"></div>
                    <div className="img2"></div>
                    <div className="img3"></div>
                    <div className="img4"></div>
                    <div className="img5"></div>
                </div>
                <div className="trend-img">
                    <div className="img1"></div>
                    <div className="img2"></div>
                    <div className="img3"></div>
                    <div className="img4"></div>
                    <div className="img5"></div>
                </div>
            </div>
        </div>
    )
}

export default Trending;