import { Link } from "react-router-dom";

export default function ProductsCard({ item }) {
	return (
		<Link>
			<div className="productCard">
				<div className="productCard__image">
					<img
						src={item.src}
						className="productCard__mainImg"
						alt="main img"
					/>
					<img
						src={item.src}
						className="productCard__hoverImg"
						alt="hover img"
					/>
				</div>
				<h2>{item.title}</h2>
				<div className="productCard__price">
					<h3>{item.price}</h3>
				</div>
			</div>
		</Link>
	);
}
