import { useSelector } from "react-redux";
import Cart from "../../components/cart/Cart";

export default function CartContentPage() {
	const total = useSelector((state) => state.cart.total);
	const amount = useSelector((state) => state.cart.amount);
	return (
		<>
			<table cellSpacing="0" className="tableDesktop">
				<thead>
					<tr>
						<th className="cartPager__remove"></th>
						<th className="cartPager__thumbnail"></th>
						<th className="cartPager__prdouct">Product</th>
						<th className="cartPager__price">Price</th>
						<th className="cartPager__ammount">Ammount</th>
						<th className="cartPager__total">Total</th>
					</tr>
				</thead>
				<Cart />
			</table>
			<table className="tableMobile">
				<thead></thead>
				<Cart />
			</table>
			<div className="cartPage__rightContent">
				<div className="cartPage__rightContentWrapper">
					<div className="cartPage__leftTotalBasket">
						<p>Basket Amount</p>
						<p>Total</p>
					</div>
					<div className="cartPage__rightTotalBasket">
						<span>{amount}</span>
						<span>{total} $</span>
					</div>
				</div>
				<button className="cartPage__checkoutBtn">Checkout</button>

				<div className="cartPage__promoCode">
					<form className="cartPage__form">
						<input type="text" placeholder="Enter Your promocode" />
						<input type="submit" value="Enter" />
					</form>
				</div>
			</div>
		</>
	);
}
