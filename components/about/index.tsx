/* eslint-disable react/jsx-key */
"use client";
import React, { JSX } from "react";
import { AboutContent } from "@/data/ABOUT";
import { FaCode, FaServer, FaBrain } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import "./style.css";

export default function About() {
  return (
    <section className="about-section">
      <h2 className="about-heading">{AboutContent.heading}</h2>
      <ul className="about-list">
        {AboutContent.highlights.map((point, index) => (
          <li key={index} className="about-list-item">
            {getIcon(index)} {point}
          </li>
        ))}
      </ul>
      <p className="about-closing">{AboutContent.closingNote}</p>
    </section>
  );
}

function getIcon(index: number): JSX.Element {
    const icons: JSX.Element[] = [
      <FaCode />,
      <FaServer />,
      <MdOutlineRocketLaunch />,
      <FaBrain />,
      <FaCode />,
    ];
    return <span className="about-icon">{icons[index % icons.length]}</span>;
  }
  
