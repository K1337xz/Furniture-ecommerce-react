import { useParams } from "react-router-dom";
import { cardData } from "../../imgdata";
import { BsCartPlus } from "react-icons/bs";
import NumberButton from "../../components/numberButton/NumberButton";
import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import "./clcikedproduct.scss";
import { useState } from "react";

export default function ClickedProduct() {
	const [cartAmont, setCartAmount] = useState(0);
	const params = useParams();

	return (
		<>
			<Nav />
			<main className="container">
				<div className="cliickedProduct">
					<div className="clickedProduct__content">
						<div className="clickedProduct__leftProduct">
							<div className="clickedProduct__leftThumbnails">
								<img src={cardData[params.id].hoverImg} />
							</div>
							<div className="clickedProduct__mainImg">
								<img src={cardData[params.id].img} />
							</div>
						</div>
						<div className="clickedProduct__rightDesc">
							<div className="clickedProduct__desc">
								<h2>{cardData[params.id].title}</h2>
								<p className="clickedProduct__price">
									{cardData[params.id].price} $
								</p>
								<p className="clickedProduct__lowerDesc">
									{cardData[params.id].desc}
								</p>
							</div>
							<div className="clickedProduct__buttons">
								<NumberButton
									amount={cartAmont}
									toggleSubtract={() => {
										cartAmont > 0
											? setCartAmount(cartAmont - 1)
											: setCartAmount(0);
									}}
									toggleAdd={() => {
										setCartAmount(cartAmont + 1);
									}}
									toggleChange={(e) => {
										setCartAmount(Number(e.target.value));
									}}
								/>
								<input
									type="submit"
									value="ADD TO CART"
									className="clickedProduct__addToCart"
								/>
								<input
									type="submit"
									value="ADD TO WISH LIST"
									className="clickedProduct__addToWishList"
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
