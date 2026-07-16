"use client";

import { MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
          <MapPin size={34} />
        </div>

        <h1 className="mt-8 text-5xl font-bold">
          Contact Tunko
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
          We are committed to providing fast, secure and reliable
          money transfer services across Africa and beyond.
          Contact us or visit one of our branches.
        </p>

      </div>
    </section>
  );
}