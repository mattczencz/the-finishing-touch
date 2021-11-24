import "../styles/show.scss"
import ShowHero from '../components/ShowHero'

function Show(props) {
    const id = props.match.params.id
    const allMakeup = props.allMakeup
    const item = allMakeup.find(i => i.id.toString() === id)
    console.log(item)

    // Function for data to be loaded
    const loaded = () => {
        return(
            <>
            <ShowHero text={item.name} img={item.image_link} rating={item.rating} price={item.price}/>
            <div className="content">
                <p>{item.description}</p>
                <a href={item.product_link} target="_blank">Purchase This Product</a>
            </div>
        </>
        )
    }
    
    // Function for while data is loading
    const loading = () => (
        <h1>Loading...</h1>
    )

    return (
        <section>
            {allMakeup ? loaded() : loading()}
        </section>
    )
}

export default Show