type NavLinkProps = {
  href: string;
  children: JSX.Element | JSX.Element[] | string | string[];
};

export const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="font-montserrat leading-normal text-lg text-slate-gray"
  >
    {children}
  </a>
);
