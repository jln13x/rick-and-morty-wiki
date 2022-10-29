import { signOut } from "next-auth/react";
import { ProfileMenuItem } from "./ProfileMenuItem";

export const LogoutMenuItem = () => {
  return (
    <ProfileMenuItem
      as="button"
      onClick={() => signOut()}
      className="flex items-center justify-between space-x-4"
    >
      <span>Logout</span>
      <LogoutIcon />
    </ProfileMenuItem>
  );
};

const LogoutIcon = () => {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
      />
    </svg>
  );
};
