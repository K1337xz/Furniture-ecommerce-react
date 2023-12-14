import { useState } from "react";

export function multiStepCart(steps) {
	const [currentStepId, setCurrentStepId] = useState(0);

	function next() {
		setCurrentStepId((i) => {
			if (i >= steps.length - 1) return i;
			return i + 1;
		});
	}
	function goBack() {
		if (i <= 0) return i;
		return i - 1;
	}
	function goTo(id) {
		setCurrentStepId(id);
	}
	return {
		currentStepId,
		step: steps[currentStepId],
		goTo,
		goBack,
		next,
		steps,
	};
}
