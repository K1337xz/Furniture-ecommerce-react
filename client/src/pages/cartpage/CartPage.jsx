import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import Cart from "../../components/cart/Cart";
import { useEffect } from "react";
import CartContentPage from "../../components/cartContentPage/CartContentPage";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "../../redux/cartSlice";

import "./cartpage.scss";
import { multiStepCart } from "../../hooks/multiStepCart";

export default function CartPage() {
	const { steps, step } = multiStepCart([<CartContentPage />]);
	const cartItems = useSelector((state) => state.cart.cart);
	const total = useSelector((state) => state.cart.total);
	const amount = useSelector((state) => state.cart.amount);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(calculateTotal());
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
						{cartItems.length > 0 && step}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
