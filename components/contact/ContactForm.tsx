"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-12 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Contact Form
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Send Us a Message
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Need assistance? Fill out the form below and our customer
            support team will get back to you as soon as possible.
          </p>

        </div>

        <form className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="+234..."
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Country
            </label>

            <select className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-600">
              <option>Select Country</option>
              <option>Chad</option>
              <option>Niger</option>
              <option>Mali</option>
              <option>Central African Republic</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">
              Subject
            </label>

            <input
              type="text"
              placeholder="How can we help you?"
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-600"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block font-medium">
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Write your message here..."
              className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-blue-600"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              <Send size={20} />
              Send Message
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}