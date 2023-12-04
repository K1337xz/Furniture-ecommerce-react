import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logoblack from "../../assets/furniture-logos_transparent.png";
import scrollNav from "../../hooks/scrollNav";
import MobileNav from "../mobileNav/MobileNav";
import { FiMenu, FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

import { AnimatePresence, motion } from "framer-motion";
import "./nav.scss";

export default function Nav() {
	const cartItems = useSelector((state) => state.cart.cart);
	const [showNav, setShowNav] = useState(true);
	const [showSubNav, setShowSubNav] = useState(true);
	const scroll = scrollNav();

	useEffect(() => {
		if (scroll.y > 100 && scroll.y - scroll.lastY > 0) {
			setShowNav(false);
		} else {
			setShowNav(true);
		}
		if (scroll.y === 0) {
			setShowSubNav(true);
		} else {
			setShowSubNav(false);
		}
	}, [scroll.y, scroll.lastY]);

	return (
		<>
			<header className={showNav ? "active" : "hidden"}>
				<nav className="nav">
					<div className="nav__desktop">
						<ul className="nav__left">
							<li>
								<Link to="/about">ABOUT US</Link>
							</li>
							<li>
								<Link to="/materials">MATERIALS</Link>
							</li>
							<li>
								<Link to="/contact">CONTACT US</Link>
							</li>
						</ul>
						<div className="nav__middle">
							<Link to="/">
								<img src={logoblack} className="nav__logo" />
							</Link>
						</div>
						<div className="nav__right">
							<FiSearch className="nav__right--icons" />
							<FiUser className="nav__right--icons" />
							<div className="nav__cart">
								{cartItems.length > 0 && (
									<span>{cartItems.length}</span>
								)}
								<FiShoppingCart className="nav__right--icons" />
							</div>
						</div>
					</div>
					<MobileNav />
				</nav>
				<div className={showSubNav ? "subnav active" : "subnav hidden"}>
					<ul className="subnav__items">
						<li>
							<Link to="/products/desks">desks</Link>
						</li>
						<li>
							<Link to="/products/tables">tables</Link>
						</li>
						<li>
							<Link to="/products/chairs">CHAIRS, SOFAS</Link>
						</li>
						<li>
							<Link to="/products/beds">BEDS AND BEDSTOCKS</Link>
						</li>
					</ul>
				</div>
			</header>
		</>
	);
}
