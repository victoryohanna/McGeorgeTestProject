
import '../styles/components/category.css';
import {image2, image3, image4} from './index'

const Categories = ()=>{
    return(
        <div className="category-container">
            <div className="category-title">
                <h1>Browse by Category</h1>
            </div>
            <div className="category">
                <div className="items-category">
                    <div className="image-caategory">
                        <img src={image2} alt="" />
                    </div>
                    <div className='sub-title'><h2>Collectibles</h2></div>
                    <div className="description">
                        <p>Lost money holding shib? project shiba is a
                            way to stand in solidarity with others
                        </p>
                    </div>
                </div>

                <div className="items-category">
                    <div className="image-caategory">
                        <img src={image3} alt="" />
                    </div>
                    <div className='sub-title'><h2>Arts</h2></div>
                    <div className="description">
                        <p>Lost money holding shib? project shiba is a
                            way to stand in solidarity with others
                        </p>
                    </div>
                </div>

                <div className="items-category">
                    <div className="image-caategory">
                        <img src={image4} alt="" />
                    </div>
                    
                        <h2 className='sub-title'>Photography</h2>
                    
                    <div className="description">
                        <p>Lost money holding shib? project shiba is a
                            way to stand in solidarity with others
                        </p>
                    </div>
                </div>
            </div>
            <div className="btn-category">
                <button type='button'>All Categories</button>
            </div>
        </div>
    )
}

export default Categories;