import { gql, gqlClient } from "@/lib/graphql-client";
import { z } from "zod";

export const getCharacters = async (page: number) => {
  const query = gql`
    query GetCharacters($page: Int!) {
      characters(page: $page) {
        info {
          pages
          next
          prev
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
  next: z.number().nullable(),
  prev: z.number().nullable(),
  pages: z.number(),
});

export const charactersSchema = z.object({
  characters: z.object({
    info: infoSchema,
    results: z.array(characterSchema),
  }),
});
