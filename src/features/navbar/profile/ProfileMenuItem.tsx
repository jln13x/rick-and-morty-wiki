import { Menu } from "@headlessui/react";
import clsx from "clsx";

interface Props {
  icon?: React.ReactNode;
  onClick: () => void;
  name: string;
}

export const ProfileMenuItem = ({ icon, name, onClick }: Props) => {
  return (
    <Menu.Item
      className={({ active }) =>
        clsx("flex w-full items-center justify-between space-x-4 p-2", {
          "rounded-xl bg-indigo-600/20": active,
        })
      }
      onClick={onClick}
      as="button"
    >
      <span>{name}</span>
      {icon}
    </Menu.Item>
  );
};
