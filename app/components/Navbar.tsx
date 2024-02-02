"use client";
import Link from "next/link";
import React from "react";
import navlist from "../data/navlist";
import { MdAssistant } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="flex border-b py-4">
      <div className="flex flex-1 px-4 items-center text-2xl">
        <Link href="/">
          <span className="text-2xl">PROGWIRED</span>
        </Link>
      </div>
      <ul className="flex space-x-4  px-4">
        {navlist.map((each) => (
          <li key={each.href}>
            <Link
              href={each.href}
              className={`hover:text-blue-900 transition-colors ${
                pathName === each.href
                  ? "active:text-blue-900"
                  : "text-zinc-500"
              }`}
            >
              {each.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
