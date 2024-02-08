import React from "react";
import "./Button.css";
import { ButtonProps } from "./Button.types";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
	primary = false,
	size = "medium",
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	const mode = primary ? "Button--primary" : "Button--secondary";
	return (
		<button
			type='button'
			className={["Button", `Button--${size}`, mode].join(" ")}
			style={{ backgroundColor }}
			{...props}>
			{label}
		</button>
	);
};
