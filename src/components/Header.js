import { useState, useEffect } from "react";

// logo
import LogoWhite from "../assets/img/logo-white.svg";
import LogoDark from "../assets/img/logo-dark.svg";

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-500 border-solid border-b border-white/40`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* Logo */}
        <a href="/">
          {header ? (
            <img className="w-[160px]" src={LogoDark} alt="logo dark" />
          ) : (
            <img className="w-[160px]" src={LogoWhite} alt="logo white" />
          )}
        </a>
        {/* Nav */}
        <nav
          className={`${
            header ? "text-primary" : "text-white"
          } flex gap-x-4 font-tertiary tracking-[3px] text-[12px] sm:text-[15px] items-center uppercase sm:gap-x-8`}
        >
          <a href="" className="hover:text-accent transition font-semibold">
            Home
          </a>
          <a href="" className="hover:text-accent transition font-semibold">
            Rooms
          </a>
          <a href="" className="hover:text-accent transition font-semibold">
            Restaurant
          </a>
          <a href="" className="hover:text-accent transition font-semibold">
            Spa
          </a>
          <a href="" className="hover:text-accent transition font-semibold">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
