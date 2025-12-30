import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-900 to-red-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-yellow-100">🇫🇷 🇮🇹 Bella Francese</h3>
            <p className="text-gray-300 mb-4">123 Via Principale, Downtown City</p>
            <p className="text-gray-300">(123) 456-7890</p>
            <p className="text-gray-300">reservations@bellafrancese.com</p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-100">Opening Hours</h4>
            <p className="text-gray-300 mb-2">Mon–Thu: 5:00 PM – 10:30 PM</p>
            <p className="text-gray-300 mb-2">Fri–Sat: 5:00 PM – 11:00 PM</p>
            <p className="text-gray-300">Sun: 5:00 PM – 10:00 PM</p>
            <p className="text-yellow-100 text-sm mt-4">🕒 Open for Dinner</p>
          </div>

          {/* Links & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-yellow-100">Quick Links</h4>
            <div className="space-y-2 mb-6">
              <Link href="/menu" className="block text-gray-300 hover:text-yellow-100 transition">Menu</Link>
              <Link href="/reservations" className="block text-gray-300 hover:text-yellow-100 transition">Reservations</Link>
              <Link href="/about" className="block text-gray-300 hover:text-yellow-100 transition">About</Link>
              <Link href="/location" className="block text-gray-300 hover:text-yellow-100 transition">Location</Link>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-100 transition hover:scale-110 transform">Instagram</a>
              <a href="#" className="text-gray-300 hover:text-yellow-100 transition hover:scale-110 transform">Facebook</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>© 2025 Bella Francese. All rights reserved. | Fine French & Italian Dining.</p>
        </div>
      </div>
    </footer>
  );
}
