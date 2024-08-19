import { ButtonHTMLAttributes, FC, ReactNode } from "react";

const Button: FC<ButtonProps> = ({ variant = "solid", size = "md", className = "", ...props }) => {
  return (
    <button
      className={`${size === "md" ? "px-3  h-10" : "px-2 h-8 text-sm"} rounded-md 
            ${
              variant === "solid"
                ? "bg-gradient-to-br from-orange-600 to-amber-300 "
                : "border-orange-500 border"
            }
          ${className}  `}
      {...props}
    ></button>
  );
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "outline" | "solid";
  size?: "sm" | "md";
}

export default Button;
