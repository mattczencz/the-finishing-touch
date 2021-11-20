import {Link} from "react-router-dom"
import '../../styles/brandlist.scss'

function BrandList(props) {
    const brands = props.brands

    const displayed = brands.map((item) => {
        return(
            <div className="type">
                <Link to={`/brand/${item}`}>{item}</Link>
            </div>
        )
    })

    return (
        <section className="brandlist">
            <h1>All Brands:</h1>
            {displayed}
        </section>
    )
}

export default BrandList