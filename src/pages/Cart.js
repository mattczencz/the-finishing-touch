import CartItem from '../components/Cart/CartItem';
import {useEffect, useState} from "react";


function Cart(props) {
    const[cart, setCart] = useState (null);
    const URL = "http://localhost:4000/cart/";

    const getCart = async() => {
        const response = await fetch(URL);
        const data = await response.json();
        setCart(data);
    };

    const updateCart = async (item, id) => {

        // put request to update Item
        await fetch(URL + id, {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        })
        // update Cart
        getCart()
      };

    const deleteCart = async id => {

        // delete request of the Item
        await fetch(URL + id, {
          method: "delete",
        })
        // update cart
        getCart()
      }

      useEffect(() => getCart(), []);
   
    const loaded = () => {
        return ( 
            <div >
                <h1>Cart</h1>
                <p>This is the Cart Page.</p>
                <div className="cart">           
                {cart.length > 0 ?
                    cart.map((product,index)=>{
                        return (
                            <CartItem key={index} product={product} updateCart={updateCart} deleteCart={deleteCart} />
                            )}) 
                            :
                            <h2>Your cart is empty</h2>
                }
                <button>Checkout</button>
                </div> 
            </div>  
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return cart? loaded() : loading()
}

 
export default Cart