"use client";

import { CookingPot, Leaf, MusicNotes, UserCircle, Wine } from "phosphor-react";
import TrackedLink from "@/components/TrackedLink";

const PHILOSOPHY = [
  {
    icon: Leaf,
    title: "French Mastery",
    desc: "Traditional techniques from the culinary schools of France, refined over generations.",
  },
  {
    icon: CookingPot,
    title: "Italian Passion",
    desc: "Regional recipes from Tuscany, Sicily, and Rome, prepared with authentic Italian ingredients.",
  },
  {
    icon: Wine,
    title: "Wine Excellence",
    desc: "Carefully curated French and Italian wines to elevate every course and moment.",
  },
];

const TEAM = [
  {
    name: "Chef Louis Beaumont",
    role: "Head Chef",
    specialty: "French Haute Cuisine",
    image: "/french_chef.png",
  },
  {
    name: "Chef Marco Rossi",
    role: "Italian Chef",
    specialty: "Tuscan and Mediterranean",
    image: "/italian_chef.png",
  },
  {
    name: "Sophia Leclerc",
    role: "Restaurant Manager",
    specialty: "Fine Dining Experience",
    image: "/manager.png",
  },
];

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">About Bella Francese</h1>
          <p className="text-xl text-white/70">
            A Queens dining room where French craft meets Italian soul
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Bella Francese was born from a passion for authentic French and Italian cuisine. Our head chef trained
                in the kitchens of Lyon and the trattorias of Tuscany, bringing decades of culinary expertise to every
                plate we serve in Queens.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe that great dining is a celebration of tradition, quality, and the art of bringing people
                together. Every dish tells a story of Italian vineyards, French countryside farms, and generations of
                culinary heritage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From our kitchen to your table, we are committed to delivering an authentic European dining
                experience that honors time-tested recipes while celebrating the finest ingredients from both regions.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
                alt="Signature dishes on the table"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dining Room */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title">The Dining Room</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-black/10">
              <img
                src="/luxurious-hotel-bar-lounge.jpg"
                alt="Interior design of the dining room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <span className="icon-badge">
                  <MusicNotes size={22} weight="bold" />
                </span>
                <p className="text-lg font-semibold text-neutral-900">Live piano nightly</p>
              </div>
              <p className="text-lg leading-relaxed">
                Our Queens dining room pairs modern European interior design with warm lighting, velvet textures, and
                an intimate lounge where live piano sets the pace for the evening.
              </p>
              <p className="text-lg leading-relaxed">
                The space is crafted for celebrations, slow dinners, and a sense of occasion that feels distinctly
                Bella Francese.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Our Philosophy</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {PHILOSOPHY.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="card-elegant p-8 text-center"
                >
                  <span className="icon-badge mb-4">
                    <Icon size={24} weight="bold" />
                  </span>
                  <h3 className="text-xl font-bold mb-4 text-neutral-900">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Meet the Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((person) => (
              <div key={person.name} className="bg-gray-100 rounded-lg p-8 text-center">
                <div className="bg-neutral-200 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {person.image ? (
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  ) : (
                    <UserCircle size={40} weight="bold" />
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2">{person.name}</h3>
                <p className="text-neutral-900 font-semibold mb-2">{person.role}</p>
                <p className="text-gray-600">{person.specialty}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-12 text-lg">
            Our kitchen and service team share one goal: <strong>making every guest feel welcome</strong>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Experience Our Passion</h2>
        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Join us and discover why our guests keep coming back for more
        </p>
        <TrackedLink href="/reservations" className="btn-primary btn-cta" label="About Reserve a Table">
          Reserve a Table Today
        </TrackedLink>
      </section>
    </main>
  );
}
