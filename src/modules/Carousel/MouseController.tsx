"use client";

import useOnMountRef from "@/shared/hooks/useOnMountRef";
import { useStore } from "@/shared/mobx/withProvider";
import { observer } from "mobx-react-lite";
import { PropsWithChildren } from "react";
import { CarouselStore } from "./store";
import useOnResizeEffect from "@/shared/hooks/useOnResizeEffect";

interface MouseControllerProps extends PropsWithChildren {
  className?: string;
}

const MouseController = observer((props: MouseControllerProps) => {
  const store =
    useStore<CarouselStore>();

  const ref = useOnMountRef<HTMLUListElement>((el) =>
    store.set({ controllerChildWidth: (el.children[0] as HTMLElement).offsetWidth })
  );

	useOnResizeEffect(() =>
    store.set({ controllerChildWidth: (ref.current!.children[0] as HTMLElement).offsetWidth })
  );

  return (
    <ul
      ref={ref}
      onPointerMove={store.isDown ? store.onPointerMove : undefined}
      onPointerDown={store.onPointerDown}
      onPointerUp={store.onPointerUp}
      onPointerLeave={store.onPointerLeave}
      style={{
        transition: !store.isDown ? "translate 300ms ease" : undefined,
        translate: `${store.offset}px 0px`,
      }}
      className={props.className}
    >
      {props.children}
    </ul>
  );
});

export default MouseController;
