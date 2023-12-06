import { useSelector } from "react-redux";
import CartItems from "../cartItems/CartItems";
import "./cart.scss";

export default function Cart() {
	const cartItem = useSelector((state) => state.cart.cart);
	return (
		<div className="cart">
			{cartItem.map((item) => {
				return (
					<CartItems
						image={item.img}
						title={item.title}
						ammount={item.ammount}
					/>
				);
			})}
		</div>
	);
}
