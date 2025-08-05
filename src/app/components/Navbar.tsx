"use client";
import React, { useState } from "react";
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

function SideDrawer({ open, onClose, pathname, handleScroll }: {
  open: boolean;
  onClose: () => void;
  pathname: string;
  handleScroll: (id: string) => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-end md:hidden">
      <div className="w-80 max-w-full h-full bg-[#161b2e] opacity-100 shadow-xl p-6 flex flex-col relative">
        <div className="flex items-center justify-between mb-7">
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
          <button
            className="bg-cyan-400 p-2 rounded-full"
            aria-label="Close menu"
            onClick={onClose}
          >
            <svg width={22} height={22} viewBox="0 0 22 22" stroke="currentColor" strokeWidth={3} fill="none">
              <line x1="6" y1="6" x2="16" y2="16" stroke="currentColor"/>
              <line x1="16" y1="6" x2="6" y2="16" stroke="currentColor"/>
            </svg>
          </button>
        </div>
        
        <nav className="flex flex-col gap-2 mb-8">
          {NAV_LINKS.map((nav) =>
            nav.label === "Blog" ? (
              <Link
                key={nav.id}
                href="/blog"
                prefetch={false}
                scroll={true}
                onClick={onClose}
                className={`
                  px-3 py-2 rounded-md font-medium text-base
                  ${pathname === "/blog" ? "bg-gradient-to-r from-[#a17fff]/80 to-[#729cff]/80 text-white" : "text-gray-200"}
                  transition
                `}
              >
                {nav.label}
              </Link>
            ) : (
              <button
                key={nav.id}
                onClick={() => {
                  handleScroll(nav.id);
                  onClose();
                }}
                className={`
                  px-3 py-2 rounded-md font-medium text-base text-left
                  ${
                    pathname === "/blog"
                      ? "text-white"
                      : nav.label === "Home"
                      ? "bg-gradient-to-r from-[#a17fff]/80 to-[#729cff]/80 text-white"
                      : "text-gray-200"
                  }
                  transition
                `}
              >
                {nav.label}
              </button>
            )
          )}
        </nav>
        <hr className="border-[#232749] mb-4" />
        <div className="flex flex-col gap-3 mt-auto w-full">
          <button className="bg-black text-white font-semibold py-3 rounded-xl shadow hover:bg-[#181A1B] transition">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-[#a17fff] to-[#729cff] text-white font-bold py-3 rounded-xl shadow hover:from-[#729cff] hover:to-[#a17fff] transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
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
        <div className="hidden md:flex items-center gap-2 ml-8">
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
        <div className="hidden md:flex items-center gap-2">
          <button className="bg-black text-white font-medium px-4 py-1.5 rounded-full hover:bg-[#181A1B] transition shadow">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-[#a17fff] to-[#729cff] text-white font-semibold px-5 py-1.5 rounded-full hover:from-[#729cff] hover:to-[#a17fff] transition shadow">
            Get Started
          </button>
        </div>
        <button
          className="md:hidden bg-cyan-400 hover:bg-cyan-300 transition p-2 rounded-full ml-auto"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
            <rect x="7" y="12" width="14" height="2" rx="1" fill="currentColor"/>
            <rect x="7" y="6" width="14" height="2" rx="1" fill="currentColor"/>
            <rect x="7" y="18" width="14" height="2" rx="1" fill="currentColor"/>
          </svg>
        </button>
      </div>
      <SideDrawer
        open={open}
        onClose={() => setOpen(false)}
        pathname={pathname}
        handleScroll={handleScroll}
      />
    </nav>
  );
}
