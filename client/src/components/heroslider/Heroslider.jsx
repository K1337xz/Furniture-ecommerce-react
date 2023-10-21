import { motion, AnimatePresence } from "framer-motion";
import heroimg from "../../assets/pexels-photo-276583.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./heroslider.scss";
import { Link } from "react-router-dom";

export default function Heroslider() {
	return (
		<div className="heroSlider">
			<AnimatePresence initial={false}>
				<motion.img src={heroimg} key="1" />
			</AnimatePresence>
			<div className="heroSlider__content">
				<p>Collection</p>
				<h1>Black Leather Sofa</h1>
				<Link to="#" className="heroSlider__content--checkBtn">
					Check
				</Link>
			</div>
			<div className="heroSlider--nextSlide">
				<FontAwesomeIcon icon={faChevronRight} />
			</div>
			<div className="heroSlider--prevSlide">
				<FontAwesomeIcon icon={faChevronLeft} />
			</div>
		</div>
	);
}
