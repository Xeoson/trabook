import { cn } from "@/shared/helpers/classname";
import { AnchorHTMLAttributes } from "react";

const themeStyles = {
  primary: "!bg-primary scale-[1.2] !text-primary-inverted",
};

interface SocialLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  theme?: keyof typeof themeStyles;
}

const SocialLink = ({ className, theme, ...props }: SocialLinkProps) => {
  return (
    <a
      {...props}
      className={cn(
        className,
				theme && themeStyles[theme],
        "rounded-full cursor-pointer p-4 bg-primary-inverted text-text shadow-md shadow-primary-shadow"
      )}
    ></a>
  );
};

export default SocialLink;
