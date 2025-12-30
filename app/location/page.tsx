import Link from "next/link";

export default function Location() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-red-900 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Visit Bella Francese</h1>
          <p className="text-xl text-yellow-50">Experience authentic French and Italian dining in our elegant restaurant</p>
        </div>
      </section>

      {/* Main Location Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Location Details */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Our Location</h2>

              <div className="space-y-8">
                {/* Address */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-red-900">📍 Address</h3>
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-700">
                    <p className="text-lg font-semibold mb-2">Bella Francese Restaurant</p>
                    <p className="text-lg mb-1">123 Via Principale</p>
                    <p className="text-lg">Downtown City, State 12345</p>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-red-900">📞 Contact</h3>
                  <div className="bg-red-50 p-6 rounded-lg space-y-2 border-l-4 border-red-700">
                    <p>
                      <strong>Phone:</strong>{" "}
                      <a href="tel:+11234567890" className="text-amber-700 hover:text-amber-800">
                        (123) 456-7890
                      </a>
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:reservations@bellafrancese.com" className="text-red-700 hover:text-red-800">
                        reservations@bellafrancese.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-red-900">🕒 Hours</h3>
                  <div className="bg-red-50 p-6 rounded-lg space-y-2 border-l-4 border-red-700">
                    <p><strong>Monday – Thursday:</strong> 5:00 PM – 10:30 PM</p>
                    <p><strong>Friday – Saturday:</strong> 5:00 PM – 11:00 PM</p>
                    <p><strong>Sunday:</strong> 5:00 PM – 10:00 PM</p>
                    <p className="mt-4 text-green-700 font-semibold">✓ Open for Dinner</p>
                  </div>
                </div>

                {/* CTA */}
                <Link href="/reservations" className="btn-primary inline-block mt-4">
                  👉 Make a Reservation
                </Link>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-300 rounded-lg h-96 lg:h-full flex items-center justify-center min-h-96">
              <div className="text-center">
                <p className="text-4xl mb-4">📍</p>
                <p className="text-gray-700 font-semibold text-lg">Interactive Map</p>
                <p className="text-gray-600 mt-2">123 Via Principale, Downtown City</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Find Us */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">How to Find Us</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Directions */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">🚗 By Car</h3>
                <p className="text-gray-700 mb-2">
                  <strong>From City Center:</strong> Head south on Via Principale. We're located in the historic downtown dining district.
                </p>
                <p className="text-gray-700">
                  <strong>Parking:</strong> Complimentary valet parking available. Street parking also available nearby.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">🚌 By Public Transit</h3>
                <p className="text-gray-700 mb-2">
                  We're just a 5-minute walk from the downtown transit hub.
                </p>
                <p className="text-gray-700">
                  <strong>Bus Routes:</strong> Lines 5, 12, and 23 stop near our location.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">🚕 Taxi / Rideshare</h3>
                <p className="text-gray-700">
                  Easy pickup and drop-off. Ask your driver for 123 Via Principale, Downtown.
                </p>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-red-700">
              <h3 className="text-2xl font-bold mb-6 text-red-900">🏙️ Nearby Attractions</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-700 mr-3 text-xl">▪</span>
                  <div>
                    <p className="font-semibold">Fine Arts Museum</p>
                    <p className="text-sm text-gray-600">3 minutes away</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-3 text-xl">▪</span>
                  <div>
                    <p className="font-semibold">Historic Old Town</p>
                    <p className="text-sm text-gray-600">5 minutes walk</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-3 text-xl">▪</span>
                  <div>
                    <p className="font-semibold">Downtown Theater District</p>
                    <p className="text-sm text-gray-600">Adjacent area</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-700 mr-3 text-xl">▪</span>
                  <div>
                    <p className="font-semibold">Waterfront Promenade</p>
                    <p className="text-sm text-gray-600">7 minutes away</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parking Info */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title">Parking Information</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🅿️",
                title: "Free Lot Parking",
                desc: "Adjacent to the restaurant with ample spaces",
              },
              {
                icon: "🅿️",
                title: "Street Parking",
                desc: "Available on nearby streets, typically easy during dining hours",
              },
              {
                icon: "♿",
                title: "Accessible Parking",
                desc: "ADA-compliant spaces available at the front entrance",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-4xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title">Accessibility</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "♿",
                title: "Wheelchair Access",
                features: ["Ramp at main entrance", "Accessible restrooms", "Wide pathways"],
              },
              {
                icon: "👂",
                title: "Hearing Assistance",
                features: ["Quiet seating available", "Visual menu options", "Staff trained in ASL"],
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-md">
                <p className="text-4xl mb-4">{item.icon}</p>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-gray-700">
                      <span className="text-green-600 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            For specific accessibility needs, please call us at{" "}
            <a href="tel:+11234567890" className="text-amber-700 font-semibold hover:text-amber-800">
              (123) 456-7890
            </a>
          </p>
        </div>
      </section>

      {/* Area Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Why Our Location is Perfect</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: "🏙️", text: "Downtown Heart" },
              { emoji: "🚗", text: "Easy Parking" },
              { emoji: "🚌", text: "Great Transit" },
              { emoji: "🛍️", text: "Near Shopping" },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-8 text-center">
                <p className="text-5xl mb-4">{item.emoji}</p>
                <p className="text-lg font-semibold text-amber-900">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Visit?</h2>
        <p className="text-xl text-amber-100 mb-8">We're conveniently located and ready to welcome you!</p>
        <div className="flex gap-4 justify-center">
          <Link href="/reservations" className="btn-primary">
            Reserve a Table
          </Link>
          <a
            href="https://maps.google.com/?q=123+Main+Street+Downtown+City"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-amber-900 transition"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </main>
  );
}
