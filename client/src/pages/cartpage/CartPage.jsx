import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import Cart from "../../components/cart/Cart";
import CartContentPage from "../../components/cartContentPage/CartContentPage";
import CheckoutForm from "../../components/chcekoutForm/CheckoutForm";

import { calculateTotal } from "../../redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { multiStepCart } from "../../hooks/multiStepCart";
import axios from "axios";
import "./cartpage.scss";

const stripePromise = loadStripe(
	"pk_test_51OUV2eFDAoS63k8a7nFqpU4cGbBID8IfSrJeHkUaNnoizZCnTSgDS0rWDh9lg3fUujY9zcPqBwLnXulgVH2ZQhaV0055IbvChM"
);

export default function CartPage() {
	const cartItems = useSelector((state) => state.cart.cart);
	const total = useSelector((state) => state.cart.total);
	const amount = useSelector((state) => state.cart.amount);
	const dispatch = useDispatch();

	const submitCheckout = (data) => {
		makePayment(data);
	};
	const { steps, step, currentStepIndex, next } = multiStepCart([
		<CartContentPage />,
		<CheckoutForm submit={submitCheckout} />,
	]);

	async function makePayment(values) {
		const stripe = await stripePromise;
		const reqBody = {
			userName: values.names,
			email: values.email,
			products: cartItems.map(({ id, amount, price, title }) => ({
				id,
				amount,
				price,
				title,
			})),
		};
		try {
			const data = await axios.post(
				"https://api-furniture-e5qc.onrender.com/api/orders",
				reqBody
			);
			console.log(data);
			/* 
			await stripe.redirectToCheckout({
				soessionId: data.data.id,
			}); */
		} catch (error) {
			console.log(error);
		}
	}

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
													<span>
														{total.toFixed(2)}$
													</span>
												</div>
											</div>
											{currentStepIndex != 1 && (
												<button
													className="cartPage__checkoutBtn"
													onClick={next}
												>
													Checkout
												</button>
											)}

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
