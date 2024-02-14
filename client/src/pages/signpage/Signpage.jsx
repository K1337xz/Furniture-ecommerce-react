import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Nav from "../../components/navbar/Nav";
import Footer from "../../components/footer/Footer";
import lastphoto from "../../assets/lastphoto.jpg";
import { multiStepCart } from "../../hooks/multiStepCart";
import LoginForm from "../../components/loginForm/LoginForm";
import RegisterForm from "../../components/registerForm/RegisterForm";
import "./signpage.scss";
import "react-toastify/dist/ReactToastify.css";

export default function Signpage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const total = useSelector((state) => state.cart.total);
	const { loading, error } = useSelector((state) => state.user);

	const toggleChange = (e) => {
		e.preventDefault();
		next();
	};
	const toggleBack = (e) => {
		e.preventDefault();
		back();
	};

	const toggleLogin = (data) => {
		let userCredentials = {
			identifier: data.username,
			password: data.password,
		};

		dispatch(loginUser(userCredentials)).then((result) => {
			if (result.payload) {
				navigate(`${location.state.prevUrl}`);
			}
		});
	};
	const toggleRegister = async (data) => {
		let userRegCredentials = {
			email: data.email,
			username: data.username,
			firstName: data.firstName,
			lastName: data.lastName,
			password: data.password,
		};
		try {
			const request = await axios.post(
				`${import.meta.env.VITE_API_URL}/api/auth/local/register`,
				userRegCredentials
			);
			toast.success("Your account has been successfully created!", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			back();
		} catch (error) {
			console.log(error);
			toast.error(error.message, {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
		}
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
						<ToastContainer
							position="bottom-center"
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="light"
						/>

						<div className="signWrapper__left"></div>
						<div className="signWrapper__right">{step}</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
