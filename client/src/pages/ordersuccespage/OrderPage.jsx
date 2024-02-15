import { useEffect } from "react";
import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import { IoBagCheckOutline } from "react-icons/io5";
import { BsBagX } from "react-icons/bs";
import "./OrderPage.scss";
import { Link, useLocation } from "react-router-dom";
import { clearCart } from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";

export default function OrderPage() {
	const dispatch = useDispatch();
	const location = useLocation();
	useEffect(() => {
		if (location.search === "?success=true") {
			dispatch(clearCart());
		} else {
			return;
		}
	}, []);
	console.log(location);
	return (
		<>
			<Nav />
			<main className="container">
				<div className="orderPage">
					<div className="orderPage__topContent">
						<div className="orderPage__topHeader">
							<h2>Order</h2>
						</div>
						<div className="orderPage__topNav">
							<ul className="orderPage__nav">
								<li className="orderPage__items">Cart</li>
								<li className="orderPage__items">Check out</li>
								<li className="orderPage__items active">
									ORDER COMPLETE
								</li>
							</ul>
						</div>
					</div>
					<div className="orderPage__content">
						<div className="orderPage__card">
							<div className="orderPage__cardContent">
								{location.search === "?success=true" ? (
									<>
										<IoBagCheckOutline className="orderPage__orderComplete" />
										<h1>Thank You for Your Order!</h1>
										<p>
											Check your email inbox for more
											details
										</p>
										<p>
											If you have any questions, please
											email to
											<Link
												to="#"
												onClick={(e) => {
													e.preventDefault();
													window.location =
														"mailto:k1337xz@gmail.com";
												}}
											>
												k1337xz@gmail.com
											</Link>
										</p>
									</>
								) : (
									<>
										<BsBagX className="orderPage__orderFalse" />
										<h1>Something went wrong</h1>
										<p>Check your cart and try again</p>
										<p>
											If you have any questions, please
											email to
											<Link
												to="#"
												onClick={(e) => {
													e.preventDefault();
													window.location =
														"mailto:k1337xz@gmail.com";
												}}
											>
												k1337xz@gmail.com
											</Link>
										</p>
									</>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
