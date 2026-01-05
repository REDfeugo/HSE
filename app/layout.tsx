import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orion Web Agency",
  description: "Orion Web Agency marketing page",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
