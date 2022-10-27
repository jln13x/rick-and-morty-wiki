import { gql, gqlClient } from "@/lib/graphql-client";
import { z } from "zod";
import { characterSchema } from "@/features/character";
import { episodeSchema } from "./get-all-episodes";

export const detailedEpisodeSchema = episodeSchema.extend({
  characters: z.array(characterSchema),
});

const responseSchema = z.object({
  episode: detailedEpisodeSchema,
});

export const getEpisode = async (id: string) => {
  const query = gql`
    query GetEpisode($id: ID!) {
      episode(id: $id) {
        id
        name
        air_date
        episode
        characters {
          id
          name
          image
        }
      }
    }
  `;

  const response = await gqlClient.request(query, { id });
  return responseSchema.parse(response).episode;
};
