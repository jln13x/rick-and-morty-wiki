import { GitHubLoginButton } from "@/features/auth";
import { trpc } from "@/features/trpc/trpc-client";
import { offset, shift, useFloating } from "@floating-ui/react-dom";
import { Menu } from "@headlessui/react";
import Image from "next/future/image";
import { FavoritesMenuItem } from "./FavoritesMenuItem.tsx";
import { LogoutMenuItem } from "./LogoutMenuItem";

export const Profile = () => {
  const { data: session } = trpc.auth.getSession.useQuery();
  const { x, y, reference, floating } = useFloating({
    placement: "bottom",
    middleware: [offset(10), shift()],
  });

  if (!session || !session.user) {
    return <GitHubLoginButton />;
  }

  const profileImage = session.user.image || "/profile_fallback.webp";

  // Use "Popover" if more special requirements are needed
  return (
    <Menu as="div" className="relative">
      <Menu.Button ref={reference}>
        <Image
          src={profileImage}
          alt="Profile picture"
          className="h-16 w-16 rounded-full"
          width={200}
          height={200}
          title={session.user.name || undefined}
        />
      </Menu.Button>
      <Menu.Items
        className="absolute z-[9999] mt-2 rounded-xl bg-black/60 p-4 backdrop-blur-sm"
        as="div"
        ref={floating}
        style={{
          top: y ?? 0,
          left: x ?? 0,
        }}
        tabIndex={-1}
      >
        <FavoritesMenuItem />
        <LogoutMenuItem />
      </Menu.Items>
    </Menu>
  );
};
