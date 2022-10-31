import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

export interface INavLink {
  name: string;
  href: string;
}

interface NavLinkProps {
  navLink: INavLink;
}

export const NavLink = ({ navLink }: NavLinkProps) => {
  const { name, href } = navLink;
  const { asPath } = useRouter();

  const isActive = asPath.startsWith(href);

  return (
    <Link href={href} passHref>
      <a
        className={clsx(
          "relative z-20 -rotate-6 bg-gradient-to-r text-3xl tracking-[0.25em] transition-colors",
          {
            "text-white after:absolute after:inset-0 after:-z-10 after:mx-auto after:w-3/4 after:translate-y-4 after:rounded-xl after:bg-gradient-to-r after:from-violet-600 after:to-indigo-600":
              isActive,
            "text-neutral-400 hover:text-white": !isActive,
          }
        )}
      >
        {name}
      </a>
    </Link>
  );
};
