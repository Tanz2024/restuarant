"use client";

import { CalendarCheck, Car, Clock, Compass, MapPin, Star } from "phosphor-react";
import TrackedLink from "@/components/TrackedLink";

export default function Home() {
  const featuredDish = {
    label: "Signature",
    name: "Coq au Vin",
    image: "/Coq au Vin.png",
    alt: "Coq au vin",
  };

  const supportingDishes = [
    {
      name: "Wild Mushroom Risotto",
      image: "/Wild Mushroom Risotto.png",
      alt: "Wild mushroom risotto",
    },
    {
      name: "Pappardelle with Ragout",
      image: "/Pappardelle with Ragout.png",
      alt: "Pappardelle with ragout",
    },
    {
      name: "Creme Brulee",
      image: "/Creme brulee.png",
      alt: "Creme brulee",
    },
  ];
  const allDishes = [featuredDish, ...supportingDishes];
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen hero-photo text-white flex items-center relative overflow-hidden">
        <div className="hero-overlay" />
        <div className="noise-overlay" />
        <div className="flag-stripe absolute top-0 left-0 w-full h-1 opacity-80" />

        <div className="max-w-7xl mx-auto px-6 w-full py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-semibold leading-[1.08]">
                Seasonal dining, shaped with restraint
              </h1>

              <p className="text-lg text-white/70 max-w-xl">
                A calm room for unhurried evenings. Seasonal cooking, classical technique,
                and a quiet cellar.
              </p>

              <div className="flex flex-wrap gap-4">
                <TrackedLink
                  href="/reservations"
                  className="btn-primary btn-cta inline-flex items-center gap-2"
                  label="Hero Book a Table"
                >
                  <CalendarCheck size={18} weight="bold" />
                  Book a Table
                </TrackedLink>

                <TrackedLink
                  href="/menu"
                  className="btn-secondary inline-flex items-center gap-2 text-white border-white/60"
                  label="Hero View the Menu"
                >
                  View the Menu
                </TrackedLink>
              </div>
            </div>

            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white py-10 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Star, label: "4.9", meta: "Rating", isRating: true },
              { icon: MapPin, label: "Queens, New York", meta: "Location", tone: "muted" },
              {
                icon: Clock,
                label: "Open tonight - 5:00 PM - 10:30 PM",
                meta: "Hours",
              },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <span
                  className={`icon-badge mb-2 ${
                    item.isRating ? "bg-[#FBBC04]/10 h-9 w-9" : ""
                  }`}
                >
                  <item.icon
                    size={item.isRating ? 18 : 20}
                    weight={item.isRating ? "regular" : "fill"}
                    className={item.isRating ? "text-[#FBBC04]/80" : ""}
                  />
                </span>

                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
                  {item.meta}
                </p>
                <p
                  className={`text-lg font-semibold ${
                    item.tone === "muted" ? "text-neutral-700" : "text-neutral-900"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dishes - Desktop vs Mobile totally different */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[11px] uppercase tracking-[0.5em] text-neutral-500 mb-4">
              From the kitchen
            </p>
            <h2 className="text-4xl md:text-6xl leading-[0.95] font-semibold tracking-tight text-neutral-900">
              Signature Dishes
            </h2>
            <div className="mt-6 h-px w-12 bg-black/10" />
          </div>

          {/* ===================== DESKTOP / TABLET (existing editorial grid) ===================== */}
          <div className="hidden md:grid lg:grid-cols-[1.08fr_0.92fr] gap-10">
            {/* Featured */}
            <article className="group">
              <div className="relative overflow-hidden rounded-[30px] border border-black/10 min-h-[520px] bg-neutral-100">
                <img
                  src={featuredDish.image}
                  alt={featuredDish.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover saturate-95 brightness-[0.98] transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-5 space-y-3">
                <h3 className="text-3xl md:text-4xl font-medium tracking-[-0.015em] text-neutral-950">
                  {featuredDish.name}
                </h3>
                <p className="text-[15px] text-neutral-700">
                  {featuredDish.description}
                </p>
                <div className="mt-5 h-px w-12 bg-black/10" />
              </div>
            </article>

            {/* Supporting stack */}
            <div className="flex flex-col gap-10">
              {supportingDishes.map((dish) => (
                <article key={dish.name} className="group">
                  <div className="relative overflow-hidden rounded-[24px] border border-black/10 min-h-[200px] bg-neutral-100">
                    <img
                      src={dish.image}
                      alt={dish.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover saturate-95 brightness-[0.98] transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="mt-5 space-y-2">
                    <h3 className="text-xl md:text-2xl font-medium tracking-[-0.01em] text-neutral-950">
                      {dish.name}
                    </h3>
                    {dish.description && (
                      <p className="text-[15px] text-neutral-700">{dish.description}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* ===================== MOBILE (totally different, French luxury cards) ===================== */}
          <div className="md:hidden">
            <div className="space-y-6">
              {allDishes.map((dish) => (
                <article
                  key={dish.name}
                  className="overflow-hidden rounded-[28px] border border-black/10 bg-white"
                >
                  {/* Image with centered bottom overlay text */}
                  <div className="relative h-[240px] bg-neutral-100">
                    <img
                      src={dish.image}
                      alt={dish.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* soft fade at bottom for readability (NOT blur) */}
                    <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* centered caption */}
                    <div className="absolute inset-x-0 bottom-0 p-5 text-center text-white">
                      <h3 className="text-2xl font-semibold tracking-[-0.015em]">
                        {dish.name}
                      </h3>
                      {dish.description && (
                        <p className="mt-2 text-[13px] text-white/85">
                          {dish.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* tiny “French luxury” detail line under image */}
                  <div className="px-5 py-5">
                    <p className="text-[12px] text-neutral-700 leading-relaxed">
                      Prepared with classical technique and seasonal ingredients - finished
                      with restraint for a clean, French table.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Quality bio under section */}
          <div className="mt-16 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Our standard
            </p>
            <p className="mt-4 text-lg md:text-xl text-neutral-800">
              Ingredients chosen with care. Technique kept classical. Plates finished with
              restraint - so the season speaks first.
            </p>
            <p className="mt-3 text-[15px] text-neutral-600">
              House-made stocks, precise sauces, and produce sourced for freshness - served
              in a calm rhythm, without haste.
            </p>

          </div>

          <div className="mt-12 flex justify-center md:justify-start">
            <TrackedLink href="/menu" className="btn-primary inline-block" label="View more">
              View more
            </TrackedLink>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-3xl min-h-[26rem] border border-black/10 bg-neutral-100">
              <img
                src="/exterior_pic.png"
                alt="Exterior view of Bella Francese"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.2)]" />
            </div>

            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.5em] text-neutral-500">
                The facade
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.01em] text-neutral-900">
                A quiet address in Queens
              </h2>
              <div className="mt-6 h-px w-12 bg-black/10" />
              <p className="mt-6 text-[17px] md:text-[18px] leading-relaxed text-neutral-700">
                Behind a warm glow and a restrained exterior, Bella Francese offers a calm
                entry to the evening - candlelit, composed, and quietly welcoming.
              </p>
              <p className="mt-4 text-[15px] text-neutral-600">
                Valet service is available, with easy access by car or public transport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature - French Dining (US) Editorial */}
      <section className="py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative overflow-hidden rounded-3xl min-h-[520px] lg:order-2">
              <img
                src="/piano.png"
                alt="Live piano in the dining room"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
              <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.25)]" />
            </div>

            <div className="flex flex-col justify-center lg:order-1">
              <h2 className="text-[44px] md:text-[58px] leading-[0.94] font-semibold tracking-[-0.01em] text-neutral-900">
                The Art of Dining
              </h2>

              <div className="mt-10 h-px w-16 bg-black/10" />

              <p className="mt-10 text-[17px] md:text-[18px] leading-relaxed text-neutral-700 max-w-lg">
                A French table shaped by season, restraint, and craft - where each course is
                <em className="italic"> composed with clarity and intention</em>. Service is
                quiet, rhythms are unhurried, and the cellar follows the evening.
              </p>

              <p className="mt-7 text-[17px] md:text-[18px] leading-relaxed text-neutral-700 max-w-xl">
                Classic technique, modern precision - a dining room designed for lingering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-semibold mb-6">Reservations recommended</h2>
        <p className="text-xl text-white/70 mb-8">
          Limited seating each evening. Book ahead for your preferred time.
        </p>

        <TrackedLink
          href="/reservations"
          className="btn-primary btn-cta inline-flex items-center gap-2"
          label="Final Reserve a Table"
        >
          <CalendarCheck size={18} weight="bold" />
          Reserve a Table
        </TrackedLink>
      </section>
    </main>
  );
}
