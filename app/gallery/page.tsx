"use client";

import { Buildings, CookingPot, ForkKnife, ImageSquare } from "phosphor-react";

const galleries = [
  {
    icon: ForkKnife,
    category: "French Signatures",
    items: [
      {
        name: "Coq au Vin",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Burgundy Short Rib",
        image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "French Onion Soup",
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Creme Brulee",
        image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    icon: CookingPot,
    category: "Italian Classics",
    items: [
      {
        name: "Pappardelle al Ragu",
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Risotto ai Funghi",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Branzino al Forno",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Tiramisu",
        image: "https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    icon: Buildings,
    category: "Dining Ambiance",
    items: [
      {
        name: "Queens Dining Room",
        image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Live Piano Lounge",
        image: "https://images.unsplash.com/photo-1454922915609-78549ad709bb?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Chef's Counter",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Private Dining",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

export default function Gallery() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-white/70">
            Real dishes, piano-lit evenings, and the interiors that set the tone in Queens
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {galleries.map((gallery) => {
            const Icon = gallery.icon;
            return (
              <div key={gallery.category} className="mb-20">
                <h2 className="text-4xl font-bold mb-12 text-neutral-900 flex items-center gap-4">
                  <span className="icon-badge">
                    <Icon size={22} weight="bold" />
                  </span>
                  {gallery.category}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {gallery.items.map((item, i) => (
                    <div
                      key={item.name}
                      className="card-elegant relative h-56 overflow-hidden animate-fade-in-up group"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="text-center absolute inset-0 bg-black/40 text-white flex flex-col items-center justify-center gap-3 opacity-0 transition group-hover:opacity-100">
                        <span className="icon-badge bg-white/10 text-white">
                          <ImageSquare size={22} weight="bold" />
                        </span>
                        <p className="font-semibold">{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-neutral-50 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-neutral-900">Experience Bella Francese</h2>
          <p className="text-lg text-gray-700 mb-8">
            These photos barely capture the warmth, aroma, and flavor of dining with us. Come experience authentic
            French and Italian cuisine in our elegant setting.
          </p>
          <a href="/reservations" className="btn-primary btn-cta">
            Make a Reservation
          </a>
        </div>
      </section>
    </main>
  );
}
