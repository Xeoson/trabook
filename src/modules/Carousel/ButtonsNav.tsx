"use client";

import ArrowButton from "@/components/ui/ArrowButton";
import { useStore } from "@/shared/mobx/withProvider";
import { CarouselStore } from "./store";
import { observer } from "mobx-react-lite";

interface ButtonsNavProps {
  className?: string;
}

const ButtonsNav = observer((props: ButtonsNavProps) => {
  const {idx, onIdxChange, pageLen} = useStore<CarouselStore>();
  return (
    <div className={`${props.className ?? ""} inline-flex gap-4`}>
      <ArrowButton disabled={idx == 0} onClick={() => onIdxChange(-1)} />
      <ArrowButton
        disabled={idx === pageLen - 1}
        direction="right"
        onClick={() => onIdxChange(1)}
      />
    </div>
  );
});

export default ButtonsNav;
