import { useEffect, useState } from "react";
import logoblack from "../../assets/furniture-logos_transparent.png";
import { FiMenu, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import "./mobileNav.scss";

export default function MobileNav() {
	const [showCategories, setShowCategories] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	};
	return (
		<>
			<div className="mobileNav">
				<div className="mobileNav__left">
					<FiMenu
						className="mobileNav__icons"
						onClick={() => setIsOpen((isOpen) => !isOpen)}
					/>
				</div>
				<div className="mobileNav__middle">
					<img src={logoblack} className="mobileNav__logo" />
				</div>
				<div className="mobileNav__right">
					<FiUser className="mobileNav__icons" />
					<FiShoppingCart className="mobileNav__icons" />
				</div>
				<AnimatePresence>
					<motion.div
						animate={isOpen ? "open" : "closed"}
						variants={variants}
						className="mobileNav__slider"
					>
						<div className="mobileNav__sliderContent">
							<div className="mobileNav__sliderTop">
								<Link
									onClick={(e) => {
										e.preventDefault();
										setShowCategories(false);
									}}
									className={
										!showCategories
											? "mobileNav__sliderButton active"
											: "mobileNav__sliderButton"
									}
								>
									Menu
								</Link>
								<Link
									onClick={(e) => {
										e.preventDefault();
										setShowCategories(true);
									}}
									className={
										showCategories
											? "mobileNav__sliderButton active"
											: "mobileNav__sliderButton"
									}
								>
									Categories
								</Link>
							</div>
							{!showCategories && (
								<ul className="mobileNav__leftContent">
									<li>
										<Link to="#">ABOUT US</Link>
									</li>
									<li>
										<Link to="#">MATERIALS</Link>
									</li>
									<li>
										<Link to="#">CONTACT US</Link>
									</li>
								</ul>
							)}
							{showCategories && (
								<ul className="mobileNav__rightContent">
									<li>
										<Link to="#">desks</Link>
									</li>
									<li>
										<Link to="#">tables</Link>
									</li>
									<li>
										<Link to="#">CHAIRS, SOFAS</Link>
									</li>
									<li>
										<Link to="#">BEDS AND BEDSTOCKS</Link>
									</li>
								</ul>
							)}
						</div>
						<AiOutlineClose
							style={{
								position: "absolute",
								top: "20px",
								right: "20px",
							}}
							size="1.6rem"
							color="white"
							onClick={() => setIsOpen((isOpen) => !isOpen)}
						/>
					</motion.div>
				</AnimatePresence>
			</div>
		</>
	);
}
