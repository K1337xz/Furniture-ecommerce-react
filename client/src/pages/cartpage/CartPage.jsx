import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import Cart from "../../components/cart/Cart";
import { useEffect } from "react";
import CartContentPage from "../../components/cartContentPage/CartContentPage";
import CheckoutForm from "../../components/chcekoutForm/CheckoutForm";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "../../redux/cartSlice";
import { clearCart } from "../../redux/cartSlice";

import "./cartpage.scss";
import { multiStepCart } from "../../hooks/multiStepCart";

export default function CartPage() {
	const cartItems = useSelector((state) => state.cart.cart);
	const total = useSelector((state) => state.cart.total);
	const amount = useSelector((state) => state.cart.amount);
	const dispatch = useDispatch();

	const submitCheckout = (e) => {
		setTimeout(() => {
			next();
			dispatch(clearCart());
		}, 3000);
	};
	const { steps, step, currentStepIndex, next } = multiStepCart([
		<CartContentPage />,
		<CheckoutForm submit={submitCheckout} />,
		<div>ORDER XXXXD COMPLETE</div>,
	]);

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
								<li
									className={
										currentStepIndex === 0
											? "cartPage__items active"
											: "cartPage__items"
									}
								>
									Cart
								</li>
								<li
									className={
										currentStepIndex === 1
											? "cartPage__items active"
											: "cartPage__items"
									}
								>
									Check out
								</li>
								<li
									className={
										currentStepIndex === 2
											? "cartPage__items active"
											: "cartPage__items"
									}
								>
									ORDER COMPLETE
								</li>
							</ul>
						</div>
					</div>
					<div className="cartPage__cartContent">
						{cartItems.length === 0 && currentStepIndex != 2 && (
							<h3>CART IS EMPTY!</h3>
						)}
						{cartItems.length > 0 && (
							<>
								{step}
								{currentStepIndex === 2 ||
									(1 && (
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
											<button
												className="cartPage__checkoutBtn"
												onClick={next}
											>
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
									))}
							</>
						)}
						{currentStepIndex === 2 && step}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
