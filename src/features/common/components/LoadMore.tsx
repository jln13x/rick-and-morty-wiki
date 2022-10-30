import clsx from "clsx";
import { useRef } from "react";
import { useIntersection } from "../hooks";

interface Props {
  className?: string;
  isLoading: boolean;
  onClick: () => void;
  fireOnIntersection?: boolean;
}

export const LoadMore = ({
  className,
  isLoading,
  onClick,
  fireOnIntersection,
}: Props) => {
  const ref = useRef(null);

  useIntersection(ref, { threshold: 0.1 }, () => {
    if (fireOnIntersection) {
      onClick();
    }
  });

  return (
    <button
      ref={ref}
      className={clsx(
        "rounded-2xl border bg-black/20 p-4 px-20 uppercase tracking-wide transition-all",
        {
          "animate-pulse": isLoading,
        },
        className
      )}
      onClick={onClick}
    >
      Load More
    </button>
  );
};
