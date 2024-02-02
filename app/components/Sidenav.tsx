import React from "react";
import sidenavlist_js from "../data/sidenavlist_js";
import Link from "next/link";

function Sidenav() {
  return (
    <div>
      <ul className="mt-2">
        {sidenavlist_js.map((each) => (
          <li key={each.id}>
            <Link href={each.href} className="px-4 py-2 flex border-b">
              {each.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidenav;
