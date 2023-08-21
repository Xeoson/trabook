"use client";
import config from "@/../tailwind.config";

const screens = Object.keys(config.theme!.extend!.screens!);

import { ReactNode } from "react";
import useMatchMedia from "../hooks/useMatchMedia";

const formatBrakpoints = (
  breakpoints: Partial<Record<ScreenType, ReactNode>>
) => {
  const breakpointsEntries = Object.entries(breakpoints);
  if (breakpointsEntries.length === 1) {
    const [bp, el] = breakpointsEntries[0];
    return [[``, el]];
  }
  const sorted = breakpointsEntries.sort(
    ([bpA, e1], [bpB, e2]) =>
      screens.findIndex((el) => el === bpA) -
      screens.findIndex((el) => el === bpB)
  );

  const ret = sorted
    .slice(0, -1)
    .map(([bp, el], i) => [`${sorted[i + 1][0]}:hidden`, el]);

  const [lastBp, lastEl] = sorted.at(-1)!;
  ret.push([`hidden ${lastBp}:contents`, lastEl]);
  return ret;
};

export type ScreenType = "zero" | "sm" | "md" | "lg";

interface MatchMediaProps extends Partial<Record<ScreenType, ReactNode>> {}

const MatchMedia = (props: MatchMediaProps) => {
  const screen = useMatchMedia(...Object.keys(props)) as ScreenType;

  return screen
    ? props[screen]
    : (formatBrakpoints(props) as Array<[string, ReactNode]>).map((el, i) => (
        <span key={i} className={el[0]}>
          {el[1]}
        </span>
      ));
};

export default MatchMedia;
