import { ButtonHTMLAttributes } from "react";

type DirectionType = "top" | "left" | "right" | "bottom";

const directionStyles: Record<DirectionType, string> = {
  bottom: "rotate-[-45deg]",
  left: "",
  right: "rotate-[180deg]",
  top: "rotate-[90deg]",
};

interface CarouselBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  direction?: DirectionType;
}

const ArrowButton = ({
  disabled,
  className,
  direction = "left",
  ...props
}: CarouselBtnProps) => {
  return (
    <button
      className={`${className ?? ""} ${directionStyles[direction]}`}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5rem"
        height="2.5rem"
        viewBox="0 0 40 40"
        fill="none"
      >
        <circle
          cx="20"
          cy="20"
          r="19.5"
          transform="matrix(-1 0 0 1 40 0)"
          className={!disabled ? "fill-primary" : ""}
          stroke={disabled ? "#999999" : ""}
          strokeOpacity="0.5"
        />
        <path
          d="M11.2929 19.2929C10.9024 19.6834 10.9024 20.3166 11.2929 20.7071L17.6569 27.0711C18.0474 27.4616 18.6805 27.4616 19.0711 27.0711C19.4616 26.6805 19.4616 26.0474 19.0711 25.6569L13.4142 20L19.0711 14.3431C19.4616 13.9526 19.4616 13.3195 19.0711 12.9289C18.6805 12.5384 18.0474 12.5384 17.6569 12.9289L11.2929 19.2929ZM28 19L12 19L12 21L28 21L28 19Z"
          className={!disabled ? "fill-primary-inverted" : "fill-[#999999]"}
          fillOpacity={disabled ? "0.5" : "1"}
        />
      </svg>
    </button>
  );
};

export default ArrowButton;
