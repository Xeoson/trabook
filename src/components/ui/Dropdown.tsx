"use client";

import useOutsideClick from "@/shared/hooks/useOutsideClick";
import { PropsWithChildren, ReactNode, useState } from "react";

type OutsideContentParams = {
  onOpen: (e: React.MouseEvent) => void;
};

interface DropdownProps extends PropsWithChildren {
  className?: string;
	contentClassName?: string
  outsideContent: (params: OutsideContentParams) => ReactNode;
}

const Dropdown = (props: DropdownProps) => {
  const [isOpen, setOpen] = useState(false);

  const ref = useOutsideClick<HTMLDivElement>(() => setOpen(false));

  const onOpen = () => {
    setOpen(true);
  };

  return (
    <div ref={ref} className={`${props.className ?? ""} grid relative gap-4`}>
      {props.outsideContent({ onOpen })}
      {isOpen && (
        <div
          className={`${
            props.contentClassName ?? ""
          } absolute top-[100%] z-50 transition-opacity border-2 rounded-md bg-bg1 animate-show border-accent`}
        >
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
