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
    <div className="relative w-[300px] overflow-clip rounded-2xl bg-black/60">
      <Link href={`/characters/${character.id}`} passHref>
        <a>
          <Image
            src={imageSrc}
            alt={`Image of ${name}`}
            width={300}
            height={300}
            className="duration-20 w-full transition-all hover:scale-125"
          />
          <div className="absolute bottom-0 flex w-full justify-center bg-black/80 p-4 backdrop-blur-sm">
            <span className=" truncate text-xl font-bold text-white">
              {name}
            </span>
          </div>
        </a>
      </Link>
      <div className="group-hover: absolute top-0 right-0 rounded-bl-2xl bg-black/80 p-2 backdrop-blur-sm">
        <LazyFavoriteMark character={character} />
      </div>
    </div>
  );
};

const LazyFavoriteMark = dynamic(() => import("../favorite/FavoriteMark"), {
  ssr: false,
});
