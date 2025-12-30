import Link from "next/link";

export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-amber-100">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold mb-12">Visit Us</h2>

              {/* Address */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">📍 Address</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-800">Culinary Haven</p>
                  <p className="text-lg text-gray-800">123 Main Street</p>
                  <p className="text-lg text-gray-800">Downtown City, State 12345</p>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">📞 Phone</h3>
                <a href="tel:+11234567890" className="text-2xl text-amber-700 hover:text-amber-800 font-semibold">
                  (123) 456-7890
                </a>
              </div>

              {/* Email */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">📧 Email</h3>
                <a href="mailto:hello@culinaryhaven.com" className="text-2xl text-amber-700 hover:text-amber-800 font-semibold">
                  hello@culinaryhaven.com
                </a>
              </div>

              {/* Hours */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4">🕒 Opening Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Mon–Fri:</strong> 11:00 AM – 10:30 PM</p>
                  <p><strong>Sat–Sun:</strong> 10:00 AM – 11:00 PM</p>
                  <p className="mt-4 text-green-700 font-semibold">✓ Open Daily</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <Link href="/reservations" className="btn-primary">
                  Reserve Table
                </Link>
                <a
                  href="https://maps.google.com/?q=123+Main+Street+Downtown+City"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-amber-700 border-amber-700"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-300 rounded-lg h-96 lg:h-full flex items-center justify-center min-h-96">
              <div className="text-center">
                <p className="text-gray-600 text-2xl mb-4">📍</p>
                <p className="text-gray-600 font-semibold">Map Preview</p>
                <p className="text-gray-600 text-sm mt-2">123 Main Street, Downtown City</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parking & Transportation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">How to Find Us</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🅿️", title: "Free Parking", desc: "Ample parking available nearby" },
              { icon: "🚕", title: "Easy Access", desc: "Central downtown location" },
              { icon: "🚌", title: "Public Transit", desc: "5 min walk from transit stops" },
              { icon: "🏢", title: "Nearby", desc: "5 minutes from City Mall" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg text-center shadow-md">
                <p className="text-4xl mb-4">{item.icon}</p>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="section-title">Send us a Message</h2>

          <form className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700"
            />

            <textarea
              placeholder="Your Message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700"
            ></textarea>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Follow Us</h2>
        <p className="text-xl text-amber-100 mb-8">Stay updated with our latest dishes and special events</p>

        <div className="flex justify-center gap-8">
          <a href="#" className="text-3xl hover:opacity-75 transition">
            📱 Instagram
          </a>
          <a href="#" className="text-3xl hover:opacity-75 transition">
            👍 Facebook
          </a>
          <a href="#" className="text-3xl hover:opacity-75 transition">
            🐦 Twitter
          </a>
        </div>
      </section>
    </main>
  );
}
