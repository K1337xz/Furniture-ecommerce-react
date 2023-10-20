import { Link } from "react-router-dom";
import logoblack from "../../assets/furniture-logos_transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleUser,
	faMagnifyingGlass,
	faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./nav.scss";

export default function Nav() {
	return (
		<>
			<header>
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

					<div className="nav__right">
						<FontAwesomeIcon
							icon={faCircleUser}
							className="nav__right--icons"
						/>
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							className="nav__right--icons"
						/>
						<FontAwesomeIcon
							icon={faCartShopping}
							className="nav__right--icons"
						/>
					</div>
				</nav>
			</header>
			<div className="subnav">
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
		</>
	);
}
