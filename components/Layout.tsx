import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-28 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
}
