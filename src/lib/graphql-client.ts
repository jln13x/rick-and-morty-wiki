import { env } from "@/env/client.mjs";
import { GraphQLClient, gql as GraphqlRequestGQL } from "graphql-request";

export const gqlClient = new GraphQLClient(
  env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL
);

export const gql = GraphqlRequestGQL;
