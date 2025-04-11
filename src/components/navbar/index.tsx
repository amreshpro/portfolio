import { useState } from "react";
import { FaHome, FaLaptopCode, FaCode, FaBars } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import ThemeSwitcher from "../theme-switcher";

const navLinks = [
  { id: "home", icon: FaHome, text: "Home", path: "/" },
  { id: "skills", icon: FaCode, text: "Skills", path: "skills" },
  { id: "projects", icon: FaLaptopCode, text: "Projects", path: "projects" },
  { id: "blogs", icon: FaNoteSticky, text: "Blogs", path: "blogs" },
];

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath =
    location.pathname === "/" ? "home" : location.pathname.replace("", "");

  const renderLinks = (isMobile = false) =>
    navLinks.map(({ id, icon: Icon, text, path }) => {
      const isHome = id === "home";

      const commonClasses = `cursor-pointer flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
        (isHome && currentPath === "home") || (!isHome && currentPath === `/${path}`)
          ? "bg-[var(--accent-color)]"
          : "text-[var(--text-color)]"
      }`;

      return isHome ? (
        <RouterLink
          key={id}
          to="/"
          onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
          className={commonClasses}
        >
          <Icon className="text-base" />
          <span>{text}</span>
        </RouterLink>
      ) : (
        <ScrollLink
          key={id}
          to={path}
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
          className={commonClasses}
        >
          <Icon className="text-base" />
          <span>{text}</span>
        </ScrollLink>
      );
    });

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="left flex gap-5 justify-center items-center">
            {/* Logo */}
            <RouterLink to="/" className="text-xl text-[var(--text-color)]">
              <span>
                amresh <strong>maurya</strong>
              </span>
            </RouterLink>
            <ThemeSwitcher />
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[var(--text-color)]"
            aria-label="Toggle Menu"
          >
            <FaBars size={20} />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-4 items-center">
            {renderLinks()}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 flex flex-col gap-2 pb-4 animate-slideDown">
            {renderLinks(true)}
          </div>
        )}
      </div>
    </header>
  );
}
