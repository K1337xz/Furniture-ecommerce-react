import { FaPlus, FaMinus } from "react-icons/fa";
import "./numberbutton.scss";
import { useState } from "react";

export default function NumberButton() {
	const [numberValue, setNumberValue] = useState(0);
	return (
		<div className="numberButton">
			<div
				className="numberButton__button"
				onClick={() => {
					setNumberValue((prev) => prev - 1);
				}}
			>
				<FaMinus />
			</div>
			<input type="number" value={numberValue} min="0" />
			<div
				className="numberButton__button"
				onClick={() => {
					setNumberValue((prev) => prev + 1);
				}}
			>
				<FaPlus />
			</div>
		</div>
	);
}
