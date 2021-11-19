import {Link} from 'react-router-dom'

function Index(props) {
    // Function to run if data has loaded
    const loaded = () => {
        return props.allMakeup.map((item) => (
            <div key={item.id} className="product-card">
                <h2>{item.name}</h2>
                <p>{item.price_sign}{item.price}</p>
                <Link to={`/products/${item.id}`}>View More Details</Link>
            </div>
        ))
    }

    // Function to run if data is still loading
    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            {props.allMakeup ? loaded() : loading()}
        </section>   
    )
}

export default Index