import { Menu } from "@headlessui/react";
import clsx from "clsx";

interface Props {
  as: "button" | "a";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ProfileMenuItem = ({
  children,
  as,
  onClick,
  className,
}: Props) => {
  return (
    <Menu.Item
      className={({ active }) =>
        clsx(
          "p-2",
          {
            "rounded-xl bg-indigo-600/20": active,
          },
          className
        )
      }
      as={as}
      onClick={onClick}
    >
      {children}
    </Menu.Item>
  );
};
