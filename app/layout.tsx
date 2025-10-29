import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Creative Studio",
  description: "Portfolio landing page for a digital product studio"
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
