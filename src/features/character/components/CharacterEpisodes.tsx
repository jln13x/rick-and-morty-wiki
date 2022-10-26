import { DetailedCharacter } from "../types";

type Episode = DetailedCharacter["episode"][number];

interface Props {
  episodes: Episode[];
}

export const CharacterEpisodes = ({ episodes }: Props) => {
  return (
    <div className="p-8">
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

interface EpisodeCardProps {
  episode: Episode;
}
const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  return (
    <div className="cursor-pointer rounded-2xl bg-neutral-100 p-4 text-neutral-600 shadow-md transition-colors hover:bg-neutral-200 hover:text-neutral-700">
      <p className="text-lg">{episode.name}</p>
    </div>
  );
};
