import dynamic from "next/dynamic";
import Image from "next/future/image";
import Link from "next/link";
import { Character } from "../types";

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  const { name, image: imageSrc } = character;

  return (
    <div className="group relative w-[300px] overflow-hidden rounded-2xl bg-black/40 p-2 transition-all after:absolute after:inset-0 after:-z-[1] after:-translate-x-full after:rounded-2xl after:bg-gradient-to-r after:from-violet-600 after:to-indigo-600 after:opacity-0 after:transition-all after:duration-300  hover:bg-transparent hover:after:translate-x-0 hover:after:opacity-100">
      <Link href={`/characters/${character.id}`} passHref>
        {/* Clip to keep rounded corners */}
        <a className="relative block overflow-clip rounded-2xl">
          {/* Clip the image scaling */}
          <div className="overflow-clip">
            <Image
              src={imageSrc}
              alt={`Image of ${name}`}
              width={300}
              height={300}
              className="transition-all duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex w-full justify-center bg-black/40 p-4">
            <span
              className="truncate text-xl font-bold text-white"
              title={name}
            >
              {name}
            </span>
          </div>
        </a>
      </Link>
      <div className="absolute top-0 right-0 rounded-bl-2xl bg-black/80 p-2 backdrop-blur-sm">
        <LazyFavoriteMark character={character} />
      </div>
    </div>
  );
};

const LazyFavoriteMark = dynamic(() => import("../favorite/FavoriteMark"), {
  ssr: false,
});
