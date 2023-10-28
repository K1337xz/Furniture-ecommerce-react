import { Link } from "react-router-dom";
import FramerDiv from "../../components/framerDiv/FramerDiv";
import { images } from "../../imgdata";
import "./ourProductsCard.scss";
export default function OurProductsCard() {
	return (
		<>
			<div className="ourProducts">
				<FramerDiv
					variantHidden={{ opacity: 0, y: 75 }}
					variantVisible={{ opacity: 1, y: 0 }}
				>
					<div className="ourProducts__header">
						<h2>Our products</h2>
					</div>
					<div className="ourProducts__products">
						<div className="ourProducts__productWrapper">
							{images.map((items) => {
								return (
									<div
										className="ourProducts__productCard"
										key={items.id}
									>
										<Link to="">
											<img src={items.src} />
										</Link>
										<div className="ourProducts__productCard-description">
											<p>{items.desc}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</FramerDiv>
			</div>
		</>
	);
}
