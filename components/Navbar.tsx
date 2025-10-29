"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const navigation = [
  { name: "Work", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a className="text-lg font-semibold text-white" href="#hero">
          Orbit Labs
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              className="transition hover:text-white"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full border border-primary-500 px-4 py-2 text-sm font-semibold text-primary-100 transition hover:bg-primary-500 hover:text-white"
          >
            Let’s talk
          </a>
        </div>
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-white/30 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={clsx(
          "md:hidden transition-all duration-200",
          isOpen ? "max-h-64 border-t border-white/10 bg-slate-950/95" : "max-h-0 overflow-hidden"
        )}
      >
        <nav className="space-y-1 px-4 pb-6 pt-2 text-sm text-slate-200">
          {navigation.map((item) => (
            <a
              key={item.name}
              className="block rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-400"
            href="#contact"
          >
            Let’s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
