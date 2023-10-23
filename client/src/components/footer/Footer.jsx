import { Link } from "react-router-dom";
import logo from "../../assets/furniture-logos_white.png";
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
					<ul className="footer__nav">
						<li>
							Company
							<ul className="footer__nav">
								<li>About Us</li>
								<li>Careers</li>
								<li>FAQs</li>
								<li>Teams</li>
								<li>Contact Us</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
