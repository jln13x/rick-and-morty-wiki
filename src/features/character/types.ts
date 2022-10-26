import { z } from "zod";
import { characterSchema } from "./get-all-characters";
import { detailedCharacterSchema } from "./get-character";

export type Character = z.infer<typeof characterSchema>;
export type DetailedCharacter = z.infer<typeof detailedCharacterSchema>;
