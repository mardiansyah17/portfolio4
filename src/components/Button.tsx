import {ButtonHTMLAttributes, FC, ReactNode} from "react";

const Button: FC<ButtonProps> = ({variant = "solid", ...props}) => {
    return (
        <button
            className={
                `px-4 min-w-24 py-2 rounded-md 
            ${variant === "solid" ? "bg-gradient-to-br from-orange-600 to-amber-300 " : "border-orange-500 border"}
            `} {...props}></button>
    );
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "outline" | "solid";
}

export default Button;
