import { useState } from "react";
const Item = ({ item, handleAddToCart }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="item">
            <div className="imgBox">
                <img src={item.image} />
            </div>
            <div className="textBox">
                <h3 className="itemTitle">{item.title}</h3>
                <div className="itemSubtext">
                    <h3>${item.price}</h3>
                    <h3>{item.rating.rate} / 5 ⭐</h3>
                </div>
                <div className="cart">
                    <div className="quantity">
                        <input
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        ></input>
                        <button
                            id="plus"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </button>
                        <button
                            id="minus"
                            onClick={() =>
                                quantity > 0 && setQuantity(quantity - 1)
                            }
                        >
                            -
                        </button>
                    </div>
                    <button onClick={() => handleAddToCart(item.id, quantity)}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
