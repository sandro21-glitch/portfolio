import React, { useState } from "react";
import { navList } from "../constants/navItems";
import Hamburger from "hamburger-react";
const Navbar = () => {
  // const scrollRef = useRef(null);

  // const scrollToElement = () => {
  //   scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  // };
  const [isOpen, setOpen] = useState(false);

  return (
    <header
      className={`fixed left-0 top-0 z-[999] overflow-hidden bg-navCl ${
        isOpen ? "h-52" : "h-[4.5rem]"
      } md:h-14  w-full text-center py-3 flex items-start transition-[height] ease-linear duration-300`}
    >
      <nav className="relative px-3 w-[98vw] max-w-maxWidth mx-auto flex items-center  justify-between">
        <h4 className="cursor-pointer text-lg md:text-xl lg:text-2xl" href="#">
          <code>&lt; sandro /&gt;</code>
        </h4>
        <ul className="text-left space-y-2 md:space-y-0 md:space-x-5 space-x-0 md:flex absolute left-3 top-0 md:translate-y-0 translate-y-1/2 md:static">
          {navList.map((item) => {
            return (
              <li
                key={item.id}
                className="cursor-pointer text-md md:text-lg font-thin hover:text-redHover transition-colors ease-in duration-150"
              >
                <a href={`#${item.link}`}>{item.name}</a>
              </li>
            );
          })}
        </ul>
        {/* hamburger menu */}
        <div className="md:hidden text-2xl outline-offset-2 outline-black space-y-[5px]">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
