import { useState } from "react";
import { motion, AnimatePresence, wrap } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { masonryGallery } from "../../imgdata";
import "./fullscreengallery.scss";

export default function FullscreenGallery({
	src,
	open,
	nextImage,
	prevImage,
	pagex,
}) {
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

	return (
		<div className="fullscreenGallery">
			<div className="fullscreenGallery__wrapper">
				<div className="fullscreenGallery__closeBtn">
					<AiOutlineClose
						style={{
							position: "absolute",
							top: "20px",
							right: "20px",
						}}
						size="1.6rem"
						color="white"
						onClick={open}
					/>
				</div>
				<AnimatePresence custom={direction} initial={false}>
					<motion.img
						key={pagex}
						src={src}
						custom={direction}
						variants={slideVariants}
						initial="enter"
						animate="center"
						exit="exit"
						className="fullscreenGallery__image"
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
				<div
					className="fullscreenGallery--nextSlide"
					onClick={nextImage}
				>
					<FontAwesomeIcon icon={faChevronRight} />
				</div>
				<div
					className="fullscreenGallery--prevSlide"
					onClick={prevImage}
				>
					<FontAwesomeIcon icon={faChevronLeft} />
				</div>
			</div>
		</div>
	);
}
