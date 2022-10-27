import { Episode } from "../types";

interface Props {
  episode: Episode;
}

export const EpisodeDetails = ({ episode }: Props) => {
  return (
    <div className="flex h-full flex-col items-center overflow-hidden bg-black px-8 py-8 text-white shadow-md">
      <h1 className="mt-2 text-center text-3xl font-bold">{episode.name}</h1>
      <div className="mx-auto mt-4 flex justify-center rounded-2xl bg-white/10 p-4">
        <DetailsTable
          details={[
            {
              heading: "Episode Code",
              value: episode.episode,
            },
            {
              heading: "Air Date",
              value: episode.air_date,
            },
          ]}
        />
      </div>
    </div>
  );
};

interface DetailsTableProps {
  details: {
    heading: string;
    value: string;
  }[];
}

const DetailsTable = ({ details }: DetailsTableProps) => {
  return (
    <table className="rounded-xl text-left text-xl">
      <tbody>
        {details.map((detail) => (
          <tr key={detail.heading} className="align-top">
            <th>{detail.heading}</th>
            <td className="w-full pl-3">{detail.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
