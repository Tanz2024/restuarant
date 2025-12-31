"use client";

import {
  Buildings,
  Bus,
  Car,
  CarSimple,
  Check,
  Clock,
  Ear,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  MapPinLine,
  Phone,
  Taxi,
  TwitterLogo,
  Wheelchair,
} from "phosphor-react";
import TrackedLink from "@/components/TrackedLink";

const HIGHLIGHTS = [
  { icon: Buildings, text: "Elmhurst, Queens" },
  { icon: Car, text: "Easy Parking" },
  { icon: Bus, text: "Transit Access" },
  { icon: MapPin, text: "New York City" },
];

const PARKING_OPTIONS = [
  { icon: Car, title: "Free Lot Parking", desc: "Adjacent to the restaurant with ample spaces" },
  { icon: CarSimple, title: "Street Parking", desc: "Available on nearby streets during dining hours" },
  { icon: Wheelchair, title: "Accessible Parking", desc: "ADA-compliant spaces at the front entrance" },
];

const ACCESSIBILITY = [
  {
    icon: Wheelchair,
    title: "Wheelchair Access",
    features: ["Ramp at main entrance", "Accessible restrooms", "Wide pathways"],
  },
  {
    icon: Ear,
    title: "Hearing Assistance",
    features: ["Quiet seating available", "Visual menu options", "Staff trained in ASL"],
  },
];

const LANDMARKS = [
  { name: "MoMA PS1", distance: "10 minutes away" },
  { name: "Flushing Meadows Park", distance: "15 minutes away" },
  { name: "Queens Museum", distance: "12 minutes away" },
  { name: "Long Island City Waterfront", distance: "8 minutes away" },
];

export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Visit & Contact</h1>
          <p className="text-xl text-white/70">Everything you need to plan your visit in one place</p>
        </div>
      </section>

      {/* Contact + Location */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold mb-12">Bella Francese</h2>

              {/* Address */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="icon-badge">
                    <MapPin size={20} weight="bold" />
                  </span>
                  Address
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-800">Bella Francese</p>
                  <p className="text-lg text-gray-800">90-15 Queens Blvd, Elmhurst, NY 11373, United States</p>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="icon-badge">
                    <Phone size={20} weight="bold" />
                  </span>
                  Phone
                </h3>
                <a href="tel:+11234567890" className="text-2xl text-neutral-900 hover:text-black font-semibold">
                  (123) 456-7890
                </a>
              </div>

              {/* Email */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="icon-badge">
                    <Envelope size={20} weight="bold" />
                  </span>
                  Email
                </h3>
                <a
                  href="mailto:reservations@bellafrancese.com"
                  className="text-2xl text-neutral-900 hover:text-black font-semibold"
                >
                  reservations@bellafrancese.com
                </a>
              </div>

              {/* Hours */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="icon-badge">
                    <Clock size={20} weight="bold" />
                  </span>
                  Opening Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Monday - Thursday:</strong> 5:00 PM - 10:30 PM</p>
                  <p><strong>Friday - Saturday:</strong> 5:00 PM - 11:00 PM</p>
                  <p><strong>Sunday:</strong> 5:00 PM - 10:00 PM</p>
                  <p className="mt-4 text-neutral-900 font-semibold">Open for Dinner</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <TrackedLink
                  href="/reservations"
                  className="btn-primary btn-cta"
                  label="Contact Reserve Table"
                >
                  Reserve Table
                </TrackedLink>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="rounded-lg overflow-hidden h-96 lg:h-full min-h-96 border border-black/10">
              <iframe
                title="Bella Francese location map"
                src="https://www.google.com/maps?q=90-15%20Queens%20Blvd,%20Elmhurst,%20NY%2011373%20United%20States&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* How to Find Us */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">How to Find Us</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Directions */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Car size={22} weight="bold" />
                  By Car
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>From Manhattan:</strong> Take the Queensboro Bridge toward Queens and follow local signs.
                </p>
                <p className="text-gray-700">
                  <strong>Parking:</strong> Complimentary valet parking available. Street parking also available nearby.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Bus size={22} weight="bold" />
                  By Public Transit
                </h3>
                <p className="text-gray-700 mb-2">We are a short walk from major subway and bus lines in Queens.</p>
                <p className="text-gray-700">
                  <strong>Bus Routes:</strong> Lines 5, 12, and 23 stop near our location.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Taxi size={22} weight="bold" />
                  Taxi or Rideshare
                </h3>
                <p className="text-gray-700">Easy pickup and drop-off. Ask your driver for Elmhurst, Queens.</p>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="bg-white rounded-lg p-8 border border-black/10">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900 flex items-center gap-3">
                <MapPinLine size={22} weight="bold" />
                Nearby Attractions
              </h3>
              <ul className="space-y-4 text-gray-700">
                {LANDMARKS.map((landmark) => (
                  <li key={landmark.name} className="flex items-start gap-3">
                    <MapPinLine size={18} weight="bold" className="text-neutral-900" />
                    <div>
                      <p className="font-semibold">{landmark.name}</p>
                      <p className="text-sm text-gray-600">{landmark.distance}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parking Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title">Parking Information</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {PARKING_OPTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-gray-50 rounded-lg p-8 text-center">
                  <span className="icon-badge mb-4">
                    <Icon size={22} weight="bold" />
                  </span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title">Accessibility</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {ACCESSIBILITY.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-lg p-8 shadow-md">
                  <span className="icon-badge mb-4">
                    <Icon size={22} weight="bold" />
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-700">
                        <Check size={18} weight="bold" className="text-neutral-900" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="text-center text-gray-600 mt-8">
            For specific accessibility needs, please call us at{" "}
            <a href="tel:+11234567890" className="text-neutral-900 font-semibold hover:text-black">
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
            {HIGHLIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="bg-neutral-100 rounded-lg p-8 text-center">
                  <span className="icon-badge mb-4">
                    <Icon size={22} weight="bold" />
                  </span>
                  <p className="text-lg font-semibold text-neutral-900">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="section-title">Send us a Message</h2>

          <form className="bg-gray-50 p-8 rounded-lg border border-black/10 space-y-6">
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
            </div>

            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            />

            <textarea
              placeholder="Your Message"
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            ></textarea>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-8">Follow Us</h2>
        <p className="text-xl text-white/70 mb-8">Stay updated with our latest dishes and special events</p>

        <div className="flex justify-center gap-8">
          <a href="#" className="text-2xl flex items-center gap-3 hover:opacity-75 transition">
            <InstagramLogo size={24} weight="bold" />
            Instagram
          </a>
          <a href="#" className="text-2xl flex items-center gap-3 hover:opacity-75 transition">
            <FacebookLogo size={24} weight="bold" />
            Facebook
          </a>
          <a href="#" className="text-2xl flex items-center gap-3 hover:opacity-75 transition">
            <TwitterLogo size={24} weight="bold" />
            Twitter
          </a>
        </div>
      </section>
    </main>
  );
}
