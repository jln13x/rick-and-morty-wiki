import { gqlClient, gql } from "@/lib/graphql-client";
import { z } from "zod";

export const getAllCharacters = async () => {
  const firstPage = await getCharacters(1);

  if (process.env.NODE_ENV === "development")
    return firstPage.characters.results;

  const pages = firstPage.characters.info.pages;

  const pagePromises = [...Array(pages)].map((_, idx) =>
    getCharacters(idx + 1)
  );

  const allPages = await Promise.all(pagePromises);

  return allPages.flatMap((page) => page.characters.results);
};

export const getCharacters = async (page: number) => {
  const query = gql`
    query GetCharacters($page: Int!) {
      characters(page: $page) {
        info {
          pages
        }
        results {
          id
          name
          image
        }
      }
    }
  `;

  const response = await gqlClient.request(query, { page });
  return charactersSchema.parse(response);
};

export const characterSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string().url(),
});

const infoSchema = z.object({
  pages: z.number(),
});

const charactersSchema = z.object({
  characters: z.object({
    info: infoSchema,
    results: z.array(characterSchema),
  }),
});
