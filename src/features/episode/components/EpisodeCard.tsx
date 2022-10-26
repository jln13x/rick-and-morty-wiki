import { Episode } from "../types";

interface Props {
  episode: Episode;
}

export const EpisodeCard = ({ episode }: Props) => {
  const { name, episode: episodeCode, air_date } = episode;

  return (
    <div className="rounded-xl border p-4 shadow-md">
      <div className="flex h-full flex-col justify-between">
        <div className="grow">
          <span className="font-medium  tracking-tight text-neutral-500">
            {episodeCode}
          </span>
          <p className="text-xl font-bold">{name}</p>
        </div>
        <p className="mt-1.5 flex items-center text-sm text-neutral-600">
          <AiredIcon />
          <span className="ml-1">Aired on {air_date}</span>
        </p>
      </div>
    </div>
  );
};

const AiredIcon = () => {
  return (
    <svg
      className="h-4 w-4 fill-sky-600"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
