"use client";
import Link from "next/link";
import React from "react";
import navlist from "../data/navlist";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <nav className="flex border-b py-4">
      <div className="flex flex-1 px-4 items-center text-2xl">
        <Link href="/" className="text-2xl">
          PROGWIRED
        </Link>
      </div>
      <ul className="flex space-x-4  px-4">
        {navlist.map((each) => (
          <li key={each.href}>
            <a
              href={each.href}
              className={`hover:text-blue-900 transition-colors ${
                pathName === each.href
                  ? "active:text-blue-900"
                  : "text-zinc-500"
              }`}
            >
              {each.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
