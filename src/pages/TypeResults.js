import Product from "../components/Product"
import '../styles/productresults.scss'

function TypeResults(props) {
    // Array to hold the products that match the type
    const matchingTypes = []
    // Set the type to be that of the url param
    const type = props.match.params.type

    // Filter through allMakeup and only return ones that match the type
    const filteredMakeup = props.allMakeup.filter((item) => {
        return item.product_type === type;
    })

    for(let item of filteredMakeup) {
        matchingTypes.push(<Product key={item.id} {...item}/>)
    }

    return (
        <>
        <h1 className="title">{type} Products:</h1>
        <section className="types">
            {matchingTypes}
        </section>
        </>
    )
}

export default TypeResults