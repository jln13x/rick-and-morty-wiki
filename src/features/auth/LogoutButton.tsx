import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="flex items-center rounded-2xl border-2 p-1 px-2"
    >
      <LogoutIcon />
      <span className="ml-2 text-xs">Logout</span>
    </button>
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
