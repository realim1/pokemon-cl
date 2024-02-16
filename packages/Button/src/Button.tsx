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
	const mode = primary ? "Button--primary" : "Button--secondary";
	return (
		<button
			type='button'
			className={["Button", "pixel-corners", `Button--${size}`, mode].join(" ")}
			{...props}>
			{label}
		</button>
	);
};
