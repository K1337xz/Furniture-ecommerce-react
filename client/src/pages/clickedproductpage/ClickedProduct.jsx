import { useParams } from "react-router-dom";
import { cardData } from "../../imgdata";
import NumberButton from "../../components/numberButton/NumberButton";
import Nav from "../../components/navbar/Nav";
import "./clcikedproduct.scss";

export default function ClickedProduct() {
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
								<p>{cardData[params.id].desc}</p>
							</div>
							<div className="clickedProduct__buttons">
								<NumberButton />
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
