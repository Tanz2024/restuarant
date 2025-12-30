import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen hero-gradient text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                French & Italian Excellence
              </h1>
              <p className="text-xl text-yellow-50 mb-8">
                Authentic Mediterranean cuisine crafted with passion, tradition, and the finest imported ingredients from France and Italy.
              </p>
              <div className="flex gap-4">
                <Link href="/reservations" className="btn-primary">
                  👉 Reserve a Table
                </Link>
                <Link href="/menu" className="btn-secondary text-yellow-50 border-yellow-50">
                  View Menu
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block animate-slide-in-right">
              <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-lg h-96 flex items-center justify-center shadow-2xl">
                <div className="text-6xl animate-float">🍽️🍲🥘</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-yellow-50 py-8 border-b-2 border-red-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <p className="text-2xl mb-2">⭐</p>
              <p className="text-lg font-semibold text-red-900">4.8 Google Rating</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.1s'}}>
              <p className="text-2xl mb-2">📍</p>
              <p className="text-lg font-semibold text-red-900">Downtown City Center</p>
            </div>
            <div className="animate-scale-in" style={{animationDelay: '0.2s'}}>
              <p className="text-2xl mb-2">🕒</p>
              <p className="text-lg font-semibold text-red-900">Open Today: 5:00 PM – 10:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Chef's Favorites</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { dish: "Coq au Vin", desc: "Tender chicken in Burgundy wine sauce", emoji: "🍗" },
              { dish: "Risotto ai Funghi", desc: "Creamy Italian arborio with porcini", emoji: "🍚" },
              { dish: "Pappardelle al Ragù", desc: "Handmade pasta with slow-cooked sauce", emoji: "🍝" },
              { dish: "Crème Brûlée", desc: "Classic French custard with caramelized sugar", emoji: "✨" },
            ].map((item, i) => (
              <div key={i} className="card-elegant p-6 transform hover:rotate-1 animate-fade-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                <p className="text-4xl mb-4">{item.emoji}</p>
                <h3 className="text-lg font-bold mb-2 text-red-900">{item.dish}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn-primary">
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Guests Love Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Why Guests Love Us</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Features */}
            <div className="space-y-8">
              {[
                { icon: "🧀", title: "Imported from France & Italy" },
                { icon: "👨‍🍳", title: "Chef-Curated Recipes" },
                { icon: "🍷", title: "Premium Wine Selection" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <p className="text-4xl">{item.icon}</p>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">
                      {i === 0 && "Premium ingredients imported directly from the vineyards and farms of France and Italy."}
                      {i === 1 && "Traditional recipes from Lyon, Tuscany, and the Côte d'Azur prepared with meticulous care."}
                      {i === 2 && "Curated selection of French wines, Italian wines, and premium cocktails to complement your meal."}
                    </p>
                  </div>
                </div>
              ))}
            </div>

      {/* Atmosphere Image */}
            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg h-96 flex items-center justify-center shadow-xl">
              <div className="text-6xl animate-pulse-subtle">🏢🍷😌</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-red-300 to-red-400 rounded-lg h-96 flex items-center justify-center shadow-xl">
              <p className="text-gray-700 text-lg font-semibold">📍 Map Would Load Here</p>
            </div>

            {/* Location Info */}
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold mb-6 text-red-900">Find Us Easily</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg mb-2 text-red-700">📍 Address</p>
                  <p className="text-gray-700">123 Via Principale, Downtown City</p>
                </div>
                <div>
                  <p className="font-bold text-lg mb-2 text-red-700">🅿️ Parking</p>
                  <p className="text-gray-700">Complimentary valet parking available</p>
                </div>
                <div>
                  <p className="font-bold text-lg mb-2 text-red-700">🚕 Transportation</p>
                  <p className="text-gray-700">Easily accessible by car or public transit</p>
                </div>
                <Link href="/contact" className="btn-primary inline-block mt-6">
                  👉 Get Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-amber-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready for a great meal?</h2>
        <p className="text-xl text-amber-100 mb-8">Join us for an unforgettable dining experience</p>
        <Link href="/reservations" className="btn-primary">
          👉 Reserve Your Table Today
        </Link>
      </section>
    </main>
  );
}
