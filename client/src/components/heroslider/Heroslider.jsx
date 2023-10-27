import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { wrap } from "framer-motion";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./heroslider.scss";
import { Link } from "react-router-dom";

const slideVariants = {
	enter: (direction) => {
		return {
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
		};
	},
	center: {
		x: 0,
		opacity: 0.6,
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

export default function Heroslider({ images, title }) {
	const [[page, direction], setPage] = useState([0, 0]);
	const imageIndex = wrap(0, images.length, page);
	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};
	return (
		<div className="heroSlider">
			<AnimatePresence custom={direction} initial={false}>
				<motion.img
					key={page}
					src={images[imageIndex].src}
					custom={direction}
					variants={slideVariants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 100, damping: 30 },
						opacity: { duration: 0.5 },
					}}
					drag="x"
					dragConstraints={{ left: 0, right: 0 }}
					dragElastic={1}
					onDragEnd={(e, { offset, velocity }) => {
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}
				/>
			</AnimatePresence>
			<div className="heroSlider__content">
				<p>Collection</p>
				<h1>{title[imageIndex].title}</h1>
				<Link to="#" className="heroSlider__content--checkBtn">
					Check
				</Link>
			</div>

			<div className="heroSlider--nextSlide" onClick={() => paginate(-1)}>
				<FontAwesomeIcon icon={faChevronRight} />
			</div>
			<div className="heroSlider--prevSlide" onClick={() => paginate(1)}>
				<FontAwesomeIcon icon={faChevronLeft} />
			</div>
		</div>
	);
}
