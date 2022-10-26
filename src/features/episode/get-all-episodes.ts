import { env } from "@/env/server.mjs";
import { gql, gqlClient } from "@/lib/graphql-client";
import { z } from "zod";

export const getAllEpisodes = async () => {
  const firstPage = await getEpisodes(1);

  if (env.NODE_ENV === "development") return firstPage.episodes.results;

  const pages = firstPage.episodes.info.pages;

  const pagePromises = [...Array(pages)].map((_, idx) => getEpisodes(idx + 1));

  const allPages = await Promise.all(pagePromises);

  return allPages.flatMap((page) => page.episodes.results);
};

export const getEpisodes = async (page: number) => {
  const query = gql`
    query GetEpisodes($page: Int!) {
      episodes(page: $page) {
        info {
          pages
        }
        results {
          id
          name
          episode
          air_date
        }
      }
    }
  `;

  const response = await gqlClient.request(query, { page });
  return episodesSchema.parse(response);
};

export const episodeSchema = z.object({
  id: z.string(),
  name: z.string(),
  episode: z.string(),
  air_date: z.string(),
});

const infoSchema = z.object({
  pages: z.number(),
});

const episodesSchema = z.object({
  episodes: z.object({
    info: infoSchema,
    results: z.array(episodeSchema),
  }),
});
