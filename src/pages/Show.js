import { useState } from "react";
import "../styles/show.scss"
import ShowHero from '../components/ShowHero'

function Show(props) {
    const id = props.match.params.id
    const allMakeup = props.allMakeup
    const item = allMakeup.find(i => i.id.toString() === id)
    console.log(item)

    const [newForm, setNewForm] = useState({
        brand: "",
        name: "",
        quantity: 0,
        price: 0,
        imagen_link: "",
        description: "",
        product_type: "",
        tag_list: "",
    })
    const handleChange =()=>{
       
        setNewForm({ brand : item.brand,
            name: item.name,
            quantity: newForm.quantity + 1,
            price: item.price,
            imagen_link: item.image_link,
            description: item.description,
            product_type: item.product_type,
            tag_list:item.tag_list
            });
        addItem(newForm)
        
    }


    

    const URL = "https://the-finishing-touch.herokuapp.com/cart/";

    const addItem = async (newForm) => {
        await fetch(URL, {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newForm),
        })
    }

    // Function for data to be loaded
    const loaded = () => {
       
        return(
            <>
            <ShowHero text={item.name} img={item.image_link} rating={item.rating} price={item.price}/>
            <div className="content">
                <p>{item.description}</p>
                <a href={item.product_link} target="_blank">Purchase This Product</a>
                <button onclick={handleChange}>Add To Cart</button>
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