import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItems from "../cartItems/CartItems";

export default function Cart() {
	const cartItem = useSelector((state) => state.cart.cart);
	const [cartAmmount, setCartAmount] = useState({});

	return (
		<tbody className="cart">
			{cartItem.map((item) => {
				return (
					<CartItems
						key={item.id}
						cartId={item.id}
						image={item.img}
						title={item.title}
						ammount={item.ammount}
						price={item.price}
						total={item.ammount * item.price}
					/>
				);
			})}
		</tbody>
	);
}
