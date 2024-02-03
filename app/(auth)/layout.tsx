import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}

export default AuthLayout;
