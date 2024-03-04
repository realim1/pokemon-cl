import React from "react";
import "@realim1/scss/dist/Button.css";
import { ButtonProps } from "./Button.types";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
	primary = false,
	size = "medium",
	label,
	...props
}: ButtonProps) => {
	const mode = primary ? "button--primary" : "button--secondary";
	return (
		<button
			type='button'
			className={["button", "pixel-corners", `button--${size}`, mode].join(" ")}
			{...props}>
			{label}
		</button>
	);
};
