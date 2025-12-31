import TrackedLink from "@/components/TrackedLink";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Bella Francese</h3>
            <p className="text-white/70 mb-4">123 Via Principale, Downtown City</p>
            <p className="text-white/70">(123) 456-7890</p>
            <p className="text-white/70">reservations@bellafrancese.com</p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
            <p className="text-white/70 mb-2">Mon-Thu: 5:00 PM - 10:30 PM</p>
            <p className="text-white/70 mb-2">Fri-Sat: 5:00 PM - 11:00 PM</p>
            <p className="text-white/70">Sun: 5:00 PM - 10:00 PM</p>
            <p className="text-white/70 text-sm mt-4">Open for Dinner</p>
          </div>

          {/* Links & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <div className="space-y-2 mb-6">
              <TrackedLink href="/menu" className="block text-white/70 hover:text-white transition">Menu</TrackedLink>
              <TrackedLink href="/reservations" className="block text-white/70 hover:text-white transition">Reservations</TrackedLink>
              <TrackedLink href="/about" className="block text-white/70 hover:text-white transition">About</TrackedLink>
              <TrackedLink href="/contact" className="block text-white/70 hover:text-white transition">Contact</TrackedLink>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition">Instagram</a>
              <a href="#" className="text-white/70 hover:text-white transition">Facebook</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>2025 Bella Francese. All rights reserved. | Fine French & Italian Dining.</p>
        </div>
      </div>
    </footer>
  );
}
