import Config from "@/../tailwind.config";
import { useCallback, useSyncExternalStore } from "react";

const configScreens = Config.theme?.extend?.screens as Record<string, string>;

export default (...screens: string[]) => {
  const getMatch = useCallback(
    () =>
      Object.keys(configScreens).findLast(
        (el) =>
          screens.includes(el) &&
          window.matchMedia(`(min-width: ${configScreens[el]})`).matches
      ),
    []
  );

  const subscribe = useCallback((cb: () => void) => {
    const events = screens.map((el) =>
      window.matchMedia(`(min-width: ${configScreens[el]})`)
    );
    events.forEach((el) => el.addEventListener("change", cb));
    return () => events.forEach((el) => el.removeEventListener("change", cb));
  }, []);

  return useSyncExternalStore(subscribe, getMatch, () => null);
};
