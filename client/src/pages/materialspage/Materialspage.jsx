import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import materialsData from "../../materialsData";
import MaterialsCard from "../../components/materialsCard/MaterialsCard";
import "./materialspage.scss";
import { useState } from "react";

export default function Materialspage() {
	const [activeDrop, setActiveDrop] = useState("");
	const materials = materialsData.map((item) => {
		if (activeDrop === item.material) {
			return (
				<MaterialsCard
					key={item.id}
					title={item.material}
					description={item.description}
					image={item.img}
				/>
			);
		}
	});
	console.log(materials.title);
	return (
		<>
			<Nav />
			<main className="container">
				<div className="materials">
					<div className="materials__topHero">
						<h1>Materials</h1>
					</div>
					<div className="materials__middleContent">
						<ul className="materils__subNav">
							<p
								onClick={() => {
									setActiveDrop("Pine");
								}}
							>
								PINE
							</p>
							<p
								onClick={() => {
									setActiveDrop("Oak");
								}}
							>
								OAK
							</p>
						</ul>
					</div>
				</div>
				{materials}
			</main>
			<Footer />
		</>
	);
}
