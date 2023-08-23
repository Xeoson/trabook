import { useEffect, useRef } from "react";

export default <E extends HTMLElement>(callback: () => void) => {
	const ref = useRef<E | null>(null)
  useEffect(() => {
    const handleClick = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        callback();
      }
    };
    window.addEventListener("pointerdown", handleClick);
    return () => {
      window.removeEventListener("pointerdown", handleClick);
    };
  }, [ref.current]);

	return ref
};
