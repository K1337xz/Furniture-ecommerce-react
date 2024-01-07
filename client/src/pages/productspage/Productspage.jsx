import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import ProductsCard from "../../components/productsCard/ProudctsCard";
/* import { cardData } from "../../imgdata"; */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productspage.scss";
import axios from "axios";

export default function Productspage() {
	const params = useParams();
	const [filterPrice, setFilterPrice] = useState(6000);
	const [cardData, setCardData] = useState([]);
	const [radioValue, setRadioValue] = useState("ASC");

	const onRadioChange = (e) => {
		setRadioValue(e.target.value);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await axios.get(
					`${
						import.meta.env.VITE_API_URL
					}/api/products/?populate=images&populate=hoverImage&sort=price:${radioValue}&filters[$and][0][category][$eq]=${
						params.id
					}&filters[$and][1][price][$lte]=${filterPrice}`
				);
				setCardData(data.data.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [params.id, radioValue, filterPrice]);

	return (
		<>
			<Nav />
			<main className="container">
				<div className="products">
					<div className="products__filterWrapper">
						<div className="products__filterProducts">
							<div className="products__filterItem">
								<h2>Filter by price</h2>
								<div className="products__inputs">
									<span>0</span>
									<input
										type="range"
										min={0}
										max={6000}
										onChange={(e) => {
											setFilterPrice(e.target.value);
										}}
									/>
									<span>{filterPrice}</span>
								</div>
							</div>
							<div className="products__filterItem">
								<h2>Sort by</h2>
								<div className="products__filterInputs">
									<label htmlFor="asc">
										Price (Lowest to highest )
										<input
											type="radio"
											id="asc"
											value="asc"
											name="price"
											onChange={onRadioChange}
										/>
									</label>
									<label htmlFor="desc">
										Price (Highest to lowest)
										<input
											type="radio"
											id="desc"
											value="desc"
											name="price"
											onChange={onRadioChange}
										/>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className="products__productsCards">
						{cardData.map((items) => (
							<ProductsCard
								key={items.id}
								item={items}
								link={`/product/${params.id}/${items.id}`}
							/>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
