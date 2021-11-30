import { Link } from 'react-router-dom'
import '../styles/product.scss'

function Product(props) {
    return (
        <div className="product">
            <div className="name-area">
                <h3>{props.name}</h3>
            </div>
            <div className="img-area">
                <img src={props.image_link} alt="" />
            </div>
            <div className="link-area">
                <Link to={`/products/${props.id}`}>View Details</Link>
            </div>
        </div>
    )
}

export default Product