import { z } from "zod";
import { episodeSchema } from "./get-all-episodes";

export type Episode = z.infer<typeof episodeSchema>;
