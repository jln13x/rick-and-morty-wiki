import { CharacterCard } from "@/features/character";
import { DetailedEpisode } from "../types";

type Character = DetailedEpisode["characters"][number];

interface Props {
  characters: Character[];
}

export const EpisodeCharacters = ({ characters }: Props) => {
  return (
    <div className="pt-12 md:p-4 md:px-8">
      <h2 className="text-center text-xl font-bold tracking-wide md:text-left">
        Characters that appear in this episode
      </h2>
      <div className="mt-4 flex flex-wrap justify-center gap-4 md:justify-start">
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
};
