import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./checkoutform.scss";

const schema = yup.object({
	names: yup.string().required("First and Last name is required!"),
	email: yup
		.string()
		.email("Email format is valid!")
		.required("Email is required!"),
	street: yup.string().required("street is required"),
	country: yup.string().required("country is required"),
	phone: yup
		.string()
		.required("Phone is a required field")
		.matches(
			/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
			"Invalid phone number format"
		),
	zipcode: yup
		.string()
		.required("Zipcode is a required field")
		.matches(/^[0-9.-]*$/, "Invalid zipcode format"),
});

export default function CheckoutForm({ submit }) {
	const navigate = useNavigate();
	const user = useSelector((state) => state.user.user);
	const [countries, setCountries] = useState([]);
	const [checkOutData, setCheckOutData] = useState([]);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});
	const toggleSend = (data) => {
		setCheckOutData(data);
		makePayment(values);
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
		<>
			<form className="checkoutForm" onSubmit={handleSubmit(submit)}>
				{!user && (
					<div className="checkoutForm__acc">
						<p>
							If you already have an account.
							<Link to="/login" state={{ prevUrl: "/cart" }}>
								Click to log in
							</Link>
						</p>
					</div>
				)}
				<div className="checkoutForm__inputWrapp">
					<label>
						<div className="checkoutForm__top">
							<p>First and Last name </p>
							<span>*</span>
						</div>
						<input
							{...register("names")}
							className={
								errors.names ? "checkoutForm__errorInp" : ""
							}
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
							className={
								errors.email ? "checkoutForm__errorInp" : ""
							}
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
							className={
								errors.country ? "checkoutForm__errorInp" : ""
							}
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
								{errors.country.message}
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
								errors.street ? "checkoutForm__errorInp" : ""
							}
						/>
						{errors.street && (
							<span className="checkoutForm__error">
								{errors.street.message}
							</span>
						)}
					</label>
				</div>
				<div className="checkoutForm__inputWrapp">
					<label>
						<div className="checkoutForm__top">
							<p>ZIP Code </p>
							<span>*</span>
						</div>
						<input
							{...register("zipcode")}
							className={
								errors.zipcode ? "checkoutForm__errorInp" : ""
							}
						/>
						{errors.zipcode && (
							<span className="checkoutForm__error">
								{errors.zipcode.message}
							</span>
						)}
					</label>
				</div>
				<div className="checkoutForm__inputWrapp">
					<label>
						<div className="checkoutForm__top">
							<p>Phone Number</p>
							<span>*</span>
						</div>
						<input
							{...register("phone")}
							className={
								errors.phone ? "checkoutForm__errorInp" : ""
							}
						/>
						{errors.phone && (
							<span className="checkoutForm__error">
								{errors.phone.message}
							</span>
						)}
					</label>
				</div>
				<div className="checkoutForm__sendWrapper">
					<input
						type="submit"
						value="Checkout"
						className="checkoutForm__sendBtn"
					/>
				</div>
			</form>
		</>
	);
}
