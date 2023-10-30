import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoblack from "../../assets/furniture-logos_transparent.png";
import scrollNav from "../../hooks/scrollNav";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

import "./nav.scss";

export default function Nav() {
	const [showNav, setShowNav] = useState(true);
	const [showSubNav, setShowSubNav] = useState(true);
	const scroll = scrollNav();

	useEffect(() => {
		if (scroll.y > 0 && scroll.y - scroll.lastY > 0) {
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
					<ul className="nav__left">
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

					<div className="nav__middle">
						<img src={logoblack} className="nav__logo" />
					</div>

					<div className="nav__right"></div>
				</nav>
				<div className={showSubNav ? "subnav active" : "subnav hidden"}>
					<ul className="subnav__items">
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
				</div>
				<div className="mobileNav"></div>
			</header>
		</>
	);
}
