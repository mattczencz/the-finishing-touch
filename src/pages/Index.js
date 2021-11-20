import {Link} from 'react-router-dom'
import '../styles/main.scss'
import TopRated from '../components/Sorted/TopRated';
import Product from '../components/Product';

function Index(props) {
    // Function to run if data has loaded
    const loaded = () => {
        const allItems = props.allMakeup.map((item) => (   
            <Product key={item.id} {...item}/>
        ))
        
        return (
            <section>
                <TopRated allMakeup={props.allMakeup}/>
                {allItems}
            </section>
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