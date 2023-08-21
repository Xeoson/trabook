import LogoSvg from "@/../public/icons/Logo.svg";

interface LogoProps {
  className?: string;
}

const Logo = (props: LogoProps) => {
  return (
    <div
      className={`${
        props.className ?? ""
      } flex items-center gap-2 text-2xl font-bold`}
    >
      <span>Trabook</span>
      <LogoSvg className="mt-1 text-base" />
    </div>
  );
};

export default Logo;
