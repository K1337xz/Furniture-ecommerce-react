import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import lastphoto from "../../assets/lastphoto.jpg";
import { multiStepCart } from "../../hooks/multiStepCart";
import LoginForm from "../../components/loginForm/LoginForm";
import "./signpage.scss";

export default function Signpage() {
	const { steps, step, currentStepIndex, next } = multiStepCart([
		<LoginForm />,
	]);

	return (
		<>
			<Nav />
			<main className="container">
				<div className="signWrapper">
					<div className="signWrapper__content">
						<div className="signWrapper__left"></div>
						<div className="signWrapper__right">{step}</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
