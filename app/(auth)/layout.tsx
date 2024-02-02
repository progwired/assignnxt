import { Theme } from "@radix-ui/themes";
import Navbar from "../components/Navbar";

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
            <main className="p-4 flex-1">{children}</main>
          </div>
        </Theme>
      </body>
    </html>
  );
}
