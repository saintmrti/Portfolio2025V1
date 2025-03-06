"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/icons/LogoNavBarSaintTechLogo.png";
import DarkModeIcon from "../../../public/svgs/DarkMode.svg";

interface NavbarProps {
  title?: string;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-slate-950 p-3 flex items-center shadow-lg">
      <Image src={Logo} alt="Logo" width={40} />
      <div className="flex-grow flex justify-center">
        <ul className="flex space-x-28">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
        </ul>
      </div>
      <DarkModeIcon width="1.5rem" height="1.5rem" />
    </nav>
  );
};

export default Navbar;
