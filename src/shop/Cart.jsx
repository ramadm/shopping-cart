const CartItem = ({ item, quantity }) => {
    return (
        <div className="cartItem">
            <img src={item.image} />
            <div className="cartText">
                <h3 className="overflow">{item.title}</h3>
                <h3>Quantity: {quantity}</h3>
                <h3>Price: ${item.price}</h3>
            </div>
        </div>
    );
};

const Cart = ({ items, total }) => {
    return (
        <div className="shoppingCart">
            <h1>Cart</h1>
            <div className="cartItemSection">
                {items.length === 0 ? (
                    <p>There are currently no items in your cart.</p>
                ) : (
                    items
                )}
            </div>
            <h2>Total: ${total}</h2>
            <button>Checkout</button>
        </div>
    );
};

export default Cart;
export { CartItem };
