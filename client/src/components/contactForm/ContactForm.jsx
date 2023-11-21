import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./contactform.scss";

const schema = yup.object({
	names: yup.string().required("First and Last name is required!"),
	email: yup
		.string()
		.email("Email format is valid!")
		.required("Email is required!"),
	topic: yup.string().required("Topic is required"),
	message: yup.string().required("Message is required"),
});

export default function ContactForm() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});

	console.log(errors);
	const toggleSend = (data) => {
		console.log(data);
	};

	return (
		<form className="contactForm" onSubmit={handleSubmit(toggleSend)}>
			<div className="contactForm__inputWrapp">
				<label>
					First and Last name
					<input
						{...register("names")}
						className={errors.names ? "contactForm__errorInp" : ""}
					/>
					{errors.names && (
						<span className="contactForm__error">
							{errors.names.message}
						</span>
					)}
				</label>
			</div>
			<div className="contactForm__inputWrapp">
				<label>
					Email
					<input
						{...register("email")}
						className={errors.email ? "contactForm__errorInp" : ""}
					/>
					{errors.email && (
						<span className="contactForm__error">
							{errors.email.message}
						</span>
					)}
				</label>
			</div>
			<div className="contactForm__inputWrapp">
				<label>
					Topic
					<input
						{...register("topic")}
						className={errors.topic ? "contactForm__errorInp" : ""}
					/>
					{errors.topic && (
						<span className="contactForm__error">
							{errors.topic.message}
						</span>
					)}
				</label>
			</div>
			<div className="contactForm__inputTextArea">
				<label>
					Message
					<textarea
						{...register("message")}
						className={
							errors.message ? "contactForm__errorInp" : ""
						}
					/>
					{errors.message && (
						<span className="contactForm__error">
							{errors.message.message}
						</span>
					)}
				</label>
			</div>
			<div className="contactForm__sendWrapper">
				<input
					type="submit"
					value="Send"
					className="contactForm__sendBtn"
				/>
			</div>
		</form>
	);
}
