
import '../styles/components/header.css'
const Header = ()=>{
    return(
        <div className="header-container">
            <div className="box-1">
                <div className="social-media"></div>
                <div className="text-section">
                    <p>
                        Discover, collect, create & sell extraodinary NFTs
                    </p>
                </div>
                <div className="button-section">
                <button className="explore">Explore</button>
                <button className="create">Create</button>
                
                </div>
                <span>text</span>
            </div>
            <div className="box-2">
                <img src="" alt="nft" />
            </div>
        </div>
    )
}

export default Header;