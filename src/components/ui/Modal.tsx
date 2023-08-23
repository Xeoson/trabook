"use client";

import Portal from "@/shared/components/Portal";
import { ReactNode, useEffect, useState } from "react";

interface ContentParams {
  onOpen: () => void;
  onClose: () => void;
}

interface ModalProps {
  className?: string;
  outsideContent: (params: ContentParams) => ReactNode;
  children: ReactNode | ((params: ContentParams) => ReactNode);
}

const Modal = (props: ModalProps) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      {props.outsideContent({
        onOpen,
        onClose,
      })}
      {isOpen && (
        <Portal>
          <div className="fixed top-0 w-full h-full z-[999] bg-bg1">
            {typeof props.children === "function"
              ? props.children({ onClose, onOpen })
              : props.children}
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
