import React, { useEffect, RefObject } from "react";

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = (handler: (event: Event) => void) => {
  const containerRef = React.useRef<any>(null);
  useEffect(() => {
    const listener = (event: Event) => {
      const el = containerRef?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [containerRef, handler]);

  return containerRef;
};

export default useOnClickOutside;
