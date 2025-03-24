/* eslint-disable react/jsx-key */
"use client";
import React, { JSX } from "react";
import { AboutContent } from "@/data/ABOUT";
import { FaCode, FaServer, FaBrain } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import "./style.css";
import Image from "next/image";
import Title from "../ui/title";

export default function About() {
  return (
    <div className="about" id="about">
      <section className="about-section">
        <Title as="h1" className="about-heading" text={AboutContent.heading}/>
        <ul className="about-list">
          {AboutContent.highlights.map((point, index) => (
            <li key={index} className="about-list-item">
              {getIcon(index)} {point}
            </li>
          ))}
        </ul>
        <p className="about-closing">{AboutContent.closingNote}</p>
      </section>
      <section className="code-img rounded">
      <Image alt="coding-image" src={"/hero.avif"} width={240} height={240} unoptimized/>
      </section>
    </div>
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
