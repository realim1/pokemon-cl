import { MouseEventHandler } from "react";
export interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
