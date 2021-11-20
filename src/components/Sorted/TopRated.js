import '../../styles/toprated.scss';
import Product from "../Product";

function TopRated(props) {
    const loaded = () => {
        // Array to hold reduced list
        const topRated = []
        // Variable to hold a new array of only items with rating of 5
        const topItems = props.allMakeup.filter((item) => {
            console.log(item)
            return item.rating === 5;
        })

        for(let i = 0; i < 10; i++){
            topRated.push(<Product key={topItems[i].id}{...topItems[i]}/>) 
        }

        return topRated
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <>
        <h1 className="title">Top Rated:</h1>
        <div className="toprated">
            {props.allMakeup ? loaded() : loading()}
        </div>
        </>
    )
}

export default TopRated