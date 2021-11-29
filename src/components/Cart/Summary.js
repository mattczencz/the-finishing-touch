import "../styles/summary.scss"

function Summary (props) {

    var itemCount = props.cart.reduce((total, item) => total + item.quantity, 0);
    var total = props.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    const deleteAllCart = () => {
        return props.cart.map(item => props.deleteCart(item._id))
    }

    const checkoutCart = () => {
        return (
                props.cart.map(item => props.deleteCart(item._id)),
                alert("Checkout Was Made Succesful")
        )     
    }

    return (
        <div className="summary_description">
                <div className="summary_total">
                    <p>Total Items</p>
                    <h3>{itemCount}</h3>
                    <p>Total Payment</p>
                    <h3 >{total}</h3>
                </div>
               
                <div className="summary_buttons">
                    <button onClick={checkoutCart}>CHECKOUT</button>
                    <button onClick={deleteAllCart}>CLEAR</button>
                </div>
            </div>)
}
export default Summary