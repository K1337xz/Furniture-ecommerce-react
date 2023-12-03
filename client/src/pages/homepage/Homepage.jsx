import Nav from "../../components/navbar/Nav";
import { useSelector } from "react-redux";
import Heroslider from "../../components/heroslider/Heroslider";
import MiddleCard from "../../components/middleCard/MiddleCard";
import { Link } from "react-router-dom";
import { heroSliderImages } from "../../imgdata";
import Footer from "../../components/footer/Footer";
import OurProductsCard from "../../components/ourProductsCard/OurProductsCard";
import FramerDiv from "../../components/framerDiv/FramerDiv";
import "./homepage.scss";

export default function Homepage() {
	const cartItems = useSelector((state) => state.cart.cart);
	console.log(cartItems);
	return (
		<>
			<Nav />
			<main className="container">
				<Heroslider
					images={heroSliderImages}
					title={heroSliderImages}
				/>
				<OurProductsCard />
				<MiddleCard />
				<div className="seeOurProjects">
					<FramerDiv
						variantHidden={{ opacity: 0, y: 75 }}
						variantVisible={{ opacity: 1, y: 0 }}
						divClass="seeOurProjects__wrapper"
					>
						<div className="seeOurProjects__header">
							<h2>SEE OUR PROJECTS</h2>
						</div>
						<div className="seeOurProjects__projects">
							<Link
								to="/about#projects"
								className="seeOurProjects__projects--button"
								onClick={() => {
									window.scroll(0, 0);
								}}
							>
								SEE OUR PROJECTS
							</Link>
						</div>
					</FramerDiv>
				</div>
			</main>
			<Footer />
		</>
	);
}
