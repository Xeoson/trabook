import { PropsWithChildren } from "react";

export type ModuleType = Record<
  string,
  React.FC<PropsWithChildren & { className?: string }>
>;
