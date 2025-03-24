"use client";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./style.css";
import Title from "../ui/title";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <Title text="Get in Touch" />
        <ul className="contact-list">
          <li>
            <FaEnvelope className="contact-icon" />
            <a href="mailto:amresh.terminal@gmail.com">
              amresh.terminal@gmail.com
            </a>
          </li>

          <li>
            <FaLinkedin className="contact-icon" />
            <a
              href="https://linkedin.com/in/amreshpro"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <FaGithub className="contact-icon" />
            <a
              href="https://github.com/amreshpro"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
