import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "v1-builder — Idea to working v1",
  description:
    "An AI tool that turns a product idea into a coherent, working v1 — frontend, backend, database, tests, and CI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
