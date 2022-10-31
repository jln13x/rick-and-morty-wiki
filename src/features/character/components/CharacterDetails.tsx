import dynamic from "next/dynamic";
import Image from "next/future/image";
import { DetailedCharacter } from "../types";

interface Props {
  character: DetailedCharacter;
}

export const CharacterDetails = ({ character }: Props) => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-black/40 p-4 text-white shadow-md">
      <div className="relative">
        <Image
          src={character.image}
          width={300}
          height={300}
          alt={character.name}
          priority={true}
          className="rounded-2xl"
        />
        <div className="absolute top-0 right-0 rounded-bl-2xl bg-black/80 p-2 backdrop-blur-sm">
          <LazyFavoriteMark character={character} />
        </div>
      </div>
      <h1 className="mt-4 text-center text-3xl font-bold">{character.name}</h1>
      <div className="mt-8">
        <DetailsTable
          details={[
            {
              heading: "Status",
              value: character.status,
            },
            {
              heading: "Species",
              value: character.species,
            },
            {
              heading: "Gender",
              value: character.gender,
            },
            {
              heading: "Origin",
              value: character.origin.name,
            },
            {
              heading: "Location",
              value: character.location.name,
            },
          ]}
        />
      </div>
    </div>
  );
};

const LazyFavoriteMark = dynamic(() => import("../favorite/FavoriteMark"), {
  ssr: false,
});

interface DetailsTableProps {
  details: {
    heading: string;
    value: string;
  }[];
}

const DetailsTable = ({ details }: DetailsTableProps) => {
  return (
    <table className="whitespace-nowrap rounded-xl text-left text-base">
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
