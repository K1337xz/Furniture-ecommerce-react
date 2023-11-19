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
					<input {...register("names")} />
				</label>
			</div>
			<div className="contactForm__inputWrapp">
				<label>
					email
					<input {...register("email")} />
				</label>
			</div>
			<div className="contactForm__inputWrapp">
				<label>
					topic
					<input {...register("topic")} />
				</label>
			</div>
			<div className="contactForm__inputWrapp">
				<label>Message</label>
				<textarea {...register("message")} />
			</div>
			<input type="submit" />
		</form>
	);
}
