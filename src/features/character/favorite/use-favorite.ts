import { trpc } from "@/features/trpc/trpc-client";
import { useQueryClient } from "@tanstack/react-query";
import { useFavoritesStore } from "./favorites-store";
import {
  UseFavoriteCharactersData,
  useFavoriteCharactersQueryKey,
} from "./use-favorite-characters";

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

  const queryClient = useQueryClient();

  const { mutate: toggleFavoriteForUser } =
    trpc.favorite.toggleFavorite.useMutation({
      onMutate: async ({ id }) => {
        await getFavoritesProcedure.cancel();
        await queryClient.cancelQueries(useFavoriteCharactersQueryKey);

        const getFavoritesSnapshot = getFavoritesProcedure.getData();
        const favoriteCharactersSnapshot = queryClient.getQueryData<
          UseFavoriteCharactersData | undefined
        >(useFavoriteCharactersQueryKey);

        getFavoritesProcedure.setData((data) => {
          if (!data) return data;

          if (data.includes(id)) {
            return data.filter((favoriteId) => favoriteId !== id);
          }

          return [...data, id];
        });

        queryClient.setQueryData<UseFavoriteCharactersData | undefined>(
          useFavoriteCharactersQueryKey,
          (data) => {
            if (!data) return data;
            return data.filter((character) => character.id !== id);
          }
        );

        return {
          getFavoritesSnapshot,
          favoriteCharactersSnapshot,
        };
      },
      onError: (_, __, context) => {
        if (context?.getFavoritesSnapshot) {
          getFavoritesProcedure.setData(context.getFavoritesSnapshot);
        }

        if (context?.favoriteCharactersSnapshot) {
          queryClient.setQueryData<UseFavoriteCharactersData | undefined>(
            useFavoriteCharactersQueryKey,
            context.favoriteCharactersSnapshot
          );
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
