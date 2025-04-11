import { useState } from "react";
import { FaHome, FaLaptopCode, FaCode, FaBars } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import ThemeSwitcher from "../theme-switcher";

const navLinks = [
  { id: "home", icon: FaHome, text: "Home", path: "/" },
  { id: "skills", icon: FaCode, text: "Skills", path: "#skills" },
  { id: "projects", icon: FaLaptopCode, text: "Projects", path: "#projects" },
  { id: "blogs", icon: FaNoteSticky, text: "Blogs", path: "#blogs" },
];

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentPath =
    location.pathname === "/" ? "home" : location.pathname.replace("#", "");

  const handleLinkClick = () => setIsMenuOpen(false);

  const renderLinks = (isMobile = false) =>
    navLinks.map(({ id, icon: Icon, text, path }) => {
      const isActive = currentPath === path;
      return (
        <Link
          key={id}
          to={path}
          onClick={isMobile ? handleLinkClick : undefined}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition
            ${isActive ? "bg-[var(--accent-color)] " : "text-[var(--text-color)] "}`}
        >
          <Icon className="text-base" />
          <span>{text}</span>
        </Link>
      );
    });

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--primary)] shadow-sm backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <div className="left flex gap-5 justify-center items-center">

          {/* Logo */}
          <Link to="/" className="text-xl   text-[var(--text-color)]">
          <span>amresh <strong>maurya</strong></span>
          </Link>
          <ThemeSwitcher/>
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
          <div className="hidden md:flex gap-4 items-center">{renderLinks()}</div>
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
