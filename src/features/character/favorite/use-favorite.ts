import { trpc } from "@/utils/trpc";
import { useFavoritesStore } from "./favorites-store";

/**
 * Abstraction of setting a character as favorite. Either by persisting it on the server if the user is logged in or in localstorage
 */
export const useFavorite = () => {
  const {
    favorites: favoritesFromStore,
    toggleFavorite: toggleFavoriteInStore,
  } = useFavoritesStore();

  const { data: session, isLoading: isLoadingSession } =
    trpc.auth.getSession.useQuery();

  const { data: favoritesForUser } = trpc.favorite.getFavorites.useQuery(
    undefined,
    {
      enabled: !!session,
    }
  );

  const {
    favorite: { getFavorites: getFavoritesProcedure },
  } = trpc.useContext();

  const { mutate: toggleFavoriteForUser } =
    trpc.favorite.toggleFavorite.useMutation({
      onMutate: async ({ id }) => {
        await getFavoritesProcedure.cancel();

        const snapshot = getFavoritesProcedure.getData();

        getFavoritesProcedure.setData((data) => {
          if (!data) return data;

          if (data.includes(id)) {
            return data.filter((favoriteId) => favoriteId !== id);
          }

          return [...data, id];
        });

        return {
          snapshot,
        };
      },
      onError: (_, __, context) => {
        if (context?.snapshot) {
          getFavoritesProcedure.setData(context.snapshot);
        }
      },
    });

  const isLoggedIn = !isLoadingSession && !!session?.user;

  const toggleFavorite = isLoggedIn
    ? toggleFavoriteForUser
    : toggleFavoriteInStore;

  const favorites = isLoggedIn ? favoritesForUser || [] : favoritesFromStore;

  return {
    toggleFavorite,
    favorites,
  };
};
