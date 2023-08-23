import BurgerMenuLayout from "@/components/layout/BurgerMenuLayout";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import MatchMedia from "@/shared/components/MatchMedia";
import { ReactNode } from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface NavProps {
  className?: string;
  children: ReactNode;
}

const Nav = (props: NavProps) => {
  return (
    <MatchMedia
      md={<nav className={`justify-self-center flex`}>{props.children}</nav>}
      zero={
        <Modal
          outsideContent={({ onOpen }) => (
            <Button className={props.className} onClick={onOpen}>
              <AiOutlineMenu />
            </Button>
          )}
        >
          {({ onClose }) => (
            <BurgerMenuLayout onClose={onClose}>{props.children}</BurgerMenuLayout>
          )}
        </Modal>
      }
    />
  );
};

export default Nav;
