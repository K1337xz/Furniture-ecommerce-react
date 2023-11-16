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
			<div className="contactForm__firstName">
				<label>First and Last name</label>
				<input {...register("names")} />
			</div>
			<div className="contactForm__email">
				<label>Email</label>
				<input {...register("email")} />
			</div>
			<div className="contactForm__topic">
				<label>Topic</label>
				<input {...register("topic")} />
			</div>
			<div className="contactForm__message">
				<label>Message</label>
				<textarea {...register("Message")} />
			</div>
			<input type="submit" />
		</form>
	);
}
