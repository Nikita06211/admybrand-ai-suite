"use client";
import React from "react";
import Image from "next/image";

interface SideDrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function SideDrawer({ open, onClose, children }: SideDrawerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end md:hidden">
      {/* Overlay for background click */}
      <div
        className="fixed inset-0 bg-black opacity-30"
        onClick={onClose}
        role="button"
        tabIndex={-1}
        aria-label="Close menu"
      />
      {/* Drawer Content */}
      <div className="w-80 max-w-full h-full bg-[#161b2e] shadow-xl p-6 flex flex-col relative">
        {/* Drawer header */}
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
        <div className="flex-1 flex flex-col">{children}</div>
      </div>
    </div>
  );
}
