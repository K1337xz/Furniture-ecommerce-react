import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import { IoBagCheckOutline } from "react-icons/io5";
import "./OrderPage.scss";
import { Link } from "react-router-dom";

export default function OrderPage() {
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
							<IoBagCheckOutline className="orderPage__orderComplete" />
							<div className="orderPage__cardContent">
								<h1>Thank You for Your Order!</h1>
								<p>Check your email inbox for more details</p>
								<p>
									If you have any questions, please email to
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
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
