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
            <div className="item_descrip">
                <h3>{item.name}</h3>
                <h3>Brand : {item.brand}</h3>
                <h2>Price : {item.price}</h2>
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