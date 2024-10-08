import { FC } from "react";
import { NavLink } from "../NavLink/NavLink";
import { links } from "./NavbarConstants";

interface NavbarProps {
  onClose?: () => void;
}

export const Navbar: FC<NavbarProps> = ({ onClose }) => (
  <>
    {links.map(({ href, text, icon }) => (
      <NavLink
        key={href}
        href={href}
        icon={icon}
        onClose={onClose}
        text={text}
      />
    ))}
  </>
);
