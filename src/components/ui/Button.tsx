import { cn } from "@/shared/helpers/classname";
import { ThemeType } from "@/shared/types";
import { ButtonHTMLAttributes } from "react";

type ButtonSizeType = "lg";

const themeStyles: Record<ThemeType, string> = {
  primary:
    "rounded-primary text-primary-inverted bg-primary shadow-button shadow-primary-shadow",
		secondary: 'rounded-primary text-primary border border-primary font-medium'
};
const sizeStyles: Record<ButtonSizeType, string> = {
  lg: "px-12 py-3",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeType;
  size?: ButtonSizeType;
}

const Button = ({ theme, className, size, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      {...props}
      className={cn(
        className,
        theme && themeStyles[theme],
        size && sizeStyles[size],
        "text-primary"
      )}
    ></button>
  );
};

export default Button;
