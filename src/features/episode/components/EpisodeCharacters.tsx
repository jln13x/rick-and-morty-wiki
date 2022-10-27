import { CharacterCard } from "@/features/character";
import { DetailedEpisode } from "../types";

type Character = DetailedEpisode["characters"][number];

interface Props {
  characters: Character[];
}

export const EpisodeCharacters = ({ characters }: Props) => {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold tracking-wide">
        Characters that appear in this episode
      </h2>
      <div className="mt-4 flex flex-wrap gap-4">
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
};
