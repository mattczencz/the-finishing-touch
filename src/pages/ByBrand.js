import Hero from "../components/Hero"
import BrandList from "../components/Sorted/BrandList"

function ByBrand(props) {
    // Array to hold brands that are mappe
    const brands = []

    // Loop through allMakeup items.brand, if it isn't the same as the one before it, add it
    for(let item of props.allMakeup) {
        if(item.brand !== null){
            if (!brands.includes(item.brand)){
                brands.push(item.brand)
            }
        }
    }

    console.log(brands)

    return(
        <>
            <Hero text="SHOP BY BRAND"/>    
            <BrandList brands={brands} />
        </>
    )
}

export default ByBrand