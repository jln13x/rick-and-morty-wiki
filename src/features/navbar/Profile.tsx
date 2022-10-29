import Image from "next/future/image";
import { LogoutButton } from "../auth";
import { GitHubLoginButton } from "@/features/auth";
import { trpc } from "@/utils/trpc";

export const Profile = () => {
  const { data: session } = trpc.auth.getSession.useQuery();

  if (!session || !session.user) {
    return <GitHubLoginButton />;
  }

  const profileImage = session.user.image || "/profile_fallback.webp";

  return (
    <div className="flex items-center space-x-2">
      <Image
        src={profileImage}
        alt="Profile picture"
        className="h-10 w-10 rounded-full"
        width={200}
        height={200}
        title={session.user.name || undefined}
      />
      <LogoutButton />
    </div>
  );
};
