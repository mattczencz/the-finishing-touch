import '../../styles/producttypes.scss'

function ProductTypes(props) {
    // Array of different product types
    const types = ["Blush", "Bronzer", "Eyebrow", "Eyeliner", "Eyeshadow", "Foundation", "Lip liner", "Lipstick", "Mascara", "Nail polish"]


    const displayed = types.map((item) => {
        return(
            <div className="type">
                <h3>{item}</h3>
            </div>
        )
    })

    return (
        <section className="producttypes">
            <h1>Product Types:</h1>
            {displayed}
        </section>
    )
}

export default ProductTypes