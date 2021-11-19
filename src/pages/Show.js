function Show(props) {
    // Breakdown props
    const id = props.match.params.id
    const allMakeup = props.allMakeup
    const item = allMakeup.find(i => i.id === id)

    console.log(id)
    // Function for data to be loaded
    const loaded = () => (
        <div>
            <img src={item.image_link} alt={item.name} />
            <h1>{item.name}</h1>
            <p>{item.price_sign}{item.price}</p>
        </div>
    )

    const loading = () => (
        <h1>Loading...</h1>
    )

    return (
        <section>
            {props.allMakeup ? loaded() : loading()}
        </section>
    )
}

export default Show