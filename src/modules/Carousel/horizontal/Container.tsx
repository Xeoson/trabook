"use client";

import { ScreenType } from "@/shared/components/MatchMedia";
import { cn } from "@/shared/helpers/classname";
import useMatchMedia from "@/shared/hooks/useMatchMedia";
import { useStore } from "@/shared/mobx/withProvider";
import { Children, PropsWithChildren, useMemo } from "react";
import { HorizontalCarouselStore } from "./store";
import Controller from "./Controller";

interface ContainerProps extends PropsWithChildren {
  className?: string;
  itemGapRem?: number;
}

const Container = ({ itemGapRem = 1, ...props }: ContainerProps) => {
  const store = useStore<HorizontalCarouselStore>();
  const screen = useMatchMedia(...Object.keys(store.columns)) as ScreenType;

  const columns = store.columns[screen] ?? 3;

  const els = useMemo(() => {
    const pageLen = Math.ceil(Children.count(props.children) / columns);
    store.set({ pageLen });
    const children = Children.toArray(props.children);
    return Array.from({ length: pageLen }, (_, i) =>
      children.slice(i * columns, (i + 1) * columns)
    );
  }, [columns]);

  return (
    <div
      className={cn(props.className, "select-none touch-none overflow-hidden")}
    >
      <Controller className="flex will-change-transform">
        {els.map((el, i) => (
          <li
            key={i}
            style={{
              gridTemplateColumns: "1fr ".repeat(columns),
              paddingInline: `${itemGapRem / 2}rem`,
              columnGap: `${itemGapRem}rem`,
            }}
            className={"grid min-w-full grid-flow-col"}
          >
            {el.map((el) => el)}
          </li>
        ))}
      </Controller>
    </div>
  );
};

export default Container;
