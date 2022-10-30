import { gql, gqlClient } from "@/lib/graphql-client";
import { z } from "zod";
import { characterSchema } from "./get-characters";

export const detailedCharacterSchema = characterSchema.extend({
  status: z.string(),
  species: z.string(),
  gender: z.enum(["Female", "Male", "Genderless", "unknown"]),
  location: z.object({
    name: z.string(),
  }),
  origin: z.object({
    name: z.string(),
  }),
  episode: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    })
  ),
});

const responseSchema = z.object({
  character: detailedCharacterSchema,
});

export const getCharacter = async (id: string) => {
  const query = gql`
    query getCharacter($id: ID!) {
      character(id: $id) {
        id
        name
        image
        status
        species
        gender
        location {
          name
        }
        origin {
          name
        }
        episode {
          id
          name
        }
      }
    }
  `;

  const response = await gqlClient.request(query, { id });
  return responseSchema.parse(response).character;
};
