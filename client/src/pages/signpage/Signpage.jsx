import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import lastphoto from "../../assets/lastphoto.jpg";
import { multiStepCart } from "../../hooks/multiStepCart";
import LoginForm from "../../components/loginForm/LoginForm";
import RegisterForm from "../../components/registerForm/RegisterForm";
import "./signpage.scss";

export default function Signpage() {
	const toggleChange = (e) => {
		e.preventDefault();
		next();
	};
	const toggleBack = (e) => {
		e.preventDefault();
		back();
	};

	const toggleLogin = (data) => {
		console.log(data);
	};
	const toggleRegister = (data) => {
		console.log(data);
	};

	const { steps, step, currentStepIndex, next, back } = multiStepCart([
		<LoginForm reg={toggleChange} submit={toggleLogin} />,
		<RegisterForm log={toggleBack} submit={toggleRegister} />,
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
