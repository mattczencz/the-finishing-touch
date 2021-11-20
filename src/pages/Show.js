function Show(props) {
    // Breakdown props
    const id = props.match.params.id
    
    // const allMakeup = props.allMakeup
    // const item = allMakeup.find(i => i.id === id)
    console.log(id)

    // Function for data to be loaded
    const loaded = () => {
        return(
        <div>
            <h1>Hello</h1>
        </div>
        )
    }
        
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