import { Container } from "@/features/common/components";
import { Logo } from "./Logo";
import { INavLink, NavLink } from "./NavLink";
import { Profile } from "./profile/Profile";

const links: INavLink[] = [
  {
    name: "Characters",
    href: "/characters",
  },
  {
    name: "Episodes",
    href: "/episodes",
  },
];

export const Navbar = () => {
  return (
    <div className="h-full py-12">
      <Container className="flex h-full flex-col items-center justify-between space-y-20 md:flex-row md:space-y-0">
        <Logo />

        <div className="ml-4 flex flex-col items-center space-y-8 md:flex-row md:space-x-16 md:space-y-0">
          {links.map((l) => (
            <NavLink navLink={l} key={l.name} />
          ))}
        </div>

        <Profile />
      </Container>
    </div>
  );
};
