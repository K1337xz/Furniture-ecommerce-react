import { useSelector } from "react-redux";
import CartItems from "../cartItems/CartItems";

export default function Cart() {
	const cartItem = useSelector((state) => state.cart.cart);
	return (
		<tbody className="cart">
			{cartItem.map((item) => {
				return (
					<CartItems
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
