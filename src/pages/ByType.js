import Hero from "../components/Hero"
import ProductTypes from "../components/Sorted/ProductTypes"

function ByType(props) {
    return(
        <>
            <Hero text="BY TYPE"/>    
            <ProductTypes />
        </>
    )
}

export default ByType