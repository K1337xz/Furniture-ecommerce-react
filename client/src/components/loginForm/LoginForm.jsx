import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./loginForm.scss";
import { Link } from "react-router-dom";

const schema = yup.object({
	email: yup
		.string()
		.email("Email format is valid!")
		.required("Email is required!"),
	password: yup
		.string()
		.required("No password provided.")
		.min(8, "Password is too short - should be 8 chars minimum.")
		.matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export default function LoginForm({ reg, submit }) {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});
	return (
		<form className="loginForm" onSubmit={handleSubmit(submit)}>
			<div className="loginForm__inputWrapp">
				<label>
					Email
					<input
						{...register("email")}
						className={errors.email ? "loginForm__errorInp" : ""}
					/>
					{errors.email && (
						<span className="loginForm__error">
							{errors.email.message}
						</span>
					)}
				</label>
			</div>
			<div className="loginForm__inputWrapp">
				<label>
					Password
					<input
						{...register("password")}
						type="password"
						className={errors.password ? "loginForm__errorInp" : ""}
					/>
					{errors.password && (
						<span className="loginForm__error">
							{errors.password.message}
						</span>
					)}
				</label>
			</div>
			<div className="loginForm__sendWrapper">
				<input
					type="submit"
					value="Sign In"
					className="loginForm__sendBtn"
				/>
			</div>
			<div className="loginForm__noAcc">
				<p>
					Don’t have an account? &nbsp;
					<Link to="#" onClick={reg}>
						Sign Up
					</Link>
				</p>
			</div>
		</form>
	);
}
