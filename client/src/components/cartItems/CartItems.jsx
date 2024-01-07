import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	addToCart,
	increase,
	decrease,
	removeItemFromCart,
} from "../../redux/cartSlice";
import { IoMdClose } from "react-icons/io";
import NumberButton from "../numberButton/NumberButton";
import "./cartitems.scss";

export default function CartItems({
	image,
	title,
	amount,
	price,
	total,
	cartId,
}) {
	const [isChanged, setIsChanged] = useState(false);
	const cartItem = useSelector((state) => state.cart.cart);
	const existCartItem = cartItem.filter((cart) => cart.id == cartId);
	const dispatch = useDispatch();

	return (
		<tr className="cartItem" id={cartId}>
			<td
				className="cartItem__removeItem"
				onClick={() => {
					dispatch(removeItemFromCart(cartId));
				}}
			>
				<IoMdClose />
			</td>
			<td className="cartItem__image">
				<img
					src={`https://api-furniture-e5qc.onrender.com/${image}`}
					alt="cart thumbnail"
				/>
			</td>
			<td className="cartItem__title">
				<h3>{title}</h3>
			</td>
			<td className="cartItem__price">
				<p>{price} $</p>
			</td>
			<td className="cartItem__amount">
				<NumberButton
					toggleDisable={true}
					style={{ width: "100%" }}
					amount={amount}
					toggleSubtract={() => {
						if (amount === 1) {
							dispatch(removeItemFromCart(cartId));
							return;
						}
						dispatch(decrease({ cartId }));
					}}
					toggleAdd={() => {
						dispatch(increase({ cartId }));
					}}
				/>
			</td>
			<td className="cartItem__total">
				<p>{price * amount} $</p>
			</td>
		</tr>
	);
}
