import { z } from "zod";
import { characterSchema } from "./get-all-characters";

export type Character = z.infer<typeof characterSchema>;
