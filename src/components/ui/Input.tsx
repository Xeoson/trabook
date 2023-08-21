import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  startChild?: ReactNode;
  endChild?: ReactNode;
}

const Input = ({ className, startChild = null, endChild = null, ...props }: InputProps) => {
  return (
    <label
      className={`${
        className ?? ""
      } min-w-0 cursor-text flex items-center gap-2 p-2 bg-white focus-within:outline-primary outline-2 rounded-lg`}
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
