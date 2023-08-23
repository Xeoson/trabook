import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface PortalProps extends PropsWithChildren {
  className?: string;
	element?: Parameters<typeof createPortal>[1]
}

const Portal = (props: PortalProps) => {
  return createPortal(props.children, props.element ?? document.body);
};

export default Portal;
