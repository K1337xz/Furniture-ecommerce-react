import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import materialsData from "../../materialsData";
import MaterialsCard from "../../components/materialsCard/MaterialsCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./materialspage.scss";

export default function Materialspage() {
	const [activeDrop, setActiveDrop] = useState("Oak");
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

	const toggleChange = (e) => {
		setActiveDrop(e.target.id);
	};

	return (
		<>
			<Nav />
			<main className="container">
				<div className="materials">
					<div className="materials__topHero">
						<h1>Materials</h1>
					</div>
					<div className="materials__middleContent">
						<ul className="materials__subNav">
							{materialsData.map((item) => {
								return (
									<li
										className={
											activeDrop === item.material
												? "materials__item--active"
												: "materials__item"
										}
									>
										<Link
											id={item.material}
											onClick={toggleChange}
										>
											{item.material}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				{materials}
			</main>
			<Footer />
		</>
	);
}
