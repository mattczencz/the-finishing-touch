import Product from "../components/Product";
import '../styles/brandresults.scss';
function BrandResults(props) {
    // Array to hold matching brands
    const matchingBrand = []
    // Getting the brand form the params
    const brand = props.match.params.brand
    
    // Filter through allMakeup and only return ones that match the type
    const filteredBrands = props.allMakeup.filter((item) => {
        return item.brand === brand;
    })

    for(let item of filteredBrands) {
        matchingBrand.push(<Product key={item.id} {...item}/>)
    }

    return (
        <> 
            <h1 className="title">{brand} Products:</h1>
            <section className="brands">
                {matchingBrand}
            </section>
        </>
    )
}

export default BrandResults