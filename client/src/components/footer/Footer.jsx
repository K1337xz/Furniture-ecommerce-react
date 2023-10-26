import { Link } from "react-router-dom";
import logo from "../../assets/furniture-logos_white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__content">
				<div className="footer__leftSide">
					<Link to="/" className="footer__leftSide-logo">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<div className="footer__rightSide">
					<div className="footer__nav">
						<div className="footer__navContent">
							<h4>Company</h4>
							<div className="footer__items">
								<Link>About Us</Link>
								<Link>Careers</Link>
								<Link>FAQs</Link>
								<Link>Teams</Link>
								<Link>Contact Us</Link>
							</div>
						</div>
						<div className="footer__navContent">
							<h4>Products</h4>
							<div className="footer__items">
								<Link>Tables</Link>
								<Link>Shelves and Cabinets</Link>
								<Link>Desks</Link>
								<Link>Beds and Bedside tables</Link>
								<Link>Chairs</Link>
								<Link>Sofas</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="footer__location">
					<div className="footer__locationValues">
						<FontAwesomeIcon icon={faLocationDot} />
						<Link to="#">LOREM LOREM LOREM</Link>
					</div>
					<div className="footer__locationValues">
						<FontAwesomeIcon icon={faEnvelope} />
						<Link to="#">lorem@lorem.com</Link>
					</div>
				</div>
			</div>
			<div className="footer__lowerContent">
				<p>© 2023 All Rights Reserved</p>
				<div className="footer__lowerLinks">
					<Link>Privacy Policy </Link>
					<Link>Terms of Use</Link>
					<Link>Sales and Refunds</Link>
				</div>
			</div>
		</footer>
	);
}
