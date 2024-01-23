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

export default function LoginForm({ reg }) {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});
	return (
		<form className="loginForm">
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
						{...register("names")}
						className={errors.names ? "loginForm__errorInp" : ""}
					/>
					{errors.names && (
						<span className="loginForm__error">
							{errors.names.message}
						</span>
					)}
				</label>
			</div>
			<div className="loginForm__sendWrapper">
				<input
					type="submit"
					value="Send"
					className="loginForm__sendBtn"
				/>
			</div>
			<div className="loginForm__noAcc">
				<p>
					Don’t have an account?{" "}
					<Link to="#" onClick={register}>
						Sign in
					</Link>
				</p>
			</div>
		</form>
	);
}
