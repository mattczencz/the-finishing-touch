import '../styles/hero.scss'
function Hero(props) {
    return (
        <div className="hero">
            <div className="hero-overlay">
                <h1>{props.text}</h1>
            </div>
        </div>  
    )
}

export default Hero