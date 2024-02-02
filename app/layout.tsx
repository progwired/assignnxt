import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Theme } from "@radix-ui/themes";
import Sidenav from "./components/Sidenav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Progwired",
  description: "Learn the coding!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full">
        <Theme appearance="light" accentColor="blue">
          <Navbar />
          <div className="flex">
            <Sidenav />
            <main className="p-4 flex-1">{children}</main>
          </div>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
