import {Link} from "react-router-dom"
import '../../styles/producttypes.scss'

function ProductTypes(props) {
    // Array of different product types
    const types = [
        {
            name: "Blush",
            call: "blush"
        },
        {
            name: "Bronzer",
            call: "bronzer"
        },
        {
            name: "Eyebrow",
            call: "eyebrow"
        },
        {
            name: "Eyeliner",
            call: "eyeliner"
        },
        {
            name: "Eyeshadow",
            call: "eyeshadow"
        },
        {
            name: "Foundation",
            call: "foundation"
        },
        {
            name: "Lip liner",
            call: "lip_liner"
        },
        {
            name: "Lipstick",
            call: "lipstick"
        },
        {
            name: "Mascara",
            call: "mascara"
        },
        {
            name: "Nail polish",
            call: "nail_polish"
        },
    ]


    const displayed = types.map((item) => {
        return(
            <div className="type">
                <Link to={`/type/${item.call}`}>{item.name}</Link>
            </div>
        )
    })

    return (
        <>
            <h1 className="title">Product Types:</h1>
            <section className="producttypes">
                {displayed}
            </section>
        </>
    )
}

export default ProductTypes