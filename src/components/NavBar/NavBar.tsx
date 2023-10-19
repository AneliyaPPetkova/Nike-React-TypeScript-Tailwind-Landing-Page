import { useState } from "react";

import { headerLogo } from "../../assets/images";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { Menu } from "./Menu";
import { Sign } from "./Sign";

export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggle = () => setToggleMenu(!toggleMenu);

  return (
    <header className="absolute padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <Menu />
        </ul>
        <div className="max-lg:hidden wide:mr-24">
          <Sign />
        </div>

        <div className="flex inset-0 lg:hidden">
          {toggleMenu ? (
            <>
              <div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                aria-hidden="true"
              ></div>
              <div className="fixed top-4 right-4 w-full flex flex-col max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900">
                <button className="absolute top-5 right-5 flex items-center justify-center text-slate-500 hover:text-slate-600">
                  <span className="sr-only">Close navigation</span>
                  <RiCloseLine className="w-8 h-8" onClick={toggle} />
                </button>
                <ul className="space-y-6 mb-6">
                  <Menu />
                </ul>
                <Sign />
              </div>
            </>
          ) : (
            <button className="text-slate-500 flex items-center justify-center hover:text-slate-600">
              <span className="sr-only">Open navigation</span>
              <RiMenu3Line className="w-8 h-8" onClick={toggle} />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
