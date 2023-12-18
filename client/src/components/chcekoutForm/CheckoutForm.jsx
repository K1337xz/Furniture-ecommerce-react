import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import "./checkoutform.scss";

const schema = yup.object({
	names: yup.string().required("First and Last name is required!"),
	email: yup
		.string()
		.email("Email format is valid!")
		.required("Email is required!"),
	street: yup.string().required("street is required"),
	country: yup.string().required("country is required"),
});

export default function CheckoutForm() {
	const [countries, setCountries] = useState([]);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});
	const toggleSend = (data) => {
		console.log(data);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await axios.get(
					"https://restcountries.com/v3.1/all?fields=name"
				);
				setCountries(data.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<form className="checkoutForm" onSubmit={handleSubmit(toggleSend)}>
			<div className="checkoutForm__inputWrapp">
				<label>
					<div className="checkoutForm__top">
						<p>First and Last name </p>
						<span>*</span>
					</div>
					<input
						{...register("names")}
						className={errors.names ? "checkoutForm__errorInp" : ""}
					/>
					{errors.names && (
						<span className="checkoutForm__error">
							{errors.names.message}
						</span>
					)}
				</label>
			</div>
			<div className="checkoutForm__inputWrapp">
				<label>
					<div className="checkoutForm__top">
						<p>Email</p>
						<span>*</span>
					</div>
					<input
						{...register("email")}
						className={errors.email ? "checkoutForm__errorInp" : ""}
					/>
					{errors.email && (
						<span className="checkoutForm__error">
							{errors.email.message}
						</span>
					)}
				</label>
			</div>
			<div className="checkoutForm__inputWrapp">
				<label>
					<div className="checkoutForm__top">
						<p>Country</p>
						<span>*</span>
					</div>
					<select
						{...register("country")}
						className={errors.topic ? "checkoutForm__errorInp" : ""}
					>
						<option>---SELECT COUNTRY ----</option>
						{countries.map((item) => {
							return (
								<option key={item.name.common}>
									{item.name.common}
								</option>
							);
						})}
					</select>
					{errors.topic && (
						<span className="checkoutForm__error">
							{errors.topic.message}
						</span>
					)}
				</label>
			</div>
			<div className="checkoutForm__inputWrapp">
				<label>
					<div className="checkoutForm__top">
						<p>Street</p>
						<span>*</span>
					</div>
					<input
						{...register("street")}
						className={
							errors.message ? "checkoutForm__errorInp" : ""
						}
					/>
					{errors.message && (
						<span className="checkoutForm__error">
							{errors.message.message}
						</span>
					)}
				</label>
			</div>
			<div className="checkoutForm__sendWrapper">
				<input
					type="submit"
					value="Send"
					className="checkoutForm__sendBtn"
				/>
			</div>
		</form>
	);
}
