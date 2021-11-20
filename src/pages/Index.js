import {Link} from 'react-router-dom'
import '../styles/main.scss'
import '../styles/index.scss'
// Importing different Lists for Home Page content
import TopRated from '../components/Sorted/TopRated';
import ProductTypes from '../components/Sorted/ProductTypes';
// Importing individual Product
import Product from '../components/Product';

// Importing components for home page
import Hero from '../components/Hero';


function Index(props) {
    // Function to run if data has loaded
    const loaded = () => {
        // const allItems = props.allMakeup.map((item) => (   
        //     <Product key={item.id} {...item}/>
        // ))
        
        return (
            <>
                <Hero/>
                <section className="home-content">
                    <TopRated allMakeup={props.allMakeup}/>
                    <ProductTypes />
                    {/* {allItems} */}
                </section>
            </>
        )
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