import { RefObject, useEffect } from "react";

export const useIntersection = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit,
  onIntersect: () => void
) => {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      });
    }, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options, onIntersect]);
};
