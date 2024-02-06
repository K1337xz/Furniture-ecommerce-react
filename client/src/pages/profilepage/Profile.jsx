import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import { multiStepCart } from "../../hooks/multiStepCart";
import { useSelector, useDispatch } from "react-redux";
import avatar from "../../assets/blank-profile-picture-973460_1280.webp";
import "./profile.scss";

export default function Profile() {
	const user = useSelector((state) => state.user.user);
	const { steps, step, currentStepIndex, next, back } = multiStepCart([
		<div>1</div>,
		<div>2</div>,
	]);
	console.log(currentStepIndex);
	return (
		<>
			<Nav />
			<main className="container">
				<div className="profile">
					<div className="profile__topContent">
						<div className="profile__nameSection">
							<img src={avatar} alt="profile avatar" />
							<p>{`${user.firstName} ${user.lastName}`}</p>
						</div>
						<div className="profile__profileNav">
							<ul className="profile__nav">
								<li
									className={
										currentStepIndex === 0
											? "profile__item--active"
											: "profile__item"
									}
									onClick={() => {
										back();
									}}
								>
									Orders
								</li>
								<li
									className={
										currentStepIndex === 1
											? "profile__item--active"
											: "profile__item"
									}
									onClick={() => {
										next();
									}}
								>
									Settings
								</li>
							</ul>
						</div>
					</div>
					<div className="profile__content">{step}</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
