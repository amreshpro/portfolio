import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialMediaLinks from "../../constants/SocialMediaLinks";

export default function Footer() {
  return (
    <footer className="py-6 mt-12 bg-[var(--primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Amresh Maurya. All rights reserved.
        </p>

        <div className="flex gap-4 text-2xl">
          <a
            href={SocialMediaLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors "
          >
            <FaGithub />
          </a>
          <a
            href={SocialMediaLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className=" transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
