import Product from "../Product";

function TopRated(props) {
    const loaded = () => {
        // Array to hold reduced list
        const topFive = []
        // Variable to hold a new array of only items with rating of 5
        const topItems = props.allMakeup.filter((item) => {
            return item.rating === 5;
        })

        for(let i = 0; i < 10; i++){
            topFive.push(<Product key={topItems[i].id}{...topItems[i]}/>) 
        }

        return topFive
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <h1>Top Rated:</h1>
            {props.allMakeup ? loaded() : loading()}
        </section>
    )
}

export default TopRated