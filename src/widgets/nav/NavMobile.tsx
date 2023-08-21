"use client"

import BurgerMenuLayout from "@/components/layout/BurgerMenuLayout";
import Button from "@/components/ui/Button";
import { PropsWithChildren, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface NavMobileProps extends PropsWithChildren {
  className?: string;
}

const NavMobile = (props: NavMobileProps) => {
  const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "auto";
	}, [isOpen])

  return (
    <>
      <Button className={props.className} onClick={() => setOpen(true)}>
        <AiOutlineMenu />
      </Button>
      {isOpen && (
        <BurgerMenuLayout onClose={() => setOpen(false)}>
          {props.children}
        </BurgerMenuLayout>
      )}
    </>
  );
};

export default NavMobile;
