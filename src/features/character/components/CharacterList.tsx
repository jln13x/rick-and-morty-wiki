import { Character } from "../types";
import { CharacterCard } from "./CharacterCard";

interface Props {
  characters: Character[];
}

export const CharacterList = ({ characters }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
