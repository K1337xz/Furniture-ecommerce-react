import { Link } from "react-router-dom";
import "./productscard.scss";

export default function ProductsCard({ item, link }) {
	return (
		<Link className="productCard" to={link}>
			<div className="productCard__card">
				<div className="productCard__image">
					<img
						src={`http://localhost:1337${item?.attributes?.images?.data[0]?.attributes?.url}`}
						className="productCard__mainImg"
						alt="main img"
					/>
					<img
						src={`http://localhost:1337${item?.attributes?.images?.data[1]?.attributes?.url}`}
						className="productCard__hoverImg"
						alt="hover img"
					/>
				</div>
				<div className="productCard__lowerCard">
					<h2>{item.attributes.Name}</h2>
					<div className="productCard__price">
						<h3>{item.attributes.price} $</h3>
					</div>
				</div>
			</div>
		</Link>
	);
}
