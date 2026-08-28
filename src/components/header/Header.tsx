"use client";

import MobileSidebar from "../sidebar/MobileSidebar";
import HeaderSearch from "./HeaderSearch";
import HeaderNotification from "./HeaderNotification";
import HeaderTheme from "./HeaderTheme";
import HeaderBreadcrumb from "./HeaderBreadcrumb";
import UserMenu from "./UserMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">

      {/* Left */}
      <div className="flex items-center gap-4">

        <MobileSidebar />

        <HeaderBreadcrumb />

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <HeaderSearch />

        <HeaderTheme />

        <HeaderNotification />

        <UserMenu />

      </div>

    </header>
  );
}