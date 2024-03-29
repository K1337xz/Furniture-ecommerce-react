import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import logoblack from "../../assets/furniture-logos_transparent.png";
import { FiMenu, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import "./mobileNav.scss";

export default function MobileNav() {
	const location = useLocation();
	const user = useSelector((state) => state.user.user);
	const cartItems = useSelector((state) => state.cart.cart);
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
					<Link to="/">
						<img src={logoblack} className="mobileNav__logo" />
					</Link>
				</div>
				<div className="mobileNav__right">
					<Link
						to={user ? "/profile" : "/login"}
						state={{ prevUrl: location.pathname }}
					>
						<FiUser className="nav__right--icons" />
					</Link>
					<Link to={"/cart"}>
						<div className="nav__cart">
							{cartItems.length > 0 && (
								<span>{cartItems.length}</span>
							)}
							<FiShoppingCart className="mobileNav__icons" />
						</div>
					</Link>
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
										<Link to="/about">ABOUT US</Link>
									</li>
									<li>
										<Link to="/materials">MATERIALS</Link>
									</li>
								</ul>
							)}
							{showCategories && (
								<ul className="mobileNav__rightContent">
									<li>
										<Link to="/products/desks">desks</Link>
									</li>
									<li>
										<Link to="/products/tables">
											tables
										</Link>
									</li>
									<li>
										<Link to="/products/chairs">
											CHAIRS, SOFAS
										</Link>
									</li>
									<li>
										<Link to="/products/beds">
											BEDS AND BEDSTOCKS
										</Link>
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
