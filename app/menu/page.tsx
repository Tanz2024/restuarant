"use client";

import Link from "next/link";

function SectionHeading({
  kicker,
  title,
}: {
  kicker?: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      {kicker && (
        <p className="text-[11px] uppercase tracking-[0.45em] text-neutral-500 mb-4">
          {kicker}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
        {title}
      </h2>
      <div className="mt-6 h-[5px] w-full bg-neutral-900" />
    </div>
  );
}

export default function Menu() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-4">
            Menu
          </p>
          <h1 className="text-5xl font-bold mb-4">French & Italian</h1>
          <p className="text-xl text-white/70 max-w-3xl">
            Seasonal cooking with classical foundations—served with restraint,
            built for calm evenings.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6">
          {/* Starters */}
          <div className="mb-20">
            <SectionHeading kicker="Course" title="Entrées (Starters)" />
            <div className="space-y-6">
              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Escargots de Bourgogne</h3>
                  <p className="text-gray-600">Garlic-parsley butter</p>
                </div>
                <p className="menu-price">$14</p>
              </div>

              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Caprese</h3>
                  <p className="text-gray-600">Mozzarella, tomato, basil</p>
                </div>
                <p className="menu-price">$12</p>
              </div>

              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Soupe à l’Oignon</h3>
                  <p className="text-gray-600">
                    Onion broth, Gruyère, toasted bread
                  </p>
                </div>
                <p className="menu-price">$10</p>
              </div>
            </div>
          </div>

          {/* Mains */}
          <div className="mb-20">
            <SectionHeading kicker="Course" title="Plats Principaux (Mains)" />
            <div className="space-y-6">
              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Coq au Vin</h3>
                  <p className="text-gray-600">
                    Burgundy wine, mushrooms, pearl onions
                  </p>
                </div>
                <p className="menu-price">$28</p>
              </div>

              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Pappardelle al Ragù</h3>
                  <p className="text-gray-600">
                    Fresh ribbon pasta, slow-simmered sauce
                  </p>
                </div>
                <p className="menu-price">$26</p>
              </div>

              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Risotto ai Funghi</h3>
                  <p className="text-gray-600">
                    Porcini, aged parmesan, restrained truffle
                  </p>
                </div>
                <p className="menu-price">$24</p>
              </div>

              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Branzino al Forno</h3>
                  <p className="text-gray-600">Lemon, herbs, olive oil</p>
                </div>
                <p className="menu-price">$32</p>
              </div>

              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Côte de Bœuf</h3>
                  <p className="text-gray-600">Red wine reduction</p>
                </div>
                <p className="menu-price">$38</p>
              </div>
            </div>
          </div>

          {/* Beverages */}
          <div className="mb-20">
            <SectionHeading kicker="Beverage" title="Vins & Boissons" />
            <div className="space-y-6">
              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Vins au Verre (By the Glass)</h3>
                  <p className="text-gray-600">
                    Rotating selection—white, red, rosé, sparkling
                  </p>
                </div>
                <p className="menu-price">$12–18</p>
              </div>

              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Bouteilles (By the Bottle)</h3>
                  <p className="text-gray-600">
                    France & Italy, with a small cellar reserve
                  </p>
                </div>
                <p className="menu-price">$55–220</p>
              </div>

              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Cocktails</h3>
                  <p className="text-gray-600">Classics, made with restraint</p>
                </div>
                <p className="menu-price">$14–18</p>
              </div>

              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Sans Alcool</h3>
                  <p className="text-gray-600">
                    Sparkling water, still water, seasonal house drinks
                  </p>
                </div>
                <p className="menu-price">$5–9</p>
              </div>

              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Café & Digestifs</h3>
                  <p className="text-gray-600">
                    Espresso, amaro, grappa, cognac
                  </p>
                </div>
                <p className="menu-price">$4–16</p>
              </div>
            </div>
          </div>

          {/* Desserts */}
          <div className="mb-16">
            <SectionHeading kicker="Finale" title="Desserts" />
            <div className="space-y-6">
              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Crème Brûlée</h3>
                  <p className="text-gray-600">
                    Vanilla custard, caramelised sugar
                  </p>
                </div>
                <p className="menu-price">$8</p>
              </div>

              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Panna Cotta</h3>
                  <p className="text-gray-600">Cream set, berry coulis</p>
                </div>
                <p className="menu-price">$9</p>
              </div>

              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Tiramisù</h3>
                  <p className="text-gray-600">
                    Mascarpone, espresso, cocoa
                  </p>
                </div>
                <p className="menu-price">$8</p>
              </div>

              <div className="menu-item">
                <div>
                  <h3 className="text-2xl font-bold">Chocolate Soufflé</h3>
                  <p className="text-gray-600">Warm centre</p>
                </div>
                <p className="menu-price">$10</p>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white p-8 rounded-lg mb-12 border border-black/10">
            <p className="text-lg text-gray-700">
              <strong>Please tell us about allergies or dietary needs.</strong>{" "}
              We’ll do our best to accommodate.
            </p>
          </div>

          {/* PDF */}
          <div className="text-center">
            <button className="btn-primary inline-flex items-center gap-3">
              Download Menu (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Reserve for dinner</h2>
          <p className="text-xl text-gray-600 mb-8">
            Limited seating each evening. Booking recommended.
          </p>
          <Link href="/reservations" className="btn-primary btn-cta">
            Reserve a Table
          </Link>
        </div>
      </section>
    </main>
  );
}
