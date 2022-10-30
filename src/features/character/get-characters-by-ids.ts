import { gql, gqlClient } from "@/lib/graphql-client";
import { z } from "zod";
import { characterSchema } from "./get-characters";

export const getCharactersByIds = async (ids: string[]) => {
  // The api still returns an array of object with all keys as null which we dont want
  if (ids.length === 0) {
    return [];
  }

  const query = gql`
    query GetCharactersByIds($ids: [ID!]!) {
      charactersByIds(ids: $ids) {
        id
        name
        image
      }
    }
  `;

  const response = await gqlClient.request(query, {
    ids,
  });

  return responseSchema.parse(response).charactersByIds;
};

const responseSchema = z.object({ charactersByIds: z.array(characterSchema) });
