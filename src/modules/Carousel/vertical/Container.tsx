"use client";

import useOnMountRef from "@/shared/hooks/useOnMountRef";
import { useStore } from "@/shared/mobx/withProvider";
import { observer } from "mobx-react-lite";
import {
  Children,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { VerticalCarouselStore } from "./store";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container = observer((props: ContainerProps) => {
  const [childHeight, setChildHeight] = useState<number>();
  const store = useStore<VerticalCarouselStore>();

  const children = useRef(Children.toArray(props.children)).current;

  const ref = useOnMountRef<HTMLDivElement>((el) => {
    setChildHeight(el.offsetHeight * 1.4);
  });

  useEffect(() => {
    store.set({ pageLen: children.length });
  }, []);

  return (
    <ul
      style={{ height: childHeight }}
      className="relative flex items-center box-content mx-auto w-[80%] max-md:mt-16"
    >
      <div
        key={store.idx - 1}
        className={`${
          store.toLeft ? "animate-up-hide" : ""
        } absolute pointer-events-none w-full opacity-0 translate-x-[-15%] z-40 translate-y-[-60%]`}
      >
        {children[store.idx - 1]}
      </div>
      <div
        ref={ref}
        key={store.idx}
        className={`${
          store.toLeft ? "animate-up" : "animate-down-show"
        } absolute pointer-events-none translate-x-[-5%] translate-y-[-20%] w-full z-30`}
      >
        {children[store.idx]}
      </div>
      <div
        key={store.idx + 1}
        className={`${
          store.toLeft ? "animate-up-show" : "animate-down"
        } absolute pointer-events-none w-full z-20 translate-x-[5%] translate-y-[20%]`}
      >
        {children[store.idx + 1]}
      </div>
      <div
        key={store.idx + 2}
        className={`${
          store.toLeft ? "" : "animate-down-hide"
        } absolute pointer-events-none opacity-0 z-10 translate-x-[15%] translate-y-[60%]`}
      >
        {children[store.idx + 2]}
      </div>
    </ul>
  );
});

export default Container;
