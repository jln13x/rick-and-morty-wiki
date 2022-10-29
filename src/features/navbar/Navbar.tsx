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
    <div className="h-40 p-4">
      <Container className="flex h-full items-center justify-between">
        <Logo />

        <div className="ml-4  flex items-center space-x-16">
          {links.map((l) => (
            <NavLink navLink={l} key={l.name} />
          ))}
        </div>

        <Profile />
      </Container>
    </div>
  );
};
