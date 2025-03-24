"use client";

import { FaRegCopyright } from "react-icons/fa";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <FaRegCopyright className="footer-icon" />
        <p className="footer-text">
          {new Date().getFullYear()} Amresh Maurya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
