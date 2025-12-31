'use client';

import { useState } from "react";
import { Check, CheckCircle, Envelope, Phone, WhatsappLogo } from "phosphor-react";

const PROMISES = [
  "Confirmation within 1 hour",
  "Special occasions handled with care",
  "Flexible cancellation policy",
  "Dietary requirements accommodated",
];

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    requests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", date: "", time: "", guests: "2", requests: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Make a Reservation</h1>
          <p className="text-xl text-white/70">We recommend reservations to ensure the best experience</p>
        </div>
      </section>

      {/* Reservations Form */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          {submitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center gap-3 text-green-700 mb-2">
                <CheckCircle size={24} weight="fill" />
                <p className="text-2xl font-bold">Reservation Received!</p>
              </div>
              <p className="text-gray-700">
                Thank you! We will confirm your reservation shortly via phone or email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg border border-black/10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-lg font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    placeholder="Peter Kahm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-lg font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                    placeholder="(123) 456-7890"
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-lg font-semibold mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="block text-lg font-semibold mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-lg font-semibold mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="mb-8">
                <label className="block text-lg font-semibold mb-2">Special Requests (optional)</label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black h-24"
                  placeholder="Allergies, dietary needs, occasion, etc."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-primary w-full text-lg">
                Reserve Now
              </button>
            </form>
          )}

          {/* Alternative - WhatsApp */}
          <div className="mt-12 p-8 rounded-lg text-center">
            <p className="text-lg font-semibold mb-4">Prefer WhatsApp?</p>
            <a
              href="https://wa.me/1234567890?text=Hi,%20I%20would%20like%20to%20reserve%20a%20table%20at%20Culinary%20Haven"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              <WhatsappLogo size={20} weight="fill" />
              Tap to Reserve via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Reservation Information</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Phone size={20} weight="bold" />
                Call Us
              </h3>
              <p className="text-gray-700">(123) 456-7890</p>
              <p className="text-gray-600 text-sm mt-2">Mon-Fri: 11:00 AM - 10:30 PM</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Envelope size={20} weight="bold" />
                Email Us
              </h3>
              <p className="text-gray-700">hello@culinaryhaven.com</p>
              <p className="text-gray-600 text-sm mt-2">Response within 2 hours</p>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Promise</h3>
            <ul className="space-y-3 text-gray-700">
              {PROMISES.map((promise) => (
                <li key={promise} className="flex items-center gap-3">
                  <Check size={18} weight="bold" className="text-neutral-900" />
                  {promise}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
