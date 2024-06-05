import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const closeMenu = () => setShowMenu(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    setTimeout(() => {
      setShowOverlay(showMenu);
    }, 200);
  }, [showMenu]);

  const overlayBaseClassName = `duration-200 md:hidden absolute top-0 right-0 backdrop-blur-sm w-1/3 h-screen `;
  const overlayShowClassName = `${!showMenu ? "opacity-0" : "opacity-100"} ${
    showOverlay ? "flex" : "hidden"
  }`;
  const sidebarBaseClassName = `bg-primary md:bg-transparent h-screen md:h-auto p-6 md:p-0 gap-6 absolute md:static top-0 w-2/3 md:w-auto duration-200 flex flex-col md:flex-row md:flex-items-center pt-20  md:pt-0`;
  const sidebarShowClassName = `${showMenu ? "left-0" : "-left-2/3"}`;
  return (
    <header className="w-full h-16 flex items-center z-[1000] fixed top-0 left-0 text-white">
      <nav className="container-md w-full flex items-center justify-between">
        <a className="font-bold select-none z-10">Tripsy</a>
        <div
          onClick={closeMenu}
          className={`${overlayBaseClassName} ${overlayShowClassName}`}
        ></div>
        <ul className={`${sidebarBaseClassName}  ${sidebarShowClassName}`}>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Tours</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>AirTickets</a>
          </li>
          <li className="flex md:hidden mt-auto">
            <NavLink to="/login" className="-mt-32">
              <Button variant="white" rounded="full" outlined>
                Login
              </Button>
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-6 z-10">
          <div onClick={toggleMenu} className="md:hidden">
            <Icon
              icon={
                !showMenu
                  ? `fluent:list-rtl-20-filled`
                  : "fluent-emoji-high-contrast:cross-mark-button"
              }
              fontSize={26}
            />
          </div>
          <NavLink
            to="/login"
            className="hidden md:flex hover:scale-105 duration-200"
          >
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
