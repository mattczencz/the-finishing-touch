import { useState} from "react";


function CartItem ({product,updateCart,deleteCart}) {

    const[item, setItem] = useState (product)


    const handleChange = event => {
        setItem({ ...item, [event.target.name]: event.target.value })
    }

    const removeItem = () => {
        deleteCart(item._id)
    }
    const handleIncrement = (event) => {
        item.quantity= item.quantity +1
        event.preventDefault()
        updateCart(item, item._id)
      };
      const handleDecrement = (event) => {
        if (item.quantity > 1) {
            item.quantity = item.quantity - 1} 
            else {item.quantity = 1 }
        event.preventDefault()
        updateCart(item, item._id)
      };

    return (
        <div className="item">
            <div className="item_pic">
                <img src={item.imagen_link} alt={item.name} />
            </div>
            <div className="item_description">
                <h3>{item.brand} - {item.name}</h3>
                <p>Price : {item.price.toFixed(2)}</p>
            </div>
            <div className="item_form">
                <button onClick={handleDecrement}>-</button>
                <input 
                    type="number"
                    min="1"
                    value={item.quantity}
                    name="quantity"
                    onChange={handleChange}
                    />
                <button onClick={handleIncrement}>+</button>
                <button onClick={removeItem}>Delete</button>  
            </div>

        </div>
        );
}
 
 
export default CartItem