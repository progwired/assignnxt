import React from "react";
import Sidenav from "../components/Sidenav";

function JsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidenav />
      <div className="p-4">{children}</div>
    </div>
  );
}

export default JsLayout;
