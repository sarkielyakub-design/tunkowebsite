"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-extrabold text-white">
              Tunko
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Tunko Money Transfer provides secure, fast and reliable
              financial services across West and Central Africa.
              Send money instantly, top up airtime, pay bills and
              exchange currencies with confidence.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-600"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-pink-600"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-black"
              >
                <FaXTwitter />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-700"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link href="/" className="block transition hover:text-green-400">
                Home
              </Link>

              <Link
                href="/services"
                className="block transition hover:text-green-400"
              >
                Services
              </Link>

              <Link
                href="/exchange"
                className="block transition hover:text-green-400"
              >
                Exchange Rates
              </Link>

              <Link
                href="/about"
                className="block transition hover:text-green-400"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block transition hover:text-green-400"
              >
                Contact
              </Link>

              <Link
                href="/faq"
                className="block transition hover:text-green-400"
              >
                FAQ
              </Link>

            </div>

          </div>

          {/* Countries */}
          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Supported Countries
            </h3>

            <div className="grid grid-cols-2 gap-3 text-gray-400">

              <span>🇳🇪 Niger</span>
              <span>🇹🇩 Chad</span>

              <span>🇨🇲 Cameroon</span>
              <span>🇬🇦 Gabon</span>

              <span>🇬🇶 Equatorial Guinea</span>
              <span>🇨🇫 Central African Republic</span>

              <span>🇲🇱 Mali</span>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Headquarters
            </h3>

            {/* Niger */}

            <div className="mb-8">

              <h4 className="mb-3 font-semibold text-green-400">
                🇳🇪 Niger Head Office
              </h4>

              <div className="space-y-3">

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-green-500" />
                  <span className="text-gray-400">
                    Diffa Region
                    <br />
                    Niger
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-500" />
                  <span>+227 96 80 90 17</span>
                </div>

              </div>

            </div>

            {/* Chad */}

            <div>

              <h4 className="mb-3 font-semibold text-green-400">
                🇹🇩 Chad Main Office
              </h4>

              <div className="space-y-3">

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-green-500" />
                  <span className="text-gray-400">
                    N'Djamena
                    <br />
                    Chad
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-500" />
                  <span>+235 90 18 32 93</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-500" />
                  <span>support@tunko.com</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 md:flex-row">

          <p className="text-sm text-gray-500">
            ©️ 2026 Tunko Money Transfer. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm">

            <Link href="#" className="hover:text-green-400">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-green-400">
              Terms of Service
            </Link>

            <Link href="#" className="hover:text-green-400">
              Cookies
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}