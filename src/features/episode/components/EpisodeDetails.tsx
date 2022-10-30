import { Episode } from "../types";

interface Props {
  episode: Episode;
}

// Looks pretty similar to the Character Details for consistency even tho alot of space is not used
export const EpisodeDetails = ({ episode }: Props) => {
  return (
    <div className="flex flex-col rounded-2xl bg-black/40 p-4 text-white shadow-md">
      <h1 className="mt-2 text-center text-3xl font-bold">{episode.name}</h1>
      <div className="mt-8">
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
    <table className="whitespace-nowrap rounded-xl text-left text-xl">
      <tbody>
        {details.map((detail) => (
          <tr key={detail.heading} className="align-top">
            <th>{detail.heading}</th>
            <td className="pl-3">{detail.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
