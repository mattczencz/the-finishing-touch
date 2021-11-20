import '../styles/hero.scss'
function Hero(props) {
    return (
        <div className="hero">
            <h1>{props.text}</h1>
        </div>  
    )
}

export default Hero