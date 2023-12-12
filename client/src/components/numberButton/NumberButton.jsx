import { FaPlus, FaMinus } from "react-icons/fa";
import "./numberbutton.scss";
import { useState } from "react";

export default function NumberButton({
	amount,
	toggleSubtract,
	toggleAdd,
	toggleChange,
	style,
	toggleDisable,
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
				min="1"
				onChange={toggleChange}
				disabled={toggleDisable}
			/>
			<div className="numberButton__button" onClick={toggleAdd}>
				<FaPlus />
			</div>
		</div>
	);
}
