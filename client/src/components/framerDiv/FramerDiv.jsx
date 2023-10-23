import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function FramerDiv({
	children,
	variantHidden,
	variantVisible,
	divClass,
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();
	const slideLeftControls = useAnimation();
	const slideControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
			slideControls.start("visible");
		}
	}, [isInView]);

	return (
		<div
			ref={ref}
			style={{ position: "relative", overflow: "hidden" }}
			className={divClass}
		>
			<motion.div
				variants={{
					hidden: variantHidden,
					visible: variantVisible,
				}}
				initial="hidden"
				animate={mainControls}
				transition={{ duration: 0.9, delay: 0.7 }}
				style={{ width: "100%" }}
			>
				{children}
			</motion.div>
			<motion.div
				variants={{
					hidden: { left: 0 },
					visible: { left: "100%" },
				}}
				initial="hidden"
				animate={slideControls}
				transition={{ duration: 0.5, ease: "easeIn" }}
			/>
		</div>
	);
}
