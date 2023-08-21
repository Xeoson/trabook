import { useEffect, useRef } from "react";

export default <E extends HTMLElement>(onMount: (el: E) => void) => {
  const ref = useRef<E | null>(null);

  useEffect(() => {
    if (ref.current) {
      onMount(ref.current);
    }
  }, [ref.current]);

	return ref
};
