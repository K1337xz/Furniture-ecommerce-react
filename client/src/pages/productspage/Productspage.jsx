import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import "./productspage.scss";
export default function Productspage() {
	const [filterPrice, setFilterPrice] = useState(1000);
	return (
		<>
			<Nav />
			<main className="container">
				<div className="products">
					<div className="products__filterProducts">
						<div className="products__filterItem">
							<h2>Filter by price</h2>
							<div className="products__inputs">
								<span>0</span>
								<input
									type="range"
									min={0}
									max={1000}
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
									/>
								</label>
								<label htmlFor="desc">
									Price (Highest to lowest)
									<input
										type="radio"
										id="desc"
										value="desc"
										name="price"
									/>
								</label>
							</div>
						</div>
					</div>
					<div className="products__productsCards"></div>
				</div>
			</main>
		</>
	);
}
