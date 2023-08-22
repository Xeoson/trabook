import { makeObservable, observable } from "mobx";

interface ICarouselStore {
  idx: number;
  pageLen: number;
  onIdxChange: (relative: number) => void;
  set: (state: { [K in keyof this]?: this[K] }) => void;
}

export abstract class CarouselStore implements ICarouselStore {
  idx = 0;
  pageLen = 0;

  constructor() {
    makeObservable(this, { idx: observable });
  }

  abstract onIdxChange: (rel: number) => void;

  set = (state: { [K in keyof this]?: this[K] }) => {
    for (const key in state) {
      //@ts-ignore
      this[key] = state[key];
    }
  };
}
