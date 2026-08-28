"use client";

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function SidebarSection({
  title,
  children,
}: SidebarSectionProps) {
  return (
    <div className="mb-6">
      <h2 className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
        {title}
      </h2>

      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
}