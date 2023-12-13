import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import Cart from "../../components/cart/Cart";
import { useSelector } from "react-redux";
import { calculateTotal } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import "./cartpage.scss";
import { useEffect } from "react";

export default function CartPage() {
	const cartItems = useSelector((state) => state.cart.cart);
	const total = useSelector((state) => state.cart.total);
	const amount = useSelector((state) => state.cart.amount);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(calculateTotal());
		console.log(total);
	}, [cartItems]);
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
							<>
								<table cellSpacing="0" className="tableDesktop">
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
									<button className="cartPage__checkoutBtn">
										Checkout
									</button>

									<div className="cartPage__promoCode">
										<form className="cartPage__form">
											<input
												type="text"
												placeholder="Enter Your promocode"
											/>
											<input
												type="submit"
												value="Enter"
											/>
										</form>
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
