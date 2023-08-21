import { useEffect, useRef, useState } from "react";

export default () => {
  const lastScrollValRef = useRef(0);
  const [dir, setDir] = useState<"up" | "down">();

  useEffect(() => {
		const onScroll = () => {
      const scrollVal = window.scrollY;
      setDir(scrollVal > lastScrollValRef.current ? "down" : "up");
      lastScrollValRef.current = scrollVal;
    }

    window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener('scroll', onScroll)
  }, []);

	return dir
};
