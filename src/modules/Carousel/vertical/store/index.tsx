import { action, makeObservable, observable } from "mobx";
import { CarouselStore } from "../../store";

export class VerticalCarouselStore extends CarouselStore {
  isAnimate = false;
  toLeft = false;

  constructor() {
    super();
    makeObservable(this, {
      onIdxChange: action,
			toLeft: observable
    });
  }

  onIdxChange = (relative: number) => {
    if (this.idx + relative < 0 || this.idx + relative > this.pageLen - 1)
      return;
    const newIdx = this.idx + relative;
    this.toLeft = newIdx > this.idx;
    this.idx = newIdx;
  };

  onAnimateEnd = () => {
    this.isAnimate = false;
    console.log("this.isAnimate :>> ", this.isAnimate);
  };
}
