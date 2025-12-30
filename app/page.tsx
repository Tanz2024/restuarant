"use client";

import Link from "next/link";
import {
  CalendarCheck,
  Car,
  Clock,
  Compass,
  CookingPot,
  Fire,
  ForkKnife,
  Leaf,
  MapPin,
  Sparkle,
  Star,
  Wine,
} from "phosphor-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen hero-photo text-white flex items-center relative overflow-hidden">
        <div className="hero-overlay" />
        <div className="flag-stripe absolute top-0 left-0 w-full h-1 opacity-80" />

        <div className="max-w-7xl mx-auto px-6 w-full py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="animate-slide-in-left space-y-6">
              {/* removed: "An Italian–French Maison" */}

              <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                Seasonal dining, shaped with restraint
              </h1>

              <p className="text-lg text-white/70 max-w-xl">
                A calm room for unhurried evenings. The menu moves with the season,
                grounded in classic technique and guided by a considered wine list.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/reservations" className="btn-primary btn-cta inline-flex items-center gap-2">
                  <CalendarCheck size={18} weight="bold" />
                  Book a Table
                </Link>

                <Link
                  href="/menu"
                  className="btn-secondary inline-flex items-center gap-2 text-white border-white/60"
                >
                  <ForkKnife size={18} weight="bold" />
                  View the Menu
                </Link>
              </div>

              {/* removed: From Lyon to Florence / Chef’s Counter Experience / Cellar Selection */}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
{/* Quick Info Bar */}
<section className="bg-white py-10 border-b border-black/10">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-3 gap-8 text-center">
      {[
        { icon: Star, label: "4.9", isRating: true },
        { icon: MapPin, label: "Queens, New York" },
        { icon: Clock, label: "Open tonight · 5:00 PM – 10:30 PM" },
      ].map((item, i) => (
        <div
          key={item.label}
          className="animate-scale-in"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {/* ICON BADGE: make rating gold */}
<span
  className={`icon-badge mb-3 ${
    item.isRating ? "bg-[#FBBC04]/15" : ""
  }`}
>
  <item.icon
    size={20}
    weight="fill"
    className={item.isRating ? "text-[#FBBC04]" : ""}
  />
</span>


          <p className="text-lg font-semibold text-neutral-900">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Signature Dishes */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">From the Kitchen</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                dish: "Coq au Vin",
                desc: "Chicken, Burgundy wine, slow aromatics",
                icon: Wine,
              },
              {
                dish: "Wild Mushroom Risotto",
                desc: "Porcini, aged parmesan, restrained truffle",
                icon: Fire,
              },
              {
                dish: "Pappardelle with Ragù",
                desc: "Long-simmered beef, fresh pasta, basil finish",
                icon: ForkKnife,
              },
              {
                dish: "Crème Brûlée",
                desc: "Vanilla custard, caramelised sugar",
                icon: Sparkle,
              },
            ].map((item, i) => (
              <div
                key={item.dish}
                className="card-elegant p-6 transform hover:rotate-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="icon-badge mb-4">
                  <item.icon size={20} weight="bold" />
                </span>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-ink)" }}>
                  {item.dish}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">What Sets Us Apart</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Features */}
            <div className="space-y-8">
              {[
                { icon: Leaf, title: "Sourcing with intention" },
                { icon: CookingPot, title: "Technique-led cooking" },
                { icon: Wine, title: "A cellar built for pairing" },
              ].map((item, i) => (
                <div key={item.title} className="flex items-start gap-6">
                  <span className="icon-badge">
                    <item.icon size={22} weight="bold" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">
                      {i === 0 &&
                        "Ingredients selected from trusted producers, with a focus on seasonality and provenance."}
                      {i === 1 &&
                        "Classical foundations, modern restraint—each dish built for clarity and balance."}
                      {i === 2 &&
                        "A considered list that supports the menu, with pairings available by course."}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Atmosphere */}
            <div className="bg-gradient-to-br from-white to-neutral-100 rounded-3xl h-96 flex items-center justify-center shadow-xl relative overflow-hidden">
              <div className="absolute top-6 left-6 tag-pill-light">Evening service</div>
              <div className="absolute bottom-6 right-6 tag-pill-light">Selected piano nights</div>

              <div className="glass-panel rounded-2xl p-8 text-center space-y-4">
                <span className="icon-badge mx-auto">
                  <Sparkle size={24} weight="fill" />
                </span>
                <p className="text-2xl font-semibold text-neutral-900">
                  A room designed to slow time
                </p>
                <p className="text-sm text-neutral-600 max-w-xs">
                  Soft light, quiet detail, and a measured pace—made for conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-black to-neutral-800 rounded-3xl h-96 flex items-center justify-center shadow-xl text-white">
              <div className="text-center space-y-4">
                <span className="icon-badge mx-auto text-white bg-white/10">
                  <Compass size={22} weight="bold" />
                </span>
                <p className="text-lg font-semibold">Map overview</p>
                <p className="text-sm text-white/70">Queens, New York</p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-semibold mb-6 text-neutral-900">Getting Here</h2>

              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg mb-2 flex items-center gap-2 text-neutral-900">
                    <MapPin size={18} weight="bold" />
                    Address
                  </p>
                  <p className="text-gray-700">90-15 Queens Blvd, Elmhurst, NY 11373, United States</p>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2 flex items-center gap-2 text-neutral-900">
                    <Car size={18} weight="bold" />
                    Parking
                  </p>
                  <p className="text-gray-700">Valet available</p>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2 flex items-center gap-2 text-neutral-900">
                    <Compass size={18} weight="bold" />
                    Access
                  </p>
                  <p className="text-gray-700">Convenient by car and public transport</p>
                </div>

                <Link href="/contact" className="btn-primary inline-block mt-6">
                  View Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-black to-neutral-900 text-white text-center">
        <h2 className="text-4xl font-semibold mb-6">Reservations recommended</h2>
        <p className="text-xl text-white/70 mb-8">
          Limited seating each evening. Book ahead for your preferred time.
        </p>

        <Link
          href="/reservations"
          className="btn-primary btn-cta inline-flex items-center gap-2"
        >
          <CalendarCheck size={18} weight="bold" />
          Reserve a Table
        </Link>
      </section>
    </main>
  );
}
