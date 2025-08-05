"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Features", id: "features" },
  { label: "Pricing", id: "pricing" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (id: string) => {
    if (id === "home") {
      if (pathname === "/blog") {
        router.push("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0e13]/90 backdrop-blur border-b border-[#151823] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        {/* Logo Left */}
        <div className="flex items-center">
          <Image
            src="/icons/bolt.png"
            width={32}
            height={32}
            alt="ADmyBRAND Logo"
            className="mr-2"
          />
          <span className="text-xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-[#729cff] bg-clip-text">
            ADmyBRAND
          </span>
        </div>
        <div className="flex items-center gap-2 ml-8">
          {NAV_LINKS.map((nav) =>
            nav.label === "Blog" ? (
              <Link
                key={nav.id}
                href="/blog"
                className={`px-4 py-1 rounded-md text-base font-medium transition-colors duration-200
                  ${
                    pathname === "/blog"
                      ? "text-purple-400"
                      : "text-white hover:text-purple-300"
                  }`}
                prefetch={false}
                scroll={true}
              >
                {nav.label}
              </Link>
            ) : (
              <button
                key={nav.id}
                onClick={() => handleScroll(nav.id)}
                className={`px-4 py-1 rounded-md text-base font-medium 
                  transition-colors duration-200
                  ${
                    pathname === "/blog"
                      ? "text-white"
                      : nav.label === "Home"
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-purple-300"
                  }`}
              >
                {nav.label}
              </button>
            )
          )}
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-black text-white font-medium px-4 py-1.5 rounded-full hover:bg-[#181A1B] transition shadow">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-[#a17fff] to-[#729cff] text-white font-semibold px-5 py-1.5 rounded-full hover:from-[#729cff] hover:to-[#a17fff] transition shadow">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
