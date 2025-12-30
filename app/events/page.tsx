'use client';

import { useState } from "react";

export default function Events() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    setTimeout(() => {
      setShowQuoteForm(false);
      setQuoteSubmitted(false);
    }, 3000);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Private Events & Catering</h1>
          <p className="text-xl text-amber-100">Make your celebration unforgettable with us</p>
        </div>
      </section>

      {/* Events Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-title">Tailored Menus, Dedicated Service</h2>
          <p className="text-xl text-gray-700 mb-12">
            From intimate celebrations to corporate gatherings, we offer tailored menus and dedicated service to make your event truly special.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Perfect For</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎂",
                title: "Birthdays",
                desc: "Celebrate milestones with our special birthday packages and customized menus.",
              },
              {
                icon: "💼",
                title: "Corporate Dinners",
                desc: "Impress your clients with an elegant dining experience and professional service.",
              },
              {
                icon: "🎉",
                title: "Private Celebrations",
                desc: "Anniversaries, engagements, and special moments deserve a memorable meal.",
              },
            ].map((event, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-5xl mb-4">{event.icon}</p>
                <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                <p className="text-gray-600 mb-6">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title">What We Offer</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "✓ Customized menus tailored to your preferences",
              "✓ Professional event planning and coordination",
              "✓ Dedicated service team for your event",
              "✓ Flexible date and time options",
              "✓ Space for 10–100+ guests",
              "✓ Beverage packages and special drinks",
              "✓ Dietary accommodations and allergen management",
              "✓ Setup and decoration assistance",
            ].map((feature, i) => (
              <p key={i} className="text-lg text-gray-700 flex items-center">
                <span className="text-green-600 text-2xl mr-4">✓</span>
                {feature.replace("✓ ", "")}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Catering Packages</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Casual",
                price: "$25–35 per person",
                items: ["Appetizers", "Main courses", "Desserts", "Soft drinks"],
              },
              {
                name: "Premium",
                price: "$35–50 per person",
                items: ["Premium appetizers", "Multi-course menu", "Desserts", "Full beverage selection"],
              },
              {
                name: "Deluxe",
                price: "$50+ per person",
                items: ["Chef's selections", "Customized multi-course", "Special desserts", "Premium bar service"],
              },
            ].map((pkg, i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-md border-t-4 border-amber-700">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-lg text-amber-700 font-semibold mb-6">{pkg.price}</p>
                <ul className="space-y-3 text-gray-700">
                  {pkg.items.map((item, j) => (
                    <li key={j}>✓ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Let's Plan Your Event</h2>
            <p className="text-xl text-gray-600 mb-8">
              Tell us about your vision, and we'll create the perfect catering experience for you.
            </p>
          </div>

          {!showQuoteForm ? (
            <button
              onClick={() => setShowQuoteForm(true)}
              className="btn-primary w-full text-center text-lg mx-auto block"
            >
              👉 Request a Quote
            </button>
          ) : (
            <form onSubmit={handleQuoteSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
              {quoteSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                  <p className="text-2xl font-bold text-green-700 mb-2">✓ Quote Request Sent!</p>
                  <p className="text-gray-700">
                    We'll contact you within 24 hours to discuss your event details.
                  </p>
                </div>
              ) : (
                <>
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
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700"
                    />
                    <input
                      type="date"
                      placeholder="Event Date"
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Event Type (e.g., Birthday, Wedding, Corporate)"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700"
                  />

                  <input
                    type="number"
                    placeholder="Expected Number of Guests"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700"
                  />

                  <textarea
                    placeholder="Event Details, Special Requests, or Menu Preferences"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700"
                  ></textarea>

                  <div className="flex gap-4">
                    <button type="submit" className="btn-primary flex-1">
                      Send Quote Request
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowQuoteForm(false)}
                      className="btn-secondary text-amber-700 border-amber-700 flex-1"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Questions? Let's Talk</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-2xl font-semibold mb-2">📞 Call Us</p>
              <a href="tel:+11234567890" className="text-xl text-amber-700 hover:text-amber-800">
                (123) 456-7890
              </a>
            </div>
            <div>
              <p className="text-2xl font-semibold mb-2">📧 Email Us</p>
              <a href="mailto:events@culinaryhaven.com" className="text-xl text-amber-700 hover:text-amber-800">
                events@culinaryhaven.com
              </a>
            </div>
          </div>

          <p className="text-gray-600">Our events team is ready to bring your vision to life.</p>
        </div>
      </section>
    </main>
  );
}
