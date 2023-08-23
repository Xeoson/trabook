import { cn } from "@/shared/helpers/classname";
import { InputHTMLAttributes, ReactNode } from "react";

const styles = {
  bordedred: "border rounded-md border-accent",
};

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'style'> {
  startChild?: ReactNode;
  endChild?: ReactNode;
  style?: keyof typeof styles;
}

const Input = ({ className, startChild = null, endChild = null, style, ...props }: InputProps) => {
  return (
    <label
      className={cn(
        className,
        style && styles[style],
        "min-w-0 cursor-text flex items-center gap-2 p-2 bg-white focus-within:outline-primary outline-2 rounded-lg"
      )}
    >
      {startChild && <div className="shrink-0">{startChild}</div>}
      <input
        type={"text"}
        className="min-w-0 outline-none grow text-text2 placeholder:text-placeholder"
        {...props}
      />
      {endChild}
    </label>
  );
};

export default Input;
