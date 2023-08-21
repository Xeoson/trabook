import MatchMedia from "@/shared/components/MatchMedia";
import { ReactNode } from "react";
import NavMobile from "./NavMobile";

interface NavProps {
  className?: string;
  children: ReactNode;
}

const Nav = (props: NavProps) => {
  return (
    <MatchMedia
      md={<nav className={`justify-self-center  flex`}>{props.children}</nav>}
      zero={<NavMobile>{props.children}</NavMobile>}
    />
  );
};

export default Nav;
