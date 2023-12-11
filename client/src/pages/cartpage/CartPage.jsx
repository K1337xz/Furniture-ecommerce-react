import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import Cart from "../../components/cart/Cart";
import { useSelector } from "react-redux";
import "./cartpage.scss";

export default function CartPage() {
	const cartItems = useSelector((state) => state.cart.cart);

	return (
		<>
			<Nav />
			<main className="container">
				<div className="cartPage">
					<div className="cartPage__topContent">
						<div className="cartPage__topHeader">
							<h2>Cart</h2>
						</div>
						<div className="cartPage__topNav">
							<ul className="cartPage__nav">
								<li className="cartPage__items active">Cart</li>
								<li className="cartPage__items">Check out</li>
								<li className="cartPage__items">
									ORDER COMPLETE
								</li>
							</ul>
						</div>
					</div>
					<div className="cartPage__cartContent">
						{cartItems.length === 0 && <h3>CART IS EMPTY!</h3>}
						{cartItems.length > 0 && (
							<table cellSpacing="0">
								<thead>
									<tr>
										<th className="cartPager__remove"></th>
										<th className="cartPager__thumbnail"></th>
										<th className="cartPager__prdouct">
											Product
										</th>
										<th className="cartPager__price">
											Price
										</th>
										<th className="cartPager__ammount">
											Ammount
										</th>
										<th className="cartPager__total">
											Total
										</th>
										<th className="cartPager__update"></th>
									</tr>
								</thead>
								<Cart />
							</table>
						)}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
