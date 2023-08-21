"use client";

import { useStore } from "@/shared/mobx/withProvider";
import { observer } from "mobx-react-lite";
import { CarouselStore } from "./store";

interface CarouselDotsProps {
  className?: string;
}

const CarouselDots = observer((props: CarouselDotsProps) => {
  const { idx, pageLen, onIdxChange } = useStore<CarouselStore>();

  return (
    <div className={`${props.className ?? ""} inline-flex gap-2`}>
      {Array.from({ length: pageLen }, (_, i) => (
        <span
          key={i}
          onClick={() => onIdxChange(i - idx)}
          className={`${
            idx === i ? "bg-primary scale-125" : "bg-navdot"
          } w-3 cursor-pointer h-3 rounded-full`}
        ></span>
      ))}
    </div>
  );
});

export default CarouselDots;
