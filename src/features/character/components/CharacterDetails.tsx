import dynamic from "next/dynamic";
import Image from "next/future/image";
import { DetailedCharacter } from "../types";

interface Props {
  character: DetailedCharacter;
}

export const CharacterDetails = ({ character }: Props) => {
  return (
    <div className="flex h-full flex-col items-center overflow-hidden bg-black/40 px-8 py-8 text-white shadow-md">
      <Image
        src={character.image}
        width={300}
        height={300}
        alt={character.name}
        priority={true}
        className="rounded-2xl"
      />
      <h1 className="mt-2 text-center text-3xl font-bold">{character.name}</h1>
      <LazyFavoriteMark character={character} />
      <div className="mx-auto mt-4 flex justify-center rounded-2xl bg-white/10 p-4">
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
