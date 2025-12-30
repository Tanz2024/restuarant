'use client';

import { useState } from "react";
import { Briefcase, Check, CheckCircle, Confetti, Envelope, Gift, Phone } from "phosphor-react";

const EVENT_TYPES = [
  {
    icon: Gift,
    title: "Birthday Soirees",
    desc: "Signature menus, bespoke cakes, and a private lounge for an elevated celebration.",
  },
  {
    icon: Confetti,
    title: "Weddings & Engagements",
    desc: "Ceremony dinners, tasting menus, and wine pairings crafted for your Boston-to-Queens love story.",
  },
  {
    icon: Briefcase,
    title: "Premium Catering",
    desc: "Chef-led catering with full service staff, glassware, and plated or passed formats.",
  },
];

const FEATURES = [
  "Curated tasting menus and seasonal pairings",
  "Private dining rooms with tailored layouts",
  "Dedicated event concierge and service team",
  "Luxury table settings and floral styling options",
  "Flexible formats for 10-120 guests",
  "Sommelier-led wine and cocktail programs",
  "Dietary accommodations and allergen management",
  "On-site coordination from arrival to dessert",
];

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
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Private Events and Catering</h1>
          <p className="text-xl text-white/70">Make your celebration unforgettable with us</p>
        </div>
      </section>

      {/* Events Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-title">Tailored Menus, Dedicated Service</h2>
          <p className="text-xl text-gray-700 mb-12">
            From intimate celebrations to corporate gatherings, we offer tailored menus and dedicated service to make
            your event truly special.
          </p>
        </div>
        <div className="w-full">
          <div className="overflow-hidden shadow-2xl rounded-none md:rounded-[36px] md:mx-6">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
              alt="Event dining setup"
              className="w-full h-[320px] md:h-[440px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Perfect For</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {EVENT_TYPES.map((event) => {
              const Icon = event.icon;
              return (
                <div key={event.title} className="bg-white p-8 rounded-lg shadow-md">
                  <span className="icon-badge mb-4">
                    <Icon size={24} weight="bold" />
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                  <p className="text-gray-600 mb-6">{event.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signature Occasions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-3">Signature Occasions</p>
              <h2 className="text-4xl md:text-5xl font-bold">Weddings, Birthdays, Catering</h2>
            </div>
            <p className="text-sm text-neutral-500 max-w-xs">
              A sculpted layout for three distinct experiences, designed to feel editorial and intentional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings",
                desc: "Candlelit reception dining, curated pairings, and a dedicated coordinator for every detail.",
                image:
                  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Birthdays",
                desc: "Private lounge seating, bespoke desserts, and a festive service flow tailored to your party.",
                image:
                  "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=900&q=80",
              },
              {
                title: "Catering",
                desc: "Chef-led menus delivered and styled on-site with elevated presentation and staffing.",
                image:
                  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="bg-white border border-black/20 rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-56 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-7">
                  <h3 className="text-3xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
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
            {FEATURES.map((feature) => (
              <p key={feature} className="text-lg text-gray-700 flex items-center gap-3">
                <Check size={20} weight="bold" className="text-neutral-900" />
                {feature}
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
                price: "$25-35 per person",
                items: ["Appetizers", "Main courses", "Desserts", "Soft drinks"],
              },
              {
                name: "Premium",
                price: "$35-50 per person",
                items: ["Premium appetizers", "Multi-course menu", "Desserts", "Full beverage selection"],
              },
              {
                name: "Deluxe",
                price: "$50+ per person",
                items: ["Chef's selections", "Customized multi-course", "Special desserts", "Premium bar service"],
              },
            ].map((pkg) => (
              <div key={pkg.name} className="bg-white rounded-lg p-8 shadow-md border-t-4 border-black">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-lg text-neutral-900 font-semibold mb-6">{pkg.price}</p>
                <ul className="space-y-3 text-gray-700">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check size={18} weight="bold" className="text-neutral-900" />
                      {item}
                    </li>
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
              Tell us about your vision, and we will create the perfect catering experience for you.
            </p>
          </div>

          {!showQuoteForm ? (
            <button
              onClick={() => setShowQuoteForm(true)}
              className="btn-primary w-full text-center text-lg mx-auto block"
            >
              Request a Quote
            </button>
          ) : (
            <form onSubmit={handleQuoteSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6">
              {quoteSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                  <div className="flex items-center justify-center gap-3 text-green-700 mb-2">
                    <CheckCircle size={24} weight="fill" />
                    <p className="text-2xl font-bold">Quote Request Sent!</p>
                  </div>
                  <p className="text-gray-700">We will contact you within 24 hours to discuss your event details.</p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    />
                    <input
                      type="date"
                      placeholder="Event Date"
                      required
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Event Type (e.g., Birthday, Wedding, Corporate)"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  />

                  <input
                    type="number"
                    placeholder="Expected Number of Guests"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  />

                  <textarea
                    placeholder="Event Details, Special Requests, or Menu Preferences"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  ></textarea>

                  <div className="flex gap-4">
                    <button type="submit" className="btn-primary flex-1">
                      Send Quote Request
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowQuoteForm(false)}
                      className="btn-secondary text-neutral-900 border-black flex-1"
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
      <section className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Questions? Let's Talk</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white border border-black/10 rounded-2xl p-8 text-left shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-4">Restaurant Events</p>
              <p className="text-2xl font-semibold mb-3 flex items-center gap-3">
                <Phone size={22} weight="bold" />
                Dining Reservations
              </p>
              <a href="tel:+11234567890" className="text-xl text-neutral-900 hover:text-black">
                (123) 456-7890
              </a>
              <p className="text-sm text-gray-600 mt-3">private dining, birthdays, weddings</p>
            </div>
            <div className="bg-white border border-black/10 rounded-2xl p-8 text-left shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-4">Catering</p>
              <p className="text-2xl font-semibold mb-3 flex items-center gap-3">
                <Envelope size={22} weight="bold" />
                Catering Concierge
              </p>
              <a href="mailto:catering@bellafrancese.com" className="text-xl text-neutral-900 hover:text-black">
                catering@bellafrancese.com
              </a>
              <p className="text-sm text-gray-600 mt-3">off-site, corporate, and luxury delivery</p>
            </div>
          </div>

          <p className="text-gray-600">Our events team is ready to bring your vision to life.</p>
        </div>
      </section>
    </main>
  );
}
