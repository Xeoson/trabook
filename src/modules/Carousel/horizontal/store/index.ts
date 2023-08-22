import { ScreenType } from "@/shared/components/MatchMedia";
import { makeObservable, observable } from "mobx";
import { enableStaticRendering } from "mobx-react-lite";
import { CarouselStore } from "../../store";

enableStaticRendering(typeof window === "undefined");

export class HorizontalCarouselStore extends CarouselStore {
  offset = 0;
  isDown = false;

  columns: Partial<Record<ScreenType, number>> = {};
  startOffset = 0;
  startPageX = 0;
  controllerChildWidth = 0;

  constructor(initState: { columns: Partial<Record<ScreenType, number>> }) {
    super();
    Object.entries(initState).map(([key, value]) => {
      // @ts-ignore
      this[key] = value;
    });
    makeObservable(this, {
      offset: observable,
      isDown: observable,
    });
  }

  onIdxChange = (relative: number) => {
    if (this.idx + relative < 0 || this.idx + relative > this.pageLen - 1)
      return;

    this.idx = this.idx + relative;
    this.offset = this.idx * -this.controllerChildWidth;
  };

  onPointerMove = (e: React.PointerEvent) => {
    this.offset = e.pageX - this.startOffset;
  };

  onPointerDown = (e: React.PointerEvent) => {
    this.isDown = true;
    this.startOffset = e.pageX - this.offset;
    this.startPageX = e.pageX;
  };

  onPointerUp = (e: React.PointerEvent, withScroll: boolean = true) => {
    const controllerEl = e.currentTarget as HTMLElement;
    const containerOffset = controllerEl.offsetWidth;
    this.isDown = false;
    if (this.offset > 0) {
      this.offset = 0;
    } else if (controllerEl.scrollWidth + this.offset < containerOffset) {
      this.offset = containerOffset - controllerEl.scrollWidth;
    } else if (withScroll && Math.abs(e.pageX - this.startPageX) > 100) {
      const diff = e.pageX - this.startPageX > 0 ? 1 : -1;
      this.offset =
        (Math.round(this.offset / this.controllerChildWidth) + diff) *
        this.controllerChildWidth;
    } else {
      this.offset =
        Math.round(this.offset / this.controllerChildWidth) *
        this.controllerChildWidth;
    }
    this.idx = Math.round(Math.abs(this.offset) / this.controllerChildWidth);
  };

  onPointerLeave = (e: React.PointerEvent) => this.onPointerUp(e, false);
}
