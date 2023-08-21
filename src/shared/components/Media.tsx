"use client"

import { PropsWithChildren } from "react";
import useMatchMedia from "../hooks/useMatchMedia";

interface MediaProps extends PropsWithChildren {
  match: string;
}

const Media = (props: MediaProps) => {
  const screen = useMatchMedia("zero", props.match);

  return screen ? (
    screen === props.match ? (
      props.children
    ) : null
  ) : (
    <div className={`max-${props.match}:hidden`}>{props.children}</div>
  );
};

export default Media;
