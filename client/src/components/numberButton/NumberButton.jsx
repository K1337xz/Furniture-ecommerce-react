import { FaPlus, FaMinus } from "react-icons/fa";
import "./numberbutton.scss";
import { useState } from "react";

export default function NumberButton({
	amount,
	toggleSubtract,
	toggleAdd,
	toggleChange,
	style,
}) {
	return (
		<div className="numberButton" style={style}>
			<div className="numberButton__button" onClick={toggleSubtract}>
				<FaMinus />
			</div>
			<input
				type="number"
				value={amount}
				max="0"
				onChange={toggleChange}
			/>
			<div className="numberButton__button" onClick={toggleAdd}>
				<FaPlus />
			</div>
		</div>
	);
}
