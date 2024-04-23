import Item from "./Item";
import { useEffect, useState } from "react";
import "./Shop.css";
import Cart from "./Cart";
import { CartItem } from "./Cart";

const Shop = () => {
    const [itemList, setItemList] = useState([]);
    const [cartItemList, setCartItemList] = useState({});

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => {
                setItemList(json);
                console.log(json);
            });
    }, []);

    const handleAddToCart = (id, quantity) => {
        let nextCartItemList = { ...cartItemList };
        if (!nextCartItemList[id]) {
            nextCartItemList[id] = quantity;
        } else {
            nextCartItemList[id] += quantity;
        }
        setCartItemList(nextCartItemList);
    };

    const items = itemList.map((item) => (
        <Item key={item.id} item={item} handleAddToCart={handleAddToCart} />
    ));

    let cartItems = [];
    let total = 0;
    for (const id in cartItemList) {
        cartItems.push(
            <CartItem
                key={id}
                item={itemList[id - 1]}
                quantity={cartItemList[id]}
            />
        );
        total += cartItemList[id] * itemList[id - 1].price;
    }

    return (
        <div className="shopPage">
            <h1>Shop page</h1>
            <div className="items">{items}</div>
            <Cart items={cartItems} total={total} />
        </div>
    );
};

export default Shop;
