import React from "react";
import sidenavlist_js from "../data/sidenavlist_js";
import Link from "next/link";

function Sidenav() {
  return (
    <div>
      {sidenavlist_js.map((each) => (
        <div key={each.id}>
          <Link
            href={each.href}
            className="px-4 py-2 flex border-b border-r uppercase"
          >
            {each.label}
          </Link>
          {each.data && (
            <ul className="ml-4">
              {each.data.map((t) => (
                <li key={t.id}>
                  <Link
                    href={t.href}
                    className="px-4 py-2 flex border-b border-r capitalize hover:bg-slate-200"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Sidenav;
