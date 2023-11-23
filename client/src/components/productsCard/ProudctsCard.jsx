import { Link } from "react-router-dom";
import "./productscard.scss";

export default function ProductsCard({ item }) {
	return (
		<Link className="productCard">
			<div className="productCard__card">
				<div className="productCard__image">
					<img
						src={item.img}
						className="productCard__mainImg"
						alt="main img"
					/>
					{/* 			<img
						src={item.img}
						className="productCard__hoverImg"
						alt="hover img"
					/> */}
				</div>
				<div className="productCard__lowerCard">
					<h2>{item.title}</h2>
					<div className="productCard__price">
						<h3>{item.price} $</h3>
					</div>
				</div>
			</div>
		</Link>
	);
}
