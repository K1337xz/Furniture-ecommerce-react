import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import "./materialspage.scss";

export default function Materialspage() {
	return (
		<>
			<Nav />
			<main className="container">
				<div className="materials">
					<div className="materials__topHero">
						<h1>Materials</h1>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
