"use client";

import withProvider from "@/shared/mobx/withProvider";
import { PropsWithChildren } from "react";
import { HorizontalCarouselStore } from "./store";

export default withProvider(
  (props: PropsWithChildren) => props.children,
  HorizontalCarouselStore
);
