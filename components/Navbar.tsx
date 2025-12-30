'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-amber-900">
          �🇷 🇮🇹 Bella Francese
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-amber-700 transition">Home</Link>
          <Link href="/menu" className="hover:text-amber-700 transition">Menu</Link>
          <Link href="/about" className="hover:text-amber-700 transition">About</Link>
          <Link href="/gallery" className="hover:text-amber-700 transition">Gallery</Link>
          <Link href="/events" className="hover:text-amber-700 transition">Events</Link>
          <Link href="/location" className="hover:text-amber-700 transition">Location</Link>
          <Link href="/contact" className="hover:text-amber-700 transition">Contact</Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <Link href="/reservations" className="btn-secondary text-sm">Reserve</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-amber-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-amber-50 p-4 flex flex-col space-y-2">
          <Link href="/" className="block py-2 hover:text-amber-700">Home</Link>
          <Link href="/menu" className="block py-2 hover:text-amber-700">Menu</Link>
          <Link href="/about" className="block py-2 hover:text-amber-700">About</Link>
          <Link href="/gallery" className="block py-2 hover:text-amber-700">Gallery</Link>
          <Link href="/events" className="block py-2 hover:text-amber-700">Events</Link>
          <Link href="/location" className="block py-2 hover:text-amber-700">Location</Link>
          <Link href="/contact" className="block py-2 hover:text-amber-700">Contact</Link>
          <Link href="/reservations" className="block py-2 btn-primary text-center">Reserve Table</Link>
        </div>
      )}
    </nav>
  );
}
