"use client";

import { ExternalLink, ImageOff } from "lucide-react";

interface Props {
  title: string;
  image?: string | null;
}

export default function DocumentPreview({
  title,
  image,
}: Props) {
  return (
    <div className="rounded-xl border bg-white overflow-hidden">
      <div className="border-b px-4 py-3">
        <h3 className="font-medium">{title}</h3>
      </div>

      {image ? (
        <>
          <div className="aspect-[4/3] bg-gray-100">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-3">
            <a
              href={image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium hover:bg-gray-50"
            >
              <ExternalLink size={16} />
              View Full Image
            </a>
          </div>
        </>
      ) : (
        <div className="flex h-64 flex-col items-center justify-center gap-3 text-gray-400">
          <ImageOff size={48} />

          <p className="text-sm">
            No document uploaded
          </p>
        </div>
      )}
    </div>
  );
}