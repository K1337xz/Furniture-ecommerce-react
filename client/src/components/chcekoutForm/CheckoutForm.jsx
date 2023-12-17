import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
	fullName: yup.string().required("First and Last name is required!"),
	email: yup
		.string()
		.email("Email format is valid!")
		.required("Email is required!"),
	country: yup.string().required("Country is required!"),
	street: yup.string().required("Street is required!"),
	city: yup.string().required("Street is required!"),
	state: yup.string().required("state is required!"),
	zip: yup.string().required("zip is required!"),
});

export default function CheckoutForm() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});

	return (
		<from className="checkoutForm">
			<div className="checkoutForm__inputWrapp">
				<label>
					First and Last name
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
		</from>
	);
}
