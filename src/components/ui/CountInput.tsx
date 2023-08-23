import Button from "./Button";

interface CountInputProps {
  className?: string;
  onChange: (v: number) => void;
  value: number;
}

const CountInput = (props: CountInputProps) => {
  return (
    <div className="inline-flex items-center gap-4 justify-items-centerr">
      <Button
        disabled={props.value === 0}
        className="w-10 text-2xl aspect-[1] disabled:opacity-70 border rounded-full border-accent"
        onClick={() => props.onChange(Math.max(props.value - 1, 0))}
      >
        -
      </Button>
      <span className="min-w-[2ch] text-center">{props.value}</span>
      <Button
        className="w-10 text-2xl aspect-[1] border rounded-full border-accent"
        onClick={() => props.onChange(props.value + 1)}
      >
        +
      </Button>
    </div>
  );
};

export default CountInput;
