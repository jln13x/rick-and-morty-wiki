import Image from "next/future/image";
import Link from "next/link";
import { Character } from "../types";

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  const { name, image: imageSrc } = character;

  return (
    <Link href={`/characters/${character.id}`} passHref>
      <a>
        <div className="relative overflow-clip rounded-xl border shadow-md">
          <Image
            src={imageSrc}
            alt={`Image of ${name}`}
            width={300}
            height={300}
            className="duration-20 w-full transition-all hover:scale-125"
          />
          <div className="absolute bottom-0 flex w-full justify-center bg-black/80 p-4 backdrop-blur-sm ">
            <span className=" truncate text-xl font-bold text-white">
              {name}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};
