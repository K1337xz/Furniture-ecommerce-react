import { useState } from "react";
import { useParams } from "react-router-dom";
import { cardData } from "../../imgdata";
import { motion, AnimatePresence, wrap } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import NumberButton from "../../components/numberButton/NumberButton";
import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import "./clcikedproduct.scss";

export default function ClickedProduct() {
	const slideVariants = {
		enter: (direction) => {
			return {
				x: direction < 0 ? 1000 : -1000,
				opacity: 0,
			};
		},
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction) => {
			return {
				zIndex: 0,
				x: direction < 0 ? 1000 : -1000,
				opacity: 0,
				display: "none",
			};
		},
	};
	const swipeConfidenceThreshold = 10000;
	const swipePower = (offset, velocity) => {
		return Math.abs(offset) * velocity;
	};
	const [[page, direction], setPage] = useState([0, 0]);
	const params = useParams();
	const [cartAmont, setCartAmount] = useState(0);
	const [clickedImage, setClickedImage] = useState();
	const [imageIndex, setImageIndex] = useState(0);

	const toggleNext = () => {
		if (imageIndex === cardData[params.id].img.length - 1) {
			setImageIndex(0);
		} else {
			setImageIndex(imageIndex + 1);
		}
	};

	const toggleBack = () => {
		if (imageIndex === 0) {
			setImageIndex(cardData[params.id].img.length - 1);
		} else {
			setImageIndex(imageIndex - 1);
		}
	};

	return (
		<>
			<Nav />
			<main className="container">
				<div className="cliickedProduct">
					<div className="clickedProduct__content">
						<div className="clickedProduct__leftProduct">
							<div className="clickedProduct__leftThumbnails">
								{cardData[params.id].img.map((item) => {
									return (
										<img
											key={item}
											src={item}
											alt="thumbnail"
											onClick={(e) => {
												setClickedImage(e.target.src);
											}}
										/>
									);
								})}
							</div>
							<div className="clickedProduct__mainImg">
								<img
									src={
										clickedImage
											? clickedImage
											: cardData[params.id].img
									}
								/>
							</div>
						</div>
						<div className="clickedProduct__leftMobile">
							<div className="clickedProduct__leftMobileContent">
								<AnimatePresence
									custom={direction}
									initial={false}
								>
									<motion.img
										key={imageIndex}
										src={
											cardData[params.id].img[imageIndex]
										}
										custom={direction}
										variants={slideVariants}
										initial="enter"
										animate="center"
										exit="exit"
										className="clickedProduct__image"
										transition={{
											x: {
												type: "spring",
												stiffness: 100,
												damping: 30,
											},
											opacity: { duration: 0.5 },
										}}
										drag="x"
										dragConstraints={{ left: 0, right: 0 }}
										dragElastic={1}
										onDragEnd={(
											e,
											{ offset, velocity }
										) => {
											const swipe = swipePower(
												offset.x,
												velocity.x
											);
											if (
												swipe <
												-swipeConfidenceThreshold
											) {
												imageIndex ===
												cardData[params.id].img.length -
													1
													? setImageIndex(0)
													: setImageIndex(
															imageIndex + 1
													  );
											} else if (
												swipe > swipeConfidenceThreshold
											) {
												setImageIndex(imageIndex - 1);
											}
										}}
									/>
								</AnimatePresence>
								<div
									className="clickedProduct__leftMobileContent--nextSlide"
									onClick={toggleNext}
								>
									<FontAwesomeIcon icon={faChevronRight} />
								</div>
								<div
									className="clickedProduct__leftMobileContent--prevSlide"
									onClick={toggleBack}
								>
									<FontAwesomeIcon icon={faChevronLeft} />
								</div>
							</div>
						</div>
						<div className="clickedProduct__rightDesc">
							<div className="clickedProduct__desc">
								<h2>{cardData[params.id].title}</h2>
								<p className="clickedProduct__price">
									{cardData[params.id].price} $
								</p>
								<p className="clickedProduct__lowerDesc">
									{cardData[params.id].desc}
								</p>
							</div>
							<div className="clickedProduct__buttons">
								<NumberButton
									amount={cartAmont}
									toggleSubtract={() => {
										cartAmont > 0
											? setCartAmount(cartAmont - 1)
											: setCartAmount(0);
									}}
									toggleAdd={() => {
										setCartAmount(cartAmont + 1);
									}}
									toggleChange={(e) => {
										setCartAmount(Number(e.target.value));
									}}
								/>
								<input
									type="submit"
									value="ADD TO CART"
									className="clickedProduct__addToCart"
								/>
								<input
									type="submit"
									value="ADD TO WISH LIST"
									className="clickedProduct__addToWishList"
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
