import { QueryKey, useQuery } from "@tanstack/react-query";
import { getCharactersByIds } from "../get-characters-by-ids";

export const useFavoriteCharactersQueryKey: QueryKey = ["favorite-characters"];

const queryFn = (ids: string[]) => getCharactersByIds(ids);

export type UseFavoriteCharactersData = Awaited<ReturnType<typeof queryFn>>;

// Could be optimized to use some pagination
export const useFavoriteCharacters = (ids: string[]) => {
  return useQuery({
    queryKey: useFavoriteCharactersQueryKey,
    queryFn: () => queryFn(ids),
  });
};
