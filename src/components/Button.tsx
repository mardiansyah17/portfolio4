import { ButtonHTMLAttributes, FC, ReactNode } from "react";

const Button: FC<ButtonProps> = ({ variant = "solid", size = "md", ...props }) => {
  return (
    <button
      className={`${size === "md" ? "px-4  py-2" : "px-2 py-1 text-sm"} rounded-md 
            ${
              variant === "solid"
                ? "bg-gradient-to-br from-orange-600 to-amber-300 "
                : "border-orange-500 border"
            }
            `}
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
