import ArrowSvg from "@/../public/icons/BottomArrow.svg";

interface SelectTripOptionProps {
  className?: string;
	btnText: string
	text: string
	onClick: (e: React.MouseEvent) => void
}

const SelectTripOption = (props: SelectTripOptionProps) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="flex items-center gap-1 font-medium"
      >
        <span>{props.btnText}</span>
        <ArrowSvg className="text-sm" />
      </button>
      <p className="mt-2 text-sm text-text3">{props.text}</p>
    </div>
  );
};

export default SelectTripOption;
