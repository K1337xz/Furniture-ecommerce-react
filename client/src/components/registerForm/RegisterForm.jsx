import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ref } from "yup";
import "./registerForm.scss";
import { Link } from "react-router-dom";

const schema = yup.object({
	firstName: yup.string().required("First name is required!"),
	lastName: yup.string().required("Last name is required!"),
	username: yup.string().required("Username is required!"),
	email: yup
		.string()
		.email("Email format is valid!")
		.required("Email is required!"),
	password: yup
		.string()
		.required("No password provided.")
		.min(8, "Password is too short - should be 8 chars minimum.")
		.matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
	comfirmPassword: yup
		.string()
		.required("Please re-type your password")
		.oneOf([ref("password")], "Passwords does not match"),
});

export default function RegisterForm({ log, submit }) {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});
	return (
		<form className="registerForm" onSubmit={handleSubmit(submit)}>
			<div className="registerForm__inputWrapp">
				<label>
					First Name
					<input
						{...register("firstName")}
						className={
							errors.firstName ? "registerForm__errorInp" : ""
						}
					/>
					{errors.firstName && (
						<span className="registerForm__error">
							{errors.firstName.message}
						</span>
					)}
				</label>
			</div>
			<div className="registerForm__inputWrapp">
				<label>
					Last Name
					<input
						{...register("lastName")}
						className={
							errors.lastName ? "registerForm__errorInp" : ""
						}
					/>
					{errors.lastName && (
						<span className="registerForm__error">
							{errors.lastName.message}
						</span>
					)}
				</label>
			</div>
			<div className="registerForm__inputWrapp">
				<label>
					Username
					<input
						{...register("username")}
						className={
							errors.username ? "registerForm__errorInp" : ""
						}
					/>
					{errors.lastName && (
						<span className="registerForm__error">
							{errors.lastName.message}
						</span>
					)}
				</label>
			</div>
			<div className="registerForm__inputWrapp">
				<label>
					Email
					<input
						{...register("email")}
						className={errors.email ? "registerForm__errorInp" : ""}
					/>
					{errors.email && (
						<span className="registerForm__error">
							{errors.email.message}
						</span>
					)}
				</label>
			</div>
			<div className="registerForm__inputWrapp">
				<label>
					Password
					<input
						{...register("password")}
						type="password"
						className={
							errors.password ? "registerForm__errorInp" : ""
						}
					/>
					{errors.username && (
						<span className="registerForm__error">
							{errors.username.message}
						</span>
					)}
				</label>
			</div>
			<div className="registerForm__inputWrapp">
				<label>
					Comfirm Password
					<input
						{...register("comfirmPassword")}
						type="password"
						className={
							errors.comfirmPassword
								? "registerForm__errorInp"
								: ""
						}
					/>
					{errors.comfirmPassword && (
						<span className="registerForm__error">
							{errors.comfirmPassword.message}
						</span>
					)}
				</label>
			</div>
			<div className="registerForm__sendWrapper">
				<input
					type="submit"
					value="Sign Up"
					className="registerForm__sendBtn"
				/>
			</div>
			<div className="registerForm__noAcc">
				<p>
					Already have an account?&nbsp;
					<Link to="#" onClick={log}>
						Sign in
					</Link>
				</p>
			</div>
		</form>
	);
}
