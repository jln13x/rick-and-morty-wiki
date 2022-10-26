interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={`mx-auto max-w-screen-xl  ${className}`}>{children}</div>
  );
};
