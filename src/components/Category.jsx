
import '../styles/components/category.css';

const Categories = ()=>{
    return(
        <div className="category-container">
            <div className="category-title">
                <h1>Browse by Category</h1>
            </div>
            <div className="category">
                <div className="items-category">
                    <div className="image-caategory"></div>
                    <div className='sub-title'><h2>Collectibles</h2></div>
                    <div className="description">
                        <p>Lost money holding shib? project shiba is a
                            way to stand in solidarity with others
                        </p>
                    </div>
                </div>

                <div className="items-category">
                    <div className="image-caategory"></div>
                    <div className='sub-title'><h2>Arts</h2></div>
                    <div className="description">
                        <p>Lost money holding shib? project shiba is a
                            way to stand in solidarity with others
                        </p>
                    </div>
                </div>

                <div className="items-category">
                    <div className="image-caategory"></div>
                    <div className='sub-title'><h2>Photography</h2></div>
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