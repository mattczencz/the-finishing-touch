import { Link } from 'react-router-dom'

function Product(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <Link to={`/products/${props.id}`}>View More Details</Link>
        </div>
    )
}

export default Product