import { QueryKey, useInfiniteQuery } from "@tanstack/react-query";
import { z } from "zod";
import { charactersSchema } from "./get-characters";
import { getCharacters } from "./get-characters";

const queryKey: QueryKey = ["characters"];

interface Options {
  initialData?: {
    pageParams: number[];
    pages: z.infer<typeof charactersSchema>[];
  };
}

export const useInfiniteCharacters = (options?: Options) => {
  return useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam = 1 }) => await getCharacters(pageParam),
    getNextPageParam: (lastPage) => lastPage.characters.info.next ?? undefined,
    initialData: options?.initialData,
  });
};
