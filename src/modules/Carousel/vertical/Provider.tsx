"use client";

import withProvider from "@/shared/mobx/withProvider";
import { PropsWithChildren } from "react";
import { VerticalCarouselStore } from "./store";

export default withProvider(
  (props: PropsWithChildren) => props.children,
  VerticalCarouselStore
);
