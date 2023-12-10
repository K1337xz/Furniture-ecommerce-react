import { useSelector } from "react-redux";
import NumberButton from "../numberButton/NumberButton";
import "./cartitems.scss";

export default function CartItems({ image, title, ammount, price, total }) {
	const cartItem = useSelector((state) => state.cart.cart);
	return (
		<tr className="cartItem">
			<td>x</td>
			<td className="cartItem__image">
				<img src={image} alt="cart thumbnail" />
			</td>
			<td className="cartItem__title">
				<h3>{title}</h3>
			</td>
			<td className="cartItem__price">
				<p>{price} $</p>
			</td>
			<td className="cartItem__ammount">
				<NumberButton style={{ width: "35%" }} amount={ammount} />
			</td>
			<td className="cartItem__total">
				<p>{total} $</p>
			</td>
		</tr>
	);
}
