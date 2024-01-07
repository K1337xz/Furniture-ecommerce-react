import { Link } from "react-router-dom";
import FramerDiv from "../../components/framerDiv/FramerDiv";
import firstImg from "../../assets/firstImage.jpg";
import secondImage from "../../assets/secondImage.jpg";
import lastphoto from "../../assets/lastphoto.jpg";
import "./middleCard.scss";

export default function MiddleCard() {
	return (
		<>
			<div className="middleInfo">
				<FramerDiv
					divClass="middleInfo__wrapper"
					variantHidden={{ opacity: 0, x: 75 }}
					variantVisible={{ opacity: 1, x: 0 }}
				>
					<div className="middleInfo__card">
						<div className="middleInfo__cardLeft">
							<div className="middleInfo__cardLeft-content">
								<h3>Only original designs.</h3>
								<p>
									In original furniture, you'll find a world
									of possibilities. Handcrafted wooden tables
									with intricate inlays, ergonomic chairs that
									seamlessly blend comfort and style, and
									modular storage solutions that adapt to your
									evolving needs. These designs prioritize
									both form and function, elevating the
									ambiance of a room while meeting practical
									requirements.
								</p>
								<Link
									to="#"
									className="middleInfo__cardLeft--button"
								>
									Check ours products
								</Link>
							</div>
						</div>
						<div className="middleInfo__cardRight">
							<img src={firstImg} alt="first about photo" />
						</div>
					</div>
				</FramerDiv>
				<FramerDiv
					divClass="middleInfo__wrapper"
					variantHidden={{ opacity: 0, x: -75 }}
					variantVisible={{ opacity: 1, x: 0 }}
				>
					<div className="middleInfo__card--reverse">
						<div className="middleInfo__cardLeft">
							<div className="middleInfo__cardLeft-content">
								<h3>Quality Furniture</h3>
								<p>
									Furniture made of the best materials
									epitomizes quality, durability, and a
									commitment to providing a superior and
									long-lasting addition to your living space.
									When you invest in such pieces, you're not
									just buying furniture; you're investing in
									the essence of craftsmanship and longevity.
								</p>
								<Link
									to="#"
									className="middleInfo__cardLeft--button"
								>
									Contact with us
								</Link>
							</div>
						</div>
						<div className="middleInfo__cardRight">
							<img src={secondImage} alt="second about photo" />
						</div>
					</div>
				</FramerDiv>
				<FramerDiv
					divClass="middleInfo__wrapper"
					variantHidden={{ opacity: 0, x: 75 }}
					variantVisible={{ opacity: 1, x: 0 }}
				>
					<div className="middleInfo__card">
						<div className="middleInfo__cardLeft">
							<div className="middleInfo__cardLeft-content">
								<h3>Tailored to Perfection</h3>
								<p>
									Furniture tailored to your needs offers a
									bespoke approach to interior design,
									ensuring that every piece is a perfect fit
									for your space and lifestyle. These
									customized creations are born from a
									collaboration between you and skilled
									artisans, resulting in furniture that
									seamlessly complements your vision and
									practical requirements.
								</p>
								<Link
									to="#"
									className="middleInfo__cardLeft--button"
								>
									Find something for yourself
								</Link>
							</div>
						</div>
						<div className="middleInfo__cardRight">
							<img src={lastphoto} alt="second about photo" />
						</div>
					</div>
				</FramerDiv>
			</div>
		</>
	);
}
