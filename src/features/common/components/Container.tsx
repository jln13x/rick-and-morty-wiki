import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return <div className={clsx("px-12", className)}>{children}</div>;
};
