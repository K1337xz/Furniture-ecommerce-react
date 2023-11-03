import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import "./aboutpage.scss";

export default function Aboutpage() {
	return (
		<>
			<Nav />
			<main className="container">
				<div className="about">
					<div className="about__topHero">
						<h1>About Us</h1>
					</div>
				</div>
			</main>
		</>
	);
}
