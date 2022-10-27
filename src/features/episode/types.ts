import { z } from "zod";
import { episodeSchema } from "./get-all-episodes";
import { detailedEpisodeSchema } from "./get-episode";

export type Episode = z.infer<typeof episodeSchema>;
export type DetailedEpisode = z.infer<typeof detailedEpisodeSchema>;
