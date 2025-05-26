import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mis Verbos",
  description: "For practicing Spanish verb conjugation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
