"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-72 transform bg-slate-900 transition-transform duration-300 lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-white hover:bg-slate-800"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="h-[calc(100%-72px)]">
          <Sidebar />
        </div>
      </div>
    </>
  );
}