import '../styles/main.scss'
import '../styles/index.scss'
// Importing different Lists for Home Page content
import TopRated from '../components/Sorted/TopRated';
import ProductTypes from '../components/Sorted/ProductTypes';

// Importing components for home page
import Hero from '../components/Hero';


function Index(props) {
    // Function to run if data has loaded
    const loaded = () => {   
        return (
            <>
                <Hero text="All works of art need a finishing touch"/>
                <section className="home-content">
                    <TopRated allMakeup={props.allMakeup}/>
                    <ProductTypes />
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