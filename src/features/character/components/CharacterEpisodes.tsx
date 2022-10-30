import { EpisodeCard } from "@/features/episode/components";
import { DetailedCharacter } from "../types";

type Episode = DetailedCharacter["episode"][number];

interface Props {
  episodes: Episode[];
}

export const CharacterEpisodes = ({ episodes }: Props) => {
  return (
    <div className="p-4 px-8">
      <h2 className="text-xl font-bold tracking-wide">
        Episodes the character appears in
      </h2>
      <div className="mt-4 flex flex-wrap gap-4">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
};
