import Image from "next/future/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/characters" passHref>
      <a className="flex w-40 items-center">
        <Image
          src="/Rick_and_Morty.svg"
          alt="Logo from Rick and Morty"
          width={200}
          height={200}
        />
      </a>
    </Link>
  );
};
