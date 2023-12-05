import NumberButton from "../numberButton/NumberButton";
import "./cartitems.scss";

export default function CartItems({ image, title, ammount, price }) {
	return (
		<div className="cartItem">
			<div className="cartItem__leftContent">
				<div className="cartItem__image">
					<img src={image} alt="cart thumbnail" />
				</div>
				<div className="cartItem__title">
					<h3>{title}</h3>
				</div>
				<div className="cartItem__price">
					<p>{price}</p>
				</div>
				<div className="cartItem__ammount">
					<NumberButton />
				</div>
				<div className="cartItem__total">
					<p></p>
				</div>
			</div>
		</div>
	);
}
