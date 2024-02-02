import { Theme } from "@radix-ui/themes";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";

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
        </Theme>
      </body>
    </html>
  );
}
