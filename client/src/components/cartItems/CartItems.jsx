import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, updateCart } from "../../redux/cartSlice";
import NumberButton from "../numberButton/NumberButton";
import "./cartitems.scss";

export default function CartItems({
	image,
	title,
	ammount,
	price,
	total,
	cartId,
}) {
	const [isChanged, setIsChanged] = useState(false);
	const cartItem = useSelector((state) => state.cart.cart);
	const [cartAmmount, setCartAmmount] = useState(ammount);
	const [cartTotalPrice, setCartTotalPrice] = useState(total);
	const existCartItem = cartItem.filter((cart) => cart.id == cartId);
	const dispatch = useDispatch();

	return (
		<tr className="cartItem" id={cartId}>
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
				<NumberButton
					style={{ width: "35%" }}
					amount={cartAmmount}
					toggleChange={(e) => {
						setCartAmmount(Number(e.target.value));
						setIsChanged(true);
					}}
					toggleSubtract={() => {
						cartAmmount > 0
							? setCartAmmount(cartAmmount - 1)
							: setCartAmmount(0);
						setIsChanged(true);
					}}
					toggleAdd={() => {
						setCartAmmount(cartAmmount + 1);
						setIsChanged(true);
					}}
				/>
			</td>
			<td className="cartItem__total">
				<p>{total} $</p>
			</td>
			{isChanged ? (
				<td>
					<input
						type="submit"
						onClick={() => {
							dispatch(
								updateCart({
									id: cartId,
									ammount: cartAmmount,
									total: cartAmmount * price,
								})
							);
							setIsChanged(false);
						}}
						value="Update Cart"
					/>
				</td>
			) : null}
		</tr>
	);
}
