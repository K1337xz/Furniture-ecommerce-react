import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import Cart from "../../components/cart/Cart";
import "./cartpage.scss";

export default function CartPage() {
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
								<li className="cartPage__items acive">Cart</li>
								<li className="cartPage__items acive">
									Check out
								</li>
								<li className="cartPage__items acive">
									ORDER COMPLETE
								</li>
							</ul>
						</div>
					</div>
					<div className="cartPage__cartContent">
						<Cart />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
