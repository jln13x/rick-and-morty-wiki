import { HeartOutline } from "@/features/common/components/icons";
import { useRouter } from "next/router";
import { ProfileMenuItem } from "./ProfileMenuItem";

export const FavoritesMenuItem = () => {
  const { push } = useRouter();

  return (
    // Could probably be refactored to use a Link component
    <ProfileMenuItem
      name="Favorites"
      icon={<HeartOutline className="h-4 w-4 stroke-white" />}
      onClick={() => push("/profile/favorite-characters")}
    />
  );
};
