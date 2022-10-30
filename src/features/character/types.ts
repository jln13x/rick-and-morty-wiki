import { z } from "zod";
import { detailedCharacterSchema } from "./get-character";
import { characterSchema } from "./get-characters";

export type Character = z.infer<typeof characterSchema>;
export type DetailedCharacter = z.infer<typeof detailedCharacterSchema>;
