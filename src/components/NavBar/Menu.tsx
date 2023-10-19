import { navLinks } from "../../data";
import { NavLink } from "./NavLink";

export const Menu = () => (
  <>
    {navLinks.map((link) => (
      <li key={link.label}>
        <NavLink href={link.href}>{link.label}</NavLink>
      </li>
    ))}
  </>
);
