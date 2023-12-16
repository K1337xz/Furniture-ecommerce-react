import { useSelector } from "react-redux";
import Cart from "../../components/cart/Cart";
import { multiStepCart } from "../../hooks/multiStepCart";

export default function CartContentPage() {
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
		</>
	);
}
