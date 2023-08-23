import { Children, PropsWithChildren } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import List from "../ui/List";

interface BurgerMenuLayoutProps extends PropsWithChildren {
  className?: string;
  onClose: () => void;
}

const BurgerMenuLayout = (props: BurgerMenuLayoutProps) => {
  return (
    <div
      className={
        "flex bg-bg1 z-50 overflow-auto overscroll-none pt-4 px-page flex-col gap-8 top-0 right-0 left-0 bottom-0"
      }
    >
      <div className="flex items-center justify-between h-16">
        <Logo />
        <Button onClick={props.onClose} className="p-2 ml-auto">
          <AiOutlineClose />
        </Button>
      </div>
      <List
        itemClassName="text-2xl child:py-3"
        style="vertical-divided"
      >
        {props.children}
      </List>
    </div>
  );
};

export default BurgerMenuLayout;
