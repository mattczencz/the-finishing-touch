import '../styles/hero.scss'
function ShowHero(props) {
    return (
        <div className="showhero">
            <div>
                <h1>{props.text}</h1>
                <h3>${props.price}</h3>
                <p>Rating: {props.rating} / 5</p>
            </div>
            
            <img src={props.img} alt={props.text} />
        </div>  
    )
}

export default ShowHero