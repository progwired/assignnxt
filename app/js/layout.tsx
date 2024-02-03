import React from "react";
import Sidenav from "../components/Sidenav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JavaScript",
  description: "Learn JavaScript",
};

function JsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidenav />
      <div className="p-4">{children}</div>
    </div>
  );
}

export default JsLayout;
