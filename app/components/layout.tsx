import React, { ReactNode } from "react";
import Sidenav from "@/app/components/Sidenav";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex">
      <Sidenav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
