import React from "react";
import sidenavlist_js from "../data/sidenavlist_js";
import Link from "next/link";

function Sidenav() {
  return (
    <div>
      <ul>
        {sidenavlist_js.map((each) => (
          <li key={each.id}>
            <Link
              href={each.href}
              className="px-4 py-2 flex border-b border-r uppercase"
            >
              {each.label}
            </Link>
            {each.data && (
              <ul>
                {each.data.map((t) => (
                  <li key={t.id}>
                    <Link
                      href={t.href}
                      className="px-4 py-2 flex border-b border-r capitalize"
                    >
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidenav;
